# Namespace: `x-pdpl-uae:`
## Federal Personal Data Protection Law (UAE Mainland)

**Jurisdiction:** United Arab Emirates — mainland (AE)
**Frameworks addressed:** Federal Decree-Law No. 45 of 2021; Cabinet Decision
No. 33 of 2022 (Executive Regulations). Enforced by the UAE Data Office.
Note: UAE Data Office guidance and adequacy lists remain under development as
of 2026.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-pdpl-uae:consent_obtained_flag` | boolean | CONDITIONAL | Set to `true` where consent has been obtained as the primary processing basis under UAE PDPL Article 5. |
| `x-pdpl-uae:processing_exemption` | enum | OPTIONAL | Statutory exception relied on where processing occurs without consent. Permitted values: `public_interest`, `legal_claims`, `health_protection`, `research`, `journalistic`, `legal_obligation`. Note: UAE PDPL does not use a GDPR-style closed lawful basis list; processing is consent-based with enumerated exceptions. |
| `x-pdpl-uae:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data under UAE PDPL Article 1. |
| `x-pdpl-uae:biometric_data_flag` | boolean | OPTIONAL | Set to `true` where data includes biometric data subject to enhanced requirements. |
| `x-pdpl-uae:child_data_flag` | boolean | OPTIONAL | Set to `true` where data relates to a child under 18. |
| `x-pdpl-uae:dpo_required_flag` | boolean | OPTIONAL | Set to `true` where DPO appointment is required under the Executive Regulations. |
| `x-pdpl-uae:data_subject_rights_applicable_flag` | boolean | OPTIONAL | Set to `true` where full PDPL data subject rights apply. Set to `false` where an exemption restricts applicable rights. |
| `x-pdpl-uae:cross_border_transfer_basis` | enum | OPTIONAL | The transfer basis under Article 22. Permitted values: `uae_data_office_approved_country`, `appropriate_safeguards_approved_by_data_office`, `consent`, `contract_performance`, `vital_interests`, `public_interest`. Note: "binding corporate rules" is not explicitly codified in UAE law and is subsumed under appropriate safeguards. |

### Revision notes
- `processing_basis` replaced by `consent_obtained_flag` plus `processing_exemption`: UAE PDPL is consent-based with exceptions, not a GDPR six-basis model.
- `cross_border_transfer_basis` updated: BCRs replaced with `appropriate_safeguards_approved_by_data_office`.
- `data_subject_rights_applicable_flag` added.
- Note added on UAE Data Office guidance development status.

*This namespace is reserved for registration by a qualified UAE data protection law practitioner.*
