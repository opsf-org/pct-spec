# Namespace: `x-dpa-ke:`
## Data Protection Act (Kenya)

**Jurisdiction:** Republic of Kenya (KE)
**Frameworks addressed:** Data Protection Act No. 24 of 2019; Data Protection
(General) Regulations 2021; Data Protection (Registration) Regulations 2021.
ODPC Guidance Note on Processing of Children's Data (2025). Enforced by ODPC.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-dpa-ke:processing_basis` | enum | CONDITIONAL | Lawful grounds under Section 30 and Regulation 5. One basis should be relied on at a time. Permitted values: `consent`, `contract_performance`, `legal_obligation`, `vital_interests`, `public_task`, `legitimate_interests`. |
| `x-dpa-ke:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data under Section 2, including race, health status, ethnic social origin, conscience, belief, genetic data, biometric data, property details, marital status, family details, sex, and sexual orientation. Note: criminal records are not listed as sensitive personal data in the Section 2 definition. |
| `x-dpa-ke:controller_processor_category` | enum | OPTIONAL | The regulated role under the Registration Regulations 2021. Permitted values: `controller`, `processor`, `joint_controller`, `controller_and_processor`. Determines ODPC registration and accountability obligations. |
| `x-dpa-ke:odpc_registration_ref` | string | OPTIONAL | Registration certificate number issued by ODPC for designated classes of controllers/processors. |
| `x-dpa-ke:transfer_assessment_completed_flag` | boolean | OPTIONAL | Set to `true` where the transfer assessment required under Sections 48-50 and the General Regulations transfer assessment framework has been completed. |
| `x-dpa-ke:dpia_required_flag` | boolean | OPTIONAL | Set to `true` where a DPIA is required under Section 31 for large-scale sensitive data processing, systematic monitoring, or use of new technologies. |
| `x-dpa-ke:child_data_flag` | boolean | OPTIONAL | Set to `true` where data relates to a child under 18. |
| `x-dpa-ke:parental_consent_ref` | string (URI) | CONDITIONAL | Required when `child_data_flag` is `true`. Reference to verifiable parental or guardian consent evidence per ODPC Guidance Note 2025. |

### Revision notes
- `sensitive_data_flag` description updated: criminal records removed as not listed in Section 2.
- `controller_processor_category` added replacing simple registration flag.
- `transfer_assessment_completed_flag` added reflecting Sections 48-50 and Regulations framework.
- `parental_consent_ref` added reflecting ODPC 2025 Guidance Note on children's data.

*This namespace is reserved for registration by a qualified Kenyan data protection law practitioner.*
