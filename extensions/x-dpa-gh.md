# Namespace: `x-dpa-gh:`
## Data Protection Act (Ghana)

**Jurisdiction:** Republic of Ghana (GH)
**Frameworks addressed:** Data Protection Act 2012 (Act 843). Enforced by the
Data Protection Commission (DPC).
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-dpa-gh:processing_principles_applicable` | array of enum | CONDITIONAL | The applicable data protection principles under Act 843. Permitted values: `lawfulness_fairness`, `purpose_specification`, `compatibility`, `data_quality`, `security`, `individual_participation`, `accountability`, `data_minimisation`. |
| `x-dpa-gh:special_personal_data_flag` | boolean | OPTIONAL | Set to `true` where data includes special personal data under Act 843 Sections 37-40, including racial or ethnic origin, political opinions, religious beliefs, trade union membership, health, sexual life, criminal convictions, and biometric data. Note: home address and financial status are not standard special data categories under Sections 37-40. |
| `x-dpa-gh:special_personal_data_basis` | enum | CONDITIONAL | Required when `special_personal_data_flag` is `true`. The basis for processing special personal data. Permitted values: `consent`, `employment_law`, `vital_interests`, `non_profit_body`, `legal_proceedings`, `medical_purposes`, `anti_discrimination_processing`, `other_statutory_exception`. |
| `x-dpa-gh:registration_required_flag` | boolean | OPTIONAL | Set to `true` where the entity is acting as a data controller required to register with the DPC under Sections 46-47. |
| `x-dpa-gh:dpc_registration_ref` | string | OPTIONAL | Registration reference issued by the Ghana DPC to the data controller. |
| `x-dpa-gh:cross_border_transfer_basis` | enum | OPTIONAL | The basis for cross-border transfer. Permitted values: `adequate_protection`, `consent`, `statutory_exception`, `other_lawful_safeguard`. |

### Revision notes
- `processing_principle` replaced by `processing_principles_applicable` (array) aligned to Act 843 full set of principles.
- `sensitive_data_flag` replaced by `special_personal_data_flag` with description corrected to Sections 37-40 (home address and financial status removed).
- `special_personal_data_basis` added for processing conditions under Sections 37-40.
- `cross_border_transfer_flag` (boolean) replaced by `cross_border_transfer_basis` (enum).
- `registration_required_flag` added.

*This namespace is reserved for registration by a qualified Ghanaian data protection law practitioner.*
