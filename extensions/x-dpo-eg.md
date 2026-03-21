# Namespace: `x-dpo-eg:`
## Personal Data Protection Law (Egypt)

**Jurisdiction:** Arab Republic of Egypt (EG)
**Frameworks addressed:** Personal Data Protection Law No. 151 of 2020 and
Executive Regulations. Enforced by the Personal Data Protection Center (PDPC
Egypt). Note: the Executive Regulations decree citation in earlier drafts could
not be verified from official Egyptian government sources and should be confirmed
before finalising.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-dpo-eg:consent_required_flag` | boolean | CONDITIONAL | Set to `true` where explicit consent has been obtained under Article 2. Note: Egypt PDPL is primarily consent-based — collection, processing, disclosure, or revealing of personal data without explicit consent is prohibited unless otherwise authorised by law. It does not use a GDPR-style six-basis model. |
| `x-dpo-eg:statutory_exception_basis` | enum | OPTIONAL | Where processing occurs without consent, the applicable statutory authorisation. Permitted values: `legal_obligation`, `vital_interests`, `public_interest`, `judicial_proceedings`, `other_statutory_authorisation`. |
| `x-dpo-eg:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data under Article 2, including genetic data, biometric data, health data, racial or ethnic origin, religious beliefs, political opinions, criminal records, and financial data. |
| `x-dpo-eg:authorisation_type` | enum | OPTIONAL | The form of PDPC Egypt authorisation applicable to the processing activity. Permitted values: `licence`, `permit`, `accreditation`, `none`. Note: the law distinguishes between licences, permits, and accreditations depending on the activity. |
| `x-dpo-eg:dpo_ref` | string (URI) | OPTIONAL | Reference to the designated Data Protection Officer record. |
| `x-dpo-eg:transfer_adequacy_flag` | boolean | OPTIONAL | Set to `true` where the destination jurisdiction meets the adequate protection level required by Article 14, as recognised by the PDPC Egypt. |
| `x-dpo-eg:cross_border_transfer_basis` | enum | OPTIONAL | Transfer basis under Article 14. Permitted values: `pdpc_adequate_country`, `explicit_consent`, `contract_performance`, `vital_interests`, `public_interest`, `legal_proceedings`. |
| `x-dpo-eg:data_localisation_flag` | boolean | OPTIONAL | Set to `true` where sectoral regulations (e.g. Central Bank of Egypt) require data storage within Egypt. |

### Revision notes
- `processing_basis` replaced by `consent_required_flag` plus `statutory_exception_basis`: Egypt PDPL is consent-first, not GDPR six-basis.
- `pdpc_licence_ref` replaced by `authorisation_type` enum reflecting licence/permit/accreditation distinction.
- `dpo_ref` added reflecting DPO obligations in the law.
- `transfer_adequacy_flag` added reflecting Article 14 adequacy requirement.
- Executive Regulations decree citation flagged as unverified — practitioners should confirm.

*This namespace is reserved for registration by a qualified Egyptian data protection law practitioner.*
