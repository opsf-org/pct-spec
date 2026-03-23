# Namespace: `x-qfc-dp:`
## Qatar Financial Centre Data Protection Regulations

**Jurisdiction:** Qatar Financial Centre (QA-QFC)
**Frameworks addressed:** QFC Data Protection Regulations 2021. Enforced by QFCRA.
**Registration tier:** Open
**Review status:** ai_reviewed — Accurate as drafted
**Review date:** 2026-03-20

### Overview

The QFC DPR 2021 closely aligns with GDPR. The ChatGPT review found no material
inaccuracies in the original namespace definition.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-qfc-dp:processing_basis` | enum | CONDITIONAL | Permitted values: `consent`, `contract_performance`, `legal_obligation`, `vital_interests`, `public_task`, `legitimate_interests`. |
| `x-qfc-dp:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data under QFC DPR 2021. |
| `x-qfc-dp:dpia_required_flag` | boolean | OPTIONAL | Set to `true` where a DPIA is required. |
| `x-qfc-dp:cross_border_transfer_basis` | enum | OPTIONAL | Permitted values: `adequacy_decision`, `standard_clauses`, `binding_corporate_rules`, `consent`, `contract_performance`, `vital_interests`. |

*This namespace is reserved for registration by a qualified QFC data protection law practitioner.*
