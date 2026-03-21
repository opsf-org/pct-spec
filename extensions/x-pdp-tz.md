# Namespace: `x-pdp-tz:`
## Personal Data Protection Act (Tanzania)

**Jurisdiction:** United Republic of Tanzania (TZ)
**Frameworks addressed:** Personal Data Protection Act 2022; Personal Data
Protection (Personal Data Collection and Processing) Regulations 2023 (GN No.
449C); Personal Data Protection (Amendment) Regulations 2024 (GN No. 808).
Enforced by the Personal Data Protection Commission (PDPC Tanzania).
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-pdp-tz:processing_basis` | enum | CONDITIONAL | Processing basis under the Tanzanian framework. Note: field definitions should be confirmed against the Act and 2024 amended Regulations rather than assumed to mirror GDPR. Permitted values: `consent`, `contract_performance`, `legal_obligation`, `vital_interests`, `public_task`, `legitimate_interests`. |
| `x-pdp-tz:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data under the Tanzanian PDPA. |
| `x-pdp-tz:registration_role` | enum | OPTIONAL | The registration role under the Tanzanian framework. Permitted values: `controller`, `processor`, `controller_and_processor`. |
| `x-pdp-tz:pdpc_registration_ref` | string | OPTIONAL | Registration reference issued by PDPC Tanzania. |
| `x-pdp-tz:cross_border_transfer_mechanism` | enum | OPTIONAL | Transfer mechanism under the 2023 Regulations as amended 2024. Permitted values: `adequacy`, `commission_approval`, `contractual_safeguards`, `consent`, `statutory_derogation`. |
| `x-pdp-tz:breach_notification_flag` | boolean | OPTIONAL | Set to `true` where a notifiable personal data breach has occurred and notification duties under the Act and Regulations are triggered. |

### Revision notes
- Framework description updated to include 2024 Amendment Regulations (GN No. 808).
- `registration_role` added distinguishing controller/processor registration.
- `breach_notification_flag` added — a genuine omission in original draft.
- `cross_border_transfer_mechanism` updated to reflect 2023/2024 Regulations regime.

*This namespace is reserved for registration by a qualified Tanzanian data protection law practitioner.*
