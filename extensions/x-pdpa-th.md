# Namespace: `x-pdpa-th:`
## Personal Data Protection Act (Thailand)

**Jurisdiction:** Thailand (TH)
**Frameworks addressed:** Personal Data Protection Act B.E. 2562 (2019), enforced
by the Personal Data Protection Committee (PDPC). PDPC Notifications on consent
forms, data breach notification, DPO requirements, and cross-border transfers
(2022-2024).
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

Thailand's PDPA establishes six lawful bases for processing, data subject rights,
and specific protections for sensitive personal data. It applies to any organisation
processing personal data of individuals in Thailand regardless of where the
organisation is based. PDPC has issued subordinate notifications on consent form
requirements, breach notification (72-hour obligation under Section 37(4)), DPO
appointment, and cross-border transfer mechanisms including binding corporate rules.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-pdpa-th:lawful_basis` | enum | CONDITIONAL | Required when the primary framework is Thailand PDPA. Permitted values: `consent`, `vital_interests`, `public_interest`, `contract`, `legal_obligation`, `legitimate_interests`. |
| `x-pdpa-th:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data under PDPA Section 26, including racial or ethnic origin, political opinion, religious or philosophical beliefs, sexual behaviour, criminal record, health data, disability, trade union membership, genetic data, or biometric data. |
| `x-pdpa-th:consent_explicit_flag` | boolean | CONDITIONAL | Required when `x-pdpa-th:sensitive_data_flag` is `true`. `true` indicates explicit consent has been obtained as required for sensitive data processing under PDPA Section 26, unless a specific statutory exception applies. |
| `x-pdpa-th:sensitive_exception_basis` | enum | OPTIONAL | Where processing of sensitive data occurs without explicit consent, the applicable exception under Section 26. Permitted values: `vital_interests`, `non_profit_body`, `legal_claims`, `substantial_public_interest`, `medical_or_health`, `public_health`, `research_or_statistics`. |
| `x-pdpa-th:cross_border_transfer_basis` | enum | OPTIONAL | The basis for cross-border transfer under PDPA Section 28 and PDPC notifications. Permitted values: `adequate_protection_standard`, `appropriate_safeguards`, `binding_corporate_rules`, `consent`, `contract`, `vital_interests`, `public_interest`. |
| `x-pdpa-th:breach_notification_flag` | boolean | OPTIONAL | Set to `true` where a personal data breach has occurred and notification to the PDPC is required within 72 hours under PDPA Section 37(4), and notification to affected data subjects where the breach is likely to affect their rights and freedoms. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `sensitive_exception_basis` added reflecting Section 26 exceptions where explicit consent is not required.
- `breach_notification_flag` added reflecting Section 37(4) 72-hour notification obligation.
- `binding_corporate_rules` added to cross-border transfer basis enum reflecting PDPC notifications.
- `cross_border_transfer_basis` description updated to reference PDPC notifications (2023).

---

### Citations

- Thailand PDPA B.E. 2562 (2019), Sections 26, 28, 37
- PDPC Notifications on Cross-border Transfer (2023)
- PDPC Notifications on consent form, breach notification, and DPO (2022-2024)

---

*This namespace is reserved for registration by a qualified Thai data protection
law practitioner. Contact registry@pct.opsf.org to register as the owner.*
