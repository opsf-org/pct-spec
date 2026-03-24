# Namespace: `x-pdp-id:`
## Personal Data Protection Law (Indonesia)

**Jurisdiction:** Republic of Indonesia (ID)
**Frameworks addressed:** Law No. 27 of 2022 on Personal Data Protection (UU PDP).
Supervision by Komdigi pending formal independent supervisory institution.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

Indonesia's UU PDP applies to processing of personal data of individuals in
Indonesia. The law introduces criminal liability for unlawful obtaining, disclosure,
use, and falsification of personal data. Note: breach notification is required
no later than 3x24 hours (72 hours) under Article 46 — not 14 days as previously
stated.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-pdp-id:processing_basis` | enum | CONDITIONAL | Articles 20-21. Permitted values: `consent`, `contract_performance`, `legal_obligation`, `vital_interests`, `public_interest_or_service`, `other_lawful_ground`. |
| `x-pdp-id:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes specific personal data under Article 4. |
| `x-pdp-id:child_data_flag` | boolean | OPTIONAL | Set to `true` where data relates to a child under 18. |
| `x-pdp-id:child_consent_ref` | string (URI) | CONDITIONAL | Required when `child_data_flag` is `true`. Reference to parental or guardian consent evidence. |
| `x-pdp-id:dpo_required_flag` | boolean | OPTIONAL | Set to `true` where DPO appointment is required under Article 53 for public services, large-scale systematic monitoring, or large-scale processing of specific personal data. |
| `x-pdp-id:transfer_mechanism` | enum | OPTIONAL | Cross-border transfer mechanism under Article 56. Permitted values: `equivalent_protection`, `adequate_and_binding_safeguards`, `consent`. |
| `x-pdp-id:breach_notification_flag` | boolean | OPTIONAL | Set to `true` where breach notification to the data subject is required. |
| `x-pdp-id:authority_notification_flag` | boolean | OPTIONAL | Set to `true` where notification to the competent authority is required under Article 46. Notification must occur no later than 3x24 hours after the breach is known. |
| `x-pdp-id:governance_risk_flag` | boolean | OPTIONAL | Governance indicator (not a statutory compliance status) set to `true` where processing involves personal data categories where criminal liability under Articles 67-73 is a relevant risk. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- Breach notification timing corrected from 14 days to 3x24 hours (Article 46).
- `transfer_mechanism` aligned to Article 56.
- `criminal_liability_risk_flag` reframed as `governance_risk_flag` — a governance indicator not a statutory status.
- `authority_notification_flag` added.

---

### Citations

- Law No. 27 of 2022 on Personal Data Protection, Articles 20, 21, 46, 53, 56, 67-73

---

*This namespace is reserved for registration by a qualified Indonesian data
protection law practitioner. Contact pct@opsf.org to register as
the owner.*
