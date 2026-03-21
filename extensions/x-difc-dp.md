# Namespace: `x-difc-dp:`
## DIFC Data Protection Law (Dubai International Financial Centre)

**Jurisdiction:** Dubai International Financial Centre (AE-DIFC)
**Frameworks addressed:** DIFC Data Protection Law No. 5 of 2020 and DIFC Data
Protection Regulations 2020. Enforced by the DIFC Commissioner of Data Protection.
EU and UK adequacy recognised.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-difc-dp:processing_basis` | enum | CONDITIONAL | Permitted values: `consent`, `contract_performance`, `legal_obligation`, `vital_interests`, `public_task`, `legitimate_interests`. |
| `x-difc-dp:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data under DIFC DP Law Article 14. |
| `x-difc-dp:dpia_required_flag` | boolean | OPTIONAL | Set to `true` where a DPIA is required under Article 20 for high-risk processing. |
| `x-difc-dp:dpo_required_flag` | boolean | OPTIONAL | Set to `true` where DPO appointment is mandatory under Article 16 (high-risk processing, public bodies). Note: DPO is not universally required. |
| `x-difc-dp:adequate_jurisdiction_flag` | boolean | OPTIONAL | Set to `true` where the destination jurisdiction for transfer is recognised as adequate by the DIFC Commissioner under Article 27. Note: adequacy is assessed for destination jurisdictions, not for the DIFC entity itself. |
| `x-difc-dp:cross_border_transfer_basis` | enum | OPTIONAL | Transfer basis under Article 27. Permitted values: `difc_commissioner_adequacy_decision`, `standard_clauses`, `binding_corporate_rules`, `consent`, `contract_performance`, `vital_interests`. |
| `x-difc-dp:dp_officer_ref` | string (URI) | OPTIONAL | Reference to the registered DPO contact details as filed with the DIFC Commissioner. |

### Revision notes
- `adequacy_transfer_flag` replaced by `adequate_jurisdiction_flag`: adequacy applies to destination jurisdictions not the DIFC entity itself.
- `dpo_required_flag` added with note that DPO is not universally required under Article 16.
- Transfer basis description updated to reference DIFC Commissioner adequacy decisions.

*This namespace is reserved for registration by a qualified DIFC data protection law practitioner.*
