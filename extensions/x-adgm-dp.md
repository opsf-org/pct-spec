# Namespace: `x-adgm-dp:`
## ADGM Data Protection Regulations (Abu Dhabi Global Market)

**Jurisdiction:** Abu Dhabi Global Market (AE-ADGM)
**Frameworks addressed:** ADGM Data Protection Regulations 2021 (DPR 2021).
Enforced by the ADGM Registration Authority.
**Registration tier:** Open
**Review status:** ai_reviewed — Accurate as drafted
**Review date:** 2026-03-20

### Overview

The ADGM DPR 2021 closely aligns with GDPR. The ChatGPT review found no material
inaccuracies in the original namespace definition.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-adgm-dp:processing_basis` | enum | CONDITIONAL | Permitted values: `consent`, `contract_performance`, `legal_obligation`, `vital_interests`, `public_task`, `legitimate_interests`. |
| `x-adgm-dp:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data under DPR 2021 Rule 10. |
| `x-adgm-dp:dpia_required_flag` | boolean | OPTIONAL | Set to `true` where a DPIA is required under DPR 2021 Rule 16 for high-risk processing. |
| `x-adgm-dp:cross_border_transfer_basis` | enum | OPTIONAL | Transfer basis under DPR 2021 Rule 22. Permitted values: `adequacy_decision`, `standard_clauses`, `binding_corporate_rules`, `consent`, `contract_performance`, `vital_interests`. |

*This namespace is reserved for registration by a qualified ADGM data protection law practitioner.*
