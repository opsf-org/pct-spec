# Namespace: `x-ai-us-fed:`
## US Federal AI Governance Framework

**Jurisdiction:** United States (US)
**Frameworks addressed:** NIST Artificial Intelligence Risk Management Framework
(AI RMF 1.0, 2023); OMB Memorandum M-25-21 on advancing governance, innovation,
and risk management for agency use of AI (3 April 2025); OMB Memorandum M-25-22
on AI acquisition; agency-specific AI guidance from FTC, EEOC, CFPB, and DOJ.
Note: Executive Order 14110 on Safe, Secure, and Trustworthy AI was rescinded
on 20 January 2025. OMB Memorandum M-24-10 was rescinded and replaced by M-25-21.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

The US federal approach to AI governance is characterised by voluntary frameworks,
agency guidance, and OMB policy rather than comprehensive legislation. Executive
Order 14110 was rescinded on 20 January 2025 and its associated reporting
requirements are no longer operative as executive order requirements. The current
federal baseline for agency AI use is OMB Memorandum M-25-21 (April 2025), which
replaced M-24-10. The NIST AI RMF 1.0 is a voluntary framework widely adopted
by federal agencies and the private sector but does not prescribe standard risk
tier categories. Multiple US states have enacted AI-specific legislation.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-ai-us-fed:nist_ai_rmf_profile_ref` | string (URI) | OPTIONAL | Reference to the organisation's NIST AI RMF profile for this AI system, documenting the risk management approach across the Govern, Map, Measure, and Manage functions. |
| `x-ai-us-fed:omb_policy_version` | enum | OPTIONAL | The current OMB AI policy under which this federal agency deployment is governed. Permitted values: `m_25_21`, `m_25_22`, `other_current_federal_guidance`. Note: M-24-10 was rescinded and replaced by M-25-21 on 3 April 2025. |
| `x-ai-us-fed:federal_agency_use_flag` | boolean | OPTIONAL | Set to `true` where the AI system is used by or on behalf of a US federal agency and is subject to OMB M-25-21 requirements including minimum risk management practices, annual inventories, and designated Chief AI Officers. |
| `x-ai-us-fed:federal_inventory_flag` | boolean | OPTIONAL | Set to `true` where the AI system is included in a federal agency AI inventory as required under current OMB policy. |
| `x-ai-us-fed:algorithmic_discrimination_assessment_flag` | boolean | OPTIONAL | Set to `true` where an assessment has been conducted for algorithmic discrimination under applicable law including the Fair Housing Act, Equal Credit Opportunity Act, Title VII, ADA, and guidance from the FTC, EEOC, CFPB, and DOJ. |
| `x-ai-us-fed:state_ai_law_applies_flag` | boolean | OPTIONAL | Set to `true` where a US state AI law applies to this AI system, including Colorado AI Act, Illinois AI Video Interview Act, New York City Local Law 144, or equivalent. The specific applicable law should be documented separately. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- **Critical correction:** Namespace renamed from `x-ai-us-eo:` to `x-ai-us-fed:`. Executive Order 14110 was rescinded 20 January 2025 and is not an operative federal requirement.
- `nist_ai_risk_tier` removed: NIST AI RMF does not prescribe standard risk tier categories.
- `ai_generated_content_flag` removed: watermarking requirement under EO 14110 is no longer operative.
- `dual_use_foundation_model_flag` removed: EO 14110 reporting requirement no longer operative.
- `federal_agency_use_flag` description updated to reference M-25-21 rather than M-24-10.
- `omb_policy_version` added reflecting current M-25-21 and M-25-22 framework.
- `federal_inventory_flag` added reflecting current OMB inventory requirements.

---

### Citations

- NIST, AI RMF 1.0 (2023)
- NIST confirmation that EO 14110 was rescinded 20 January 2025
- OMB Memorandum M-25-21, 3 April 2025
- OMB Memorandum M-25-22, 3 April 2025

---

*This namespace is registered and maintained by OPSF (Open Privacy Standards Foundation).
Contact pct@opsf.org for queries.*
