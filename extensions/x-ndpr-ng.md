# Namespace: `x-ndpr-ng:`
## Nigeria Data Protection Act (Nigeria)

**Jurisdiction:** Federal Republic of Nigeria (NG)
**Frameworks addressed:** Nigeria Data Protection Act 2023 (NDPA); Nigeria Data
Protection Act General Application and Implementation Directive (GAID) 2025;
NDPC Updated Guidance Notice on Registration of Data Controllers and Data
Processors of Major Importance (March 2025). Enforced by the Nigeria Data
Protection Commission (NDPC).
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

Nigeria's NDPA 2023 replaced the NDPR 2019 as the primary data protection
instrument. The GAID 2025 provides detailed implementation guidance including
classification of data controllers and processors of major importance into three
categories (OHL, EHL, UHL), DPO designation requirements, cross-border transfer
mechanisms, and annual Compliance Audit Return filing obligations. Registration
is required only for data controllers and processors of major importance under
Section 44 NDPA, not for all organisations.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-ndpr-ng:processing_basis` | enum | CONDITIONAL | Required when the primary framework is Nigeria NDPA. Permitted values: `consent`, `contract_performance`, `legal_obligation`, `vital_interests`, `public_task`, `legitimate_interests`. |
| `x-ndpr-ng:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data under NDPA, including genetic data, biometric data, health data, racial or ethnic origin, political opinions, religious beliefs, trade union membership, sex life or sexual orientation, or criminal convictions. |
| `x-ndpr-ng:major_importance_status` | enum | OPTIONAL | Whether the entity is a data controller or processor of major importance under Section 44 NDPA and GAID 2025. Permitted values: `none`, `ohl` (Ordinary High Level), `ehl` (Enhanced High Level), `uhl` (Ultra High Level). Registration with NDPC is required for OHL, EHL, and UHL entities. |
| `x-ndpr-ng:dpo_assessment_ref` | string (URI) | OPTIONAL | Reference to DPO assessment and designation records under GAID 2025, which addresses designation, position, qualifications, and semi-annual internal reporting requirements. |
| `x-ndpr-ng:cross_border_transfer_mechanism` | enum | OPTIONAL | The mechanism for cross-border transfer under NDPA and GAID 2025. Permitted values: `adequacy`, `binding_corporate_rules`, `contractual_clauses`, `code_of_conduct`, `certification`, `derogation`. |
| `x-ndpr-ng:car_filing_required_flag` | boolean | OPTIONAL | Set to `true` where the entity is required to file an annual Compliance Audit Return with the NDPC under GAID 2025. Required for data controllers and processors of major importance. |
| `x-ndpr-ng:periodic_audit_flag` | boolean | OPTIONAL | Set to `true` where the entity is required to conduct periodic data protection compliance audits under GAID 2025. Applies to all controllers and processors, not only those of major importance. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- Framework updated from NDPR 2019 to NDPA 2023 plus GAID 2025.
- `major_importance_status` added reflecting Section 44 NDPA and GAID 2025 OHL/EHL/UHL classification.
- `data_controller_registration_flag` replaced by `major_importance_status` — registration applies only to entities of major importance, not all organisations.
- `dpo_appointed_flag` replaced by `dpo_assessment_ref` reflecting GAID 2025 detailed DPO requirements.
- `car_filing_required_flag` added distinguishing annual filing duty from general audit duty.
- `periodic_audit_flag` added reflecting general audit obligation under GAID 2025.
- `cross_border_transfer_mechanism` enum updated to include codes of conduct and certification.

---

### Citations

- Nigeria Data Protection Act 2023, Sections 30, 44
- NDPC GAID 2025, Articles 9-11, 45 and Schedules 2, 5, 7, 8
- NDPC Updated Guidance Notice on Registration, March 2025

---

*This namespace is reserved for registration by a qualified Nigerian data
protection law practitioner. Contact registry@pct.opsf.org to register as
the owner.*
