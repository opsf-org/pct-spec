# Namespace: `x-pdp-rw:`
## Law on the Protection of Personal Data and Privacy (Rwanda)

**Jurisdiction:** Republic of Rwanda (RW)
**Frameworks addressed:** Law No. 058/2021 of 13/10/2021. Enforced by RURA.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-pdp-rw:processing_basis` | enum | CONDITIONAL | Processing authorisation under Articles 4-12. Permitted values: `consent`, `contract_performance`, `legal_obligation`, `vital_interests`, `public_task`, `legitimate_interests`. |
| `x-pdp-rw:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data under the law. |
| `x-pdp-rw:registration_ref` | string | OPTIONAL | Registration certificate/number for the controller or processor under Articles 29-31. |
| `x-pdp-rw:dpo_required_flag` | boolean | OPTIONAL | Set to `true` where a personal data protection officer has been designated under Article 40. |
| `x-pdp-rw:breach_notification_flag` | boolean | OPTIONAL | Set to `true` where breach notification/reporting obligations under Articles 43-44 have been triggered. |
| `x-pdp-rw:cross_border_transfer_basis` | enum | OPTIONAL | Transfer basis. Note: GDPR-style standard clauses should not be assumed as a codified mechanism unless grounded in specific secondary instruments. Permitted values: `adequate_protection`, `consent`, `contract_performance`, `vital_interests`, `legal_obligation`. |

### Revision notes
- `registration_ref` added reflecting Articles 29-36 registration obligation.
- `dpo_required_flag` added reflecting Articles 40-41 DPO obligation.
- `breach_notification_flag` added reflecting Articles 43-44.
- `cross_border_transfer_basis` note updated: standard clauses not confirmed as codified mechanism.

*This namespace is reserved for registration by a qualified Rwandan data protection law practitioner.*
