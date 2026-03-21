# Namespace: `x-pdp-ar:`
## Personal Data Protection Law (Argentina)

**Jurisdiction:** Argentine Republic (AR)
**Frameworks addressed:** Law No. 25,326 on Personal Data Protection (2000);
Regulatory Decree 1558/2001. Enforced by AAIP. Argentina holds EU adequacy status.
Note: no replacement statute is in force as of March 2026.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-pdp-ar:consent_obtained_flag` | boolean | CONDITIONAL | Set to `true` where consent has been obtained as the primary basis. Note: Argentine law is primarily consent-based with statutory exceptions — it does not use a GDPR-style six-basis model including standalone legitimate interests. |
| `x-pdp-ar:processing_exception` | enum | OPTIONAL | Statutory exception where processing occurs without consent. Permitted values: `none`, `legal_obligation`, `public_functions`, `contractual_relationship`, `health_emergency`, `scientific_or_statistical_dissociation`, `other_statutory_exception`. |
| `x-pdp-ar:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data under Article 2, including racial or ethnic origin, political opinions, religious or philosophical convictions, union membership, health or sexual life. |
| `x-pdp-ar:rnbd_registration_ref` | string | OPTIONAL | Registration reference in the Argentine National Registry of Personal Data Bases (RNBD). Registration is mandatory for all private and public data controllers under AAIP. |
| `x-pdp-ar:habeas_data_request_flag` | boolean | OPTIONAL | Set to `true` where a habeas data action has been initiated and is pending. |
| `x-pdp-ar:cross_border_transfer_basis` | enum | OPTIONAL | Transfer basis under Article 12. Permitted values: `aaip_approved_country`, `consent`, `judicial_cooperation`, `medical_emergency`, `bank_or_stock_transfer`, `international_treaty`, `contractual_necessity`. |

### Revision notes
- `processing_basis` replaced by `consent_obtained_flag` plus `processing_exception`: Argentine law is consent-based with statutory exceptions.
- `eu_adequacy_transfer_flag` removed: describes EU/UK basis for sending data to Argentina, not an Argentine domestic law obligation.
- `international_transfer_exception` enum added.

*This namespace is reserved for registration by a qualified Argentine data protection law practitioner.*
