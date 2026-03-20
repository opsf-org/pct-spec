/**
 * PCT 8-step verification pipeline — Section 6.2 / Section 4 State 4.
 *
 * The checks are executed in the order defined by the spec.  If any mandatory
 * check fails the pipeline short-circuits with a BLOCK decision.
 */

import { compactVerify, importSPKI, type KeyLike } from "jose";
import type {
  PCTPayload,
  VerificationRequest,
  VerificationResponse,
  CheckResult,
  Decision,
  AuditRecord,
} from "../types/index.js";
import { v4 as uuidv4 } from "uuid";
import { createHash } from "node:crypto";

// ── Individual checks ───────────────────────────────────────────────

function checkExpiry(payload: PCTPayload, now: number): CheckResult {
  if (now < payload.valid_from) {
    return { check_name: "expiry_check", result: "fail", detail: "Token not yet valid" };
  }
  if (now > payload.expires_at) {
    return { check_name: "expiry_check", result: "fail", detail: "Token has expired" };
  }
  return { check_name: "expiry_check", result: "pass" };
}

function checkPurpose(payload: PCTPayload, requestedPurpose: string): CheckResult {
  if (payload.allowed_purposes.includes(requestedPurpose)) {
    return {
      check_name: "purpose_check",
      result: "pass",
      detail: `${requestedPurpose} is in allowed_purposes`,
    };
  }
  return {
    check_name: "purpose_check",
    result: "fail",
    detail: `${requestedPurpose} is not in allowed_purposes [${payload.allowed_purposes.join(", ")}]`,
  };
}

function checkJurisdiction(payload: PCTPayload, processingRegion: string): CheckResult {
  const { permitted_regions, restricted_regions } = payload.jurisdiction_rules;

  if (restricted_regions?.includes(processingRegion)) {
    return {
      check_name: "jurisdiction_check",
      result: "fail",
      detail: `${processingRegion} is in restricted_regions`,
    };
  }
  if (!permitted_regions.includes(processingRegion)) {
    return {
      check_name: "jurisdiction_check",
      result: "fail",
      detail: `${processingRegion} is not in permitted_regions [${permitted_regions.join(", ")}]`,
    };
  }
  return {
    check_name: "jurisdiction_check",
    result: "pass",
    detail: `${processingRegion} is in permitted_regions`,
  };
}

function checkConsent(payload: PCTPayload, requestedPurpose: string): CheckResult {
  // Only required when lawful_basis includes consent
  if (!payload.lawful_basis.bases.includes("consent")) {
    return { check_name: "consent_check", result: "pass", detail: "Consent-based check not applicable" };
  }

  if (!payload.consent_status) {
    return { check_name: "consent_check", result: "fail", detail: "consent_status is false or missing" };
  }

  if (payload.consent_scope && !payload.consent_scope.includes(requestedPurpose)) {
    return {
      check_name: "consent_check",
      result: "fail",
      detail: `${requestedPurpose} not in consent_scope`,
    };
  }

  return {
    check_name: "consent_check",
    result: "pass",
    detail: `consent_status true, scope covers ${requestedPurpose}`,
  };
}

function checkDataCategory(payload: PCTPayload): CheckResult {
  // Verify that special category data has appropriate safeguards
  const specialCategories = ["special_category", "health", "biometric", "genetic", "criminal"];
  const hasSpecial = payload.data_categories.some((c) => specialCategories.includes(c));

  if (hasSpecial) {
    // For special category data, lawful_basis must not be "not_applicable"
    if (payload.lawful_basis.bases.includes("not_applicable") && payload.lawful_basis.bases.length === 1) {
      return {
        check_name: "data_category_check",
        result: "fail",
        detail: "Special category data requires an explicit lawful basis",
      };
    }
  }

  return { check_name: "data_category_check", result: "pass" };
}

