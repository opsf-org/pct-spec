# Namespace: `x-lpdp-cl:`
## Personal Data Protection Law (Chile)

**Jurisdiction:** Republic of Chile (CL)
**Frameworks addressed:** Law No. 19,628 on the Protection of Private Life (1999)
as amended — current operative law. Ley 21.719 published 13 December 2024 with
deferred entry into force on 1 December 2026 — not yet operative as of March 2026.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

As of March 2026, Chile's operative data protection framework remains Law 19,628.
Ley 21.719 was published on 13 December 2024 and will introduce a comprehensive
reformed framework including the Agencia de Protección de Datos Personales (APDC),
new lawful bases, GDPR-aligned rights, DPIAs, and breach notification. However,
Ley 21.719 has a deferred entry into force of 1 December 2026 and is not currently
operative. Fields in this namespace are structured to support both current and
future-state claims.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-lpdp-cl:framework_version` | enum | REQUIRED | Identifies the applicable Chilean framework. Permitted values: `law_19628_current` (operative law as of March 2026), `law_21719_future` (deferred framework effective 1 December 2026). |
| `x-lpdp-cl:future_commencement_flag` | boolean | OPTIONAL | Set to `true` where any field in this namespace relies on provisions of Ley 21.719 that are scheduled to take effect on 1 December 2026 and are not yet operative. |
| `x-lpdp-cl:processing_basis` | enum | CONDITIONAL | Required when `framework_version` is `law_21719_future`. Reflects the reformed framework. Permitted values: `consent`, `contract_performance`, `legal_obligation`, `vital_interests`, `public_task`, `legitimate_interests`. Note: Law 19,628 does not use a GDPR-style basis taxonomy — this field applies only when the future framework is referenced. |
| `x-lpdp-cl:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data. Under Law 19,628, sensitive data includes health data, racial or ethnic origin, union membership, political opinions, religious beliefs, and life habits. Under Ley 21.719 the categories will be updated on commencement. |
| `x-lpdp-cl:dpia_required_flag` | boolean | OPTIONAL | Set to `true` where a Data Protection Impact Assessment is required. Note: under Law 19,628 there is no formal DPIA requirement. This field relates to future obligations under Ley 21.719 effective 1 December 2026. Set `future_commencement_flag` to `true` when using this field. |
| `x-lpdp-cl:breach_notification_flag` | boolean | OPTIONAL | Set to `true` where a personal data breach notification obligation is triggered. Note: under Law 19,628 there is no mandatory breach notification requirement. This field relates to future obligations under Ley 21.719. Set `future_commencement_flag` to `true` when using this field. |
| `x-lpdp-cl:cross_border_transfer_basis` | enum | OPTIONAL | The basis for cross-border transfer. Under Law 19,628 transfers are governed by adequacy and consent. Under Ley 21.719 (future): `apdc_approved_country`, `standard_clauses`, `binding_corporate_rules`, `consent`, `contract_performance`, `vital_interests`. Set `future_commencement_flag` where using future-state values. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- **Critical correction:** Ley 21.719 does not come into force until 1 December 2026. Previous version incorrectly treated it as already operative.
- `framework_version` field added to distinguish current and future-state claims.
- `future_commencement_flag` added to mark fields relying on deferred provisions.
- APDC described as future authority only, not currently operational.
- All fields using Ley 21.719 provisions marked with commencement note.

---

### Citations

- Biblioteca del Congreso Nacional, Ley 21.719, published 13 December 2024, entry into force 1 December 2026
- Biblioteca del Congreso Nacional, Ley 19.628 current text

---

*This namespace is reserved for registration by a qualified Chilean data
protection law practitioner. Contact registry@pct.opsf.org to register as
the owner.*
