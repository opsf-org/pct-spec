# Namespace: `x-lpdp-pe:`
## Personal Data Protection Law (Peru)

**Jurisdiction:** Republic of Peru (PE)
**Frameworks addressed:** Law No. 29733 on Personal Data Protection; Decreto
Supremo No. 016-2024-JUS (Reglamento, published 30 November 2024, in force
31 March 2025). Enforced by ANPD Peru. Note: the previous Reglamento (DS No.
003-2013-JUS) has been repealed.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-lpdp-pe:framework_version` | enum | OPTIONAL | The applicable Peruvian regulatory version. Permitted values: `law_29733_ds_016_2024_jus`. Note: the 2013 regulation (DS No. 003-2013-JUS) has been repealed. |
| `x-lpdp-pe:consent_obtained_flag` | boolean | CONDITIONAL | Set to `true` where prior consent has been obtained. Note: Peruvian law is consent-centred with statutory exceptions — it does not map to a GDPR six-basis model. |
| `x-lpdp-pe:processing_exception` | enum | OPTIONAL | Permitted values: `none`, `legal_mandate`, `contractual_necessity`, `public_functions`, `health_emergency`, `other_statutory_exception`. |
| `x-lpdp-pe:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data under Law 29733. |
| `x-lpdp-pe:bank_registration_required_flag` | boolean | OPTIONAL | Set to `true` where the controller holds a personal data bank requiring registration with ANPD Peru. Under the 2024 Reglamento, registration is free and subject to automatic approval with later verification. |
| `x-lpdp-pe:personal_data_bank_ref` | string | OPTIONAL | Registration reference in the National Registry of Personal Data Protection. |
| `x-lpdp-pe:cross_border_transfer_basis` | enum | OPTIONAL | Transfer basis under Law 29733 and DS No. 016-2024-JUS. Permitted values: `adequate_protection`, `consent`, `contract_performance`, `legal_obligation`, `vital_interests`, `judicial_proceedings`. |

### Revision notes
- Framework description updated: DS No. 016-2024-JUS is now operative from 31 March 2025; DS No. 003-2013-JUS repealed.
- `processing_basis` replaced by `consent_obtained_flag` plus `processing_exception`.
- `framework_version` added.
- `bank_registration_required_flag` added.
- Transfer basis updated to reflect current Reglamento.

*This namespace is reserved for registration by a qualified Peruvian data protection law practitioner.*
