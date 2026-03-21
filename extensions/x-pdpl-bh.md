# Namespace: `x-pdpl-bh:`
## Personal Data Protection Law (Bahrain)

**Jurisdiction:** Kingdom of Bahrain (BH)
**Frameworks addressed:** Personal Data Protection Law (Legislative Decree No. 30
of 2018). Enforced by PDPA Bahrain.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-pdpl-bh:processing_basis` | enum | CONDITIONAL | Permitted values: `consent`, `contract_performance`, `legal_obligation`, `vital_interests`, `public_task`, `legitimate_interests`. |
| `x-pdpl-bh:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data under PDPL Article 1. |
| `x-pdpl-bh:breach_notification_flag` | boolean | OPTIONAL | Set to `true` where a breach triggers notification to PDPA Bahrain under Article 26. Note: the statute requires notification "without delay" — the 72-hour timeframe referenced in earlier drafts is guidance-derived rather than statutory text. |
| `x-pdpl-bh:transfer_permit_required_flag` | boolean | OPTIONAL | Set to `true` where PDPA Bahrain approval or permit is required before cross-border transfer. |
| `x-pdpl-bh:cross_border_transfer_basis` | enum | OPTIONAL | Transfer basis under PDPL Article 25. Permitted values: `pdpa_approved_country`, `contractual_clauses`, `consent`, `contract_performance`, `vital_interests`, `public_interest`. |
| `x-pdpl-bh:data_controller_registration_ref` | string | OPTIONAL | Registration reference issued by PDPA Bahrain. Note: Bahrain has moved toward notification/permit approaches and blanket registration requirements are evolving in practice. |

### Revision notes
- `breach_notification_flag` description corrected: "without delay" is the statutory standard; 72-hour timeline is guidance-derived.
- `transfer_permit_required_flag` added reflecting PDPA Bahrain approval requirements.
- Registration note updated to reflect evolving practice.

*This namespace is reserved for registration by a qualified Bahraini data protection law practitioner.*
