# PCT Example Tokens and Scenarios

This directory contains example Proof Claims Token payloads and verification scenarios for reference and testing.

---

## Scenario 1 — Permitted: UK clinical data, UK processing, valid consent

**File:** `scenario-1-allow-uk-clinical.json`  
**Expected decision:** `ALLOW`

All checks pass: model region matches permitted regions, purpose is in allowed_purposes, consent covers the purpose, and human oversight is noted in the audit record.

---

## Scenario 2 — Blocked: UK clinical data routed to US model

**File:** `scenario-2-block-jurisdiction.json`  
**Expected decision:** `BLOCK`

Jurisdiction check fails: `model_region` (US) is not in `permitted_regions` ([GB]) and `residency_required` is true.

---

## Scenario 3 — Blocked: purpose not in claims

**File:** `scenario-3-block-purpose.json`  
**Expected decision:** `BLOCK`

Purpose check fails: `commercial_research` is not present in `allowed_purposes`.

---

## Scenario 4 — Clinical trial data, multiple simultaneous failures

**File:** `scenario-4-block-multiple.json`  
**Expected decision:** `BLOCK`

Multiple failures: purpose, jurisdiction, and consent scope checks all fail.
