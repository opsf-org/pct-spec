/**
 * PCT type definitions derived from the PCT Specification v0.1 and
 * schema/pct-schema-0.1.json.
 */

// ── Header ──────────────────────────────────────────────────────────

export type SigningAlgorithm = "RS256" | "HS256";

export interface PCTHeader {
  alg: SigningAlgorithm;
  kid: string;
  typ: "PCT";
  pct_version: string;
}

// ── Payload — Enums & Controlled Vocabularies ───────────────────────

export type SubjectType =
  | "dataset"
  | "data_flow"
  | "api_request"
  | "ai_interaction"
  | "transfer";

export type DataCategory =
  | "personal"
  | "sensitive"
  | "special_category"
  | "health"
  | "financial"
  | "biometric"
  | "genetic"
  | "criminal"
  | "communications"
  | "children"
  | "pseudonymised"
  | "anonymised";

export type LawfulBasisType =
  | "consent"
  | "contract"
  | "legal_obligation"
  | "vital_interests"
  | "public_task"
  | "legitimate_interests"
  | "not_applicable";

export type TransferMechanism =
  | "adequacy_decision"
  | "standard_contractual_clauses"
  | "binding_corporate_rules"
  | "derogation"
  | "not_required"
  | "other";

export type AIRiskTier = "minimal" | "limited" | "high" | "unacceptable";

/** Appendix B — Controlled purpose vocabulary. */
export type StandardPurpose =
  | "clinical_analytics"
  | "treatment_support"
  | `clinical_trial_protocol_${string}`
  | "research_public_interest"
  | "fraud_prevention"
  | "compliance_reporting"
  | "service_delivery"
  | "marketing_targeted"
  | "marketing_general"
  | "model_training"
  | "model_inference"
  | "data_portability"
  | "legal_proceedings"
  | "audit_internal"
  | "audit_external"
  | "archiving_public_interest";

// ── Payload — Nested Objects ────────────────────────────────────────

export interface LawfulBasis {
  bases: LawfulBasisType[];
  framework?: string;
  legitimate_interests_assessment_ref?: string;
  legal_obligation_ref?: string;
}

export interface JurisdictionRules {
  permitted_regions: string[];
  restricted_regions?: string[];
  residency_required?: boolean;
  sovereignty_framework?: string;
}

export interface TransferRestrictions {
  permitted_destinations: string[];
  transfer_mechanism: TransferMechanism;
  transfer_mechanism_ref?: string;
  onward_transfer_permitted?: boolean;
}

export interface AIContext {
  model_id: string;
  model_region: string;
  risk_tier: AIRiskTier;
  prohibited_use_check: boolean;
  human_oversight_required?: boolean;
  training_data_flag?: boolean;
  output_retention_permitted?: boolean;
  conformity_assessment_ref?: string;
}

// ── Payload ─────────────────────────────────────────────────────────

export interface PCTPayload {
  // Required fields (Section 5.2)
  pct_id: string;
  issued_at: number;
  valid_from: number;
  expires_at: number;
  issuer: string;
  subject_id: string;
  subject_type: SubjectType;
  data_origin: string;
  data_categories: DataCategory[];
  lawful_basis: LawfulBasis;
  allowed_purposes: string[];
  jurisdiction_rules: JurisdictionRules;

  // Conditional fields
  consent_status?: boolean;
  consent_scope?: string[];
  consent_record_ref?: string;

  // Optional fields
  transfer_restrictions?: TransferRestrictions;
  retention_limit?: string;
  automated_decision_flag?: boolean;
  ai_context?: AIContext;
  extensions?: Record<string, unknown>;
}

// ── Complete Token ──────────────────────────────────────────────────

export interface PCTToken {
  header: PCTHeader;
  payload: PCTPayload;
}

// ── Verification Request / Response (Section 7) ────────────────────

export type RequestedAction =
  | "process"
  | "transfer"
  | "ai_call"
  | "store"
  | "delete"
  | "disclose";

export interface VerificationRequest {
  pct: string; // compact-serialised token
  requested_action: RequestedAction;
  requested_purpose: string;
  processing_region: string;
  requestor_id: string;
  request_timestamp: number;
  request_id: string;
}

export type Decision = "ALLOW" | "BLOCK" | "TRANSFORM";

export interface CheckResult {
  check_name: string;
  result: "pass" | "fail";
  detail?: string;
}

export interface VerificationResponse {
  decision: Decision;
  decision_reasons: string[];
  checks: CheckResult[];
  transform_instructions?: string[];
  audit_record_id: string;
  response_timestamp: number;
}

// ── Audit Record (Section 8) ────────────────────────────────────────

export interface AuditRecord {
  audit_id: string;
  pct_id: string;
  request_id: string;
  requestor_id: string;
  requested_action: RequestedAction;
  requested_purpose: string;
  processing_region: string;
  decision: Decision;
  decision_reasons: string[];
  checks: CheckResult[];
  decision_timestamp: number;
  record_hash: string; // SHA-256 hex digest
}
