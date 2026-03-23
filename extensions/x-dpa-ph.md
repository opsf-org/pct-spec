# Namespace: `x-dpa-ph:`
## Data Privacy Act (Philippines)

**Jurisdiction:** Republic of the Philippines (PH)
**Frameworks addressed:** Data Privacy Act of 2012 (Republic Act No. 10173),
Implementing Rules and Regulations; NPC Circular No. 2022-04 on registration;
NPC Circular No. 16-03 on breach management; NPC Advisory No. 2024-01 on model
contractual clauses for cross-border transfers. Enforced by the National Privacy
Commission (NPC).
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

The Philippines DPA distinguishes the criteria for lawful processing of personal
information (Section 12) from the narrower grounds for processing sensitive
personal information and privileged information (Section 13). Registration
requirements under Circular No. 2022-04 apply to organisations with 250 or more
employees, processing sensitive personal information of at least 1,000 individuals,
or whose processing is likely to pose a risk to data subject rights.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-dpa-ph:personal_info_processing_ground` | enum | CONDITIONAL | Required when processing personal information under DPA Section 12. Permitted values: `consent`, `contract_performance`, `compliance_with_legal_obligation`, `protection_of_vital_interests`, `public_function`, `legitimate_interests`. |
| `x-dpa-ph:sensitive_info_processing_ground` | enum | CONDITIONAL | Required when processing sensitive personal information or privileged information under DPA Section 13. Permitted values: `explicit_consent`, `law_or_regulation`, `protection_of_life`, `medicine_health_services`, `legal_proceedings`, `government_function`, `substantial_public_interest`. |
| `x-dpa-ph:sensitive_personal_info_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal information under DPA Section 3(l), including race, ethnic origin, marital status, age, colour, religious or political affiliations, health, education, genetic or sexual life, court proceedings, government-issued identifiers, or other classified information. |
| `x-dpa-ph:privileged_info_flag` | boolean | OPTIONAL | Set to `true` where data includes privileged information under DPA Section 3(k), subject to attorney-client privilege, doctor-patient privilege, or similar legally recognised privileges. |
| `x-dpa-ph:npc_registration_ref` | string | OPTIONAL | The registration reference issued by the NPC. Registration is required for organisations with 250 or more employees, processing sensitive personal information of at least 1,000 individuals, or whose processing is likely to pose a risk under Circular No. 2022-04. |
| `x-dpa-ph:dps_registration_required_flag` | boolean | OPTIONAL | Set to `true` where the organisation must register a data processing system with the NPC under Circular No. 2022-04. |
| `x-dpa-ph:dpo_registered_flag` | boolean | OPTIONAL | Set to `true` where the organisation's Data Protection Officer has been registered with the NPC under Circular No. 2022-04. |
| `x-dpa-ph:cross_border_transfer_safeguard` | enum | OPTIONAL | The safeguard mechanism for cross-border transfer under DPA Section 21 and NPC Advisory No. 2024-01. Permitted values: `contractual_clauses`, `data_sharing_or_outsourcing_agreement`, `controller_accountability_only`, `other`. Note: the Philippines does not operate a statutory whitelist country model. |
| `x-dpa-ph:breach_notification_flag` | boolean | OPTIONAL | Set to `true` where a notifiable personal data breach has occurred meeting the threshold criteria in NPC Circular No. 16-03, including likely harm to data subjects. Note: not every breach is notifiable — only those meeting specified threshold factors. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `processing_basis` replaced by `personal_info_processing_ground` (Section 12) and `sensitive_info_processing_ground` (Section 13) to reflect the statutory distinction.
- `npc_registration_ref` description corrected: threshold is 250+ employees or 1,000+ sensitive PI records, not simply 1,000 individuals.
- `cross_border_transfer_basis` replaced by `cross_border_transfer_safeguard` aligned to NPC Advisory No. 2024-01; whitelist country model removed.
- `dps_registration_required_flag` added for data processing system registration.
- `breach_notification_flag` description updated to reflect threshold requirements under Circular No. 16-03.

---

### Citations

- Republic Act No. 10173, Sections 12, 13, 20, 21
- NPC Circular No. 2022-04 on registration
- NPC Circular No. 16-03 on Personal Data Breach Management
- NPC Advisory No. 2024-01 on model contractual clauses

---

*This namespace is reserved for registration by a qualified Philippine data
protection law practitioner. Contact registry@pct.thedpg.com to register as
the owner.*