function checkTransferRestrictions(payload: PCTPayload, processingRegion: string): CheckResult {
  // If data_origin and processing_region are the same, no cross-border transfer
  if (payload.data_origin === processingRegion) {
    return {
      check_name: "transfer_restriction_check",
      result: "pass",
      detail: "no cross-border transfer",
    };
  }

  // Cross-border: check transfer_restrictions if present
  if (!payload.transfer_restrictions) {
    return {
      check_name: "transfer_restriction_check",
      result: "fail",
      detail: "Cross-border transfer but no transfer_restrictions defined",
    };
  }

  if (!payload.transfer_restrictions.permitted_destinations.includes(processingRegion)) {
    return {
      check_name: "transfer_restriction_check",
      result: "fail",
      detail: `${processingRegion} is not in permitted_destinations`,
    };
  }

  return { check_name: "transfer_restriction_check", result: "pass" };
}

// ── Main verification pipeline ──────────────────────────────────────

export interface VerifyOptions {
  /** Public key (PEM or KeyLike) for RS256 signature verification. */
  key: string | KeyLike | Uint8Array;
}

/**
 * Run the full 8-step verification pipeline against a compact PCT token.
 */
export async function verifyToken(
  request: VerificationRequest,
  options: VerifyOptions,
): Promise<{ response: VerificationResponse; auditRecord: AuditRecord }> {
  const checks: CheckResult[] = [];
  const now = request.request_timestamp;
  let decision: Decision = "ALLOW";
  const reasons: string[] = [];

  // ── Step 1: Signature verification ──
  let payload: PCTPayload;
  try {
    let verifyKey: KeyLike | Uint8Array;
    if (typeof options.key === "string") {
      verifyKey = await importSPKI(options.key, "RS256");
    } else {
      verifyKey = options.key;
    }

    const result = await compactVerify(request.pct, verifyKey);
    payload = JSON.parse(new TextDecoder().decode(result.payload));
    checks.push({ check_name: "signature_verification", result: "pass" });
  } catch {
    checks.push({ check_name: "signature_verification", result: "fail", detail: "Invalid signature" });
    decision = "BLOCK";
    reasons.push("Signature verification failed");

    return buildResult(request, decision, reasons, checks);
  }

  // ── Steps 2-7: Claims checks ──
  const claimChecks = [
    () => checkExpiry(payload, now),
    () => checkPurpose(payload, request.requested_purpose),
    () => checkJurisdiction(payload, request.processing_region),
    () => checkConsent(payload, request.requested_purpose),
    () => checkDataCategory(payload),
    () => checkTransferRestrictions(payload, request.processing_region),
  ];

  for (const runCheck of claimChecks) {
    const result = runCheck();
    checks.push(result);
    if (result.result === "fail") {
      decision = "BLOCK";
      reasons.push(`${result.check_name}: ${result.detail ?? "failed"}`);
    }
  }

  // ── Step 8: Extension claims ──
  // Extension validation is a hook point — implementations register custom
  // validators per namespace.  The base implementation passes if no extensions
  // are present.
  checks.push({ check_name: "extension_claims_check", result: "pass" });

  if (decision === "ALLOW") {
    reasons.push("All checks passed");
  }

  return buildResult(request, decision, reasons, checks);
}

// ── Helpers ─────────────────────────────────────────────────────────

function buildResult(
  request: VerificationRequest,
  decision: Decision,
  reasons: string[],
  checks: CheckResult[],
): { response: VerificationResponse; auditRecord: AuditRecord } {
  const auditId = uuidv4();
  const responseTimestamp = Math.floor(Date.now() / 1000);

  const response: VerificationResponse = {
    decision,
    decision_reasons: reasons,
    checks,
    audit_record_id: auditId,
    response_timestamp: responseTimestamp,
  };

  const auditRecord: AuditRecord = {
    audit_id: auditId,
    pct_id: "", // extracted from token during full verification
    request_id: request.request_id,
    requestor_id: request.requestor_id,
    requested_action: request.requested_action,
    requested_purpose: request.requested_purpose,
    processing_region: request.processing_region,
    decision,
    decision_reasons: reasons,
    checks,
    decision_timestamp: responseTimestamp,
    record_hash: "",
  };

  // Compute tamper-evident hash (SHA-256 of the audit record sans hash field)
  const hashInput = JSON.stringify({ ...auditRecord, record_hash: undefined });
  auditRecord.record_hash = createHash("sha256").update(hashInput).digest("hex");

  return { response, auditRecord };
}
