# Namespace: `x-pdpl-qa:`
## Personal Data Privacy Law (Qatar)

**Jurisdiction:** State of Qatar (QA)
**Frameworks addressed:** Law No. 13 of 2016. Enforced by MCIT.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-pdpl-qa:consent_obtained_flag` | boolean | OPTIONAL | Set to `true` where consent has been obtained. Note: consent is central under Articles 4-5 but is not universally required — exceptions exist for legal obligation and public interest. |
| `x-pdpl-qa:processing_exception` | enum | OPTIONAL | Permitted values: `none`, `legal_obligation`, `public_interest`, `judicial_requirement`. |
| `x-pdpl-qa:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data. |
| `x-pdpl-qa:regulatory_approval_flag` | boolean | OPTIONAL | Set to `true` where prior approval from MCIT is required for the processing activity or transfer. |
| `x-pdpl-qa:cross_border_transfer_flag` | boolean | OPTIONAL | Set to `true` where data is transferred outside Qatar. Transfer requires adequacy or Ministerial approval under Article 13. |
| `x-pdpl-qa:government_entity_flag` | boolean | OPTIONAL | Set to `true` where the controller is a Qatari government entity. |

### Revision notes
- `consent_obtained_flag` note updated: consent not universally required.
- `processing_exception` added.
- `regulatory_approval_flag` added reflecting MCIT approval requirements.
- `cross_border_transfer_flag` description updated to reflect Article 13 adequacy or Ministerial approval requirement.

*This namespace is reserved for registration by a qualified Qatari data protection law practitioner.*
