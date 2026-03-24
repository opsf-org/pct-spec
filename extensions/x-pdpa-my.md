# Namespace: `x-pdpa-my:`
## Personal Data Protection Act (Malaysia)

**Jurisdiction:** Malaysia (MY)
**Frameworks addressed:** Personal Data Protection Act 2010 (Act 709) as amended
by the Personal Data Protection (Amendment) Act 2024, with commencement
determined by Gazette notice 31 December 2024. Commissioner Circular No. 1/2025
on Data Breach Notification; Commissioner Circular No. 2/2025 on DPO Appointment;
Personal Data Protection Guidelines No. 3/2025 on Cross-Border Transfer. Enforced
by the Department of Personal Data Protection (JPDP).
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

Malaysia's PDPA was materially amended by the Personal Data Protection (Amendment)
Act 2024, which commenced 31 December 2024. The amendments updated terminology
from "data user" to "data controller", introduced mandatory breach notification,
mandatory DPO appointment in specified circumstances, and updated cross-border
transfer obligations. The Commissioner issued detailed 2025 circulars and
guidelines implementing these obligations.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-pdpa-my:processing_principle` | array of enum | CONDITIONAL | Required when the primary framework is Malaysia PDPA. The applicable data protection principles. Permitted values: `general_principle`, `notice_choice_principle`, `disclosure_principle`, `security_principle`, `retention_principle`, `data_integrity_principle`, `access_principle`. |
| `x-pdpa-my:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data under PDPA Section 4, including physical or mental health, political opinions, religious beliefs, commission or alleged commission of any offence, or other categories determined by the Minister. |
| `x-pdpa-my:registration_role` | enum | OPTIONAL | The registration role under the amended PDPA. Permitted values: `data_controller`, `not_required`, `other`. Note: the amended regime uses "data controller" terminology, replacing "data user". |
| `x-pdpa-my:jpdp_registration_ref` | string | OPTIONAL | The registration reference issued by JPDP to the data controller. Registration is mandatory for prescribed classes of data controllers under the PDPA. |
| `x-pdpa-my:dpo_required_flag` | boolean | OPTIONAL | Set to `true` where the organisation must appoint a Data Protection Officer under the amended PDPA and Commissioner Circular No. 2/2025. |
| `x-pdpa-my:breach_notification_flag` | boolean | OPTIONAL | Set to `true` where a notifiable personal data breach has occurred triggering reporting obligations under Commissioner Circular No. 1/2025. |
| `x-pdpa-my:cross_border_transfer_basis` | enum | OPTIONAL | The basis for cross-border transfer under PDPA Section 129 and Guidelines No. 3/2025. Permitted values: `substantially_similar_law`, `consent`, `contractual_necessity`, `legal_proceedings`, `vital_interests`, `public_interest`, `reasonable_precautions_and_due_diligence`. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- **Critical update:** 2024 Amendment Act now in force. Framework description updated.
- Terminology updated from "data user" to "data controller".
- `dpo_required_flag` added reflecting Circular No. 2/2025.
- `breach_notification_flag` added reflecting Circular No. 1/2025.
- `cross_border_transfer_basis` enum updated per Guidelines No. 3/2025.
- `registration_role` added.

---

### Citations

- Personal Data Protection (Amendment) Act 2024
- Commissioner Circular No. 1/2025 on Data Breach Notification
- Commissioner Circular No. 2/2025 on DPO Appointment
- Personal Data Protection Guidelines No. 3/2025 on Cross-Border Transfer

---

*This namespace is reserved for registration by a qualified Malaysian data
protection law practitioner. Contact registry@pct.opsf.org to register as
the owner.*
