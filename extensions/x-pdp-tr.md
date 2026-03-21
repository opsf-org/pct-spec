# Namespace: `x-pdp-tr:`
## Personal Data Protection Law (Turkey)

**Jurisdiction:** Republic of Turkey (TR)
**Frameworks addressed:** Law on the Protection of Personal Data No. 6698 (KVKK)
as amended by Law No. 7499 (March 2024), enforced by the Personal Data Protection
Authority (KVKK Authority). The 2024 amendments fundamentally reformed Article 9
to introduce GDPR-like cross-border transfer mechanisms.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

Turkey's KVKK has been significantly reformed by Law No. 7499 (March 2024), which
restructured Article 9 to introduce adequacy decisions, standard contractual
clauses, binding corporate rules, and appropriate safeguards as cross-border
transfer mechanisms, broadly aligning with GDPR. The amended law also more closely
aligns lawful processing bases with GDPR. The VERBIS registry remains operative.
Breach notification timelines are governed by KVKK Board Decision 2019/10
(within 72 hours where possible), which is guidance-derived rather than statutory.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-pdp-tr:processing_basis` | enum | CONDITIONAL | Required when the primary framework is Turkey KVKK (as amended 2024). Permitted values: `explicit_consent`, `legal_obligation`, `contract_performance`, `vital_interests`, `public_task`, `legitimate_interests`. The 2024 amendments aligned the basis structure more closely with GDPR. |
| `x-pdp-tr:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes special categories under KVKK Article 6, including racial or ethnic origin, political opinion, philosophical belief, religion, sect or other beliefs, dress and appearance, association, foundation or union membership, health, sexual life, criminal conviction, and biometric and genetic data. |
| `x-pdp-tr:verbis_registration_ref` | string | OPTIONAL | The VERBIS (Data Controllers Registry) registration reference. Controllers above KVKK Authority thresholds are required to register before processing. |
| `x-pdp-tr:transfer_mechanism` | enum | OPTIONAL | The mechanism for cross-border transfer under the amended KVKK Article 9 (Law No. 7499, 2024). Permitted values: `adequacy_decision`, `standard_contractual_clauses`, `binding_corporate_rules`, `appropriate_safeguards`, `derogation`. |
| `x-pdp-tr:transfer_impact_assessment_flag` | boolean | OPTIONAL | Set to `true` where a transfer impact assessment or risk assessment has been completed as required under the amended Article 9 regime. |
| `x-pdp-tr:breach_notification_flag` | boolean | OPTIONAL | Set to `true` where a personal data breach has occurred. Note: the KVKK Authority expects notification as soon as possible, generally within 72 hours per Board Decision 2019/10, though this is guidance-derived rather than a statutory timeframe. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- **Critical update:** Law No. 7499 (March 2024) fundamentally reformed Article 9 cross-border transfer regime. Previous namespace reflected pre-2024 regime entirely.
- `cross_border_transfer_basis` replaced by `transfer_mechanism` with post-2024 enum including adequacy decisions, SCCs, BCRs, and appropriate safeguards.
- `transfer_impact_assessment_flag` added reflecting new Article 9 requirements.
- `processing_basis` description updated to reflect 2024 alignment with GDPR bases.
- `breach_notification_flag` description updated to clarify 72-hour timeline is Board Decision guidance, not statutory text.

---

### Citations

- Turkish KVKK Law No. 6698 as amended by Law No. 7499 (March 2024), Article 9
- KVKK Board Decision 2019/10 on breach notification

---

*This namespace is reserved for registration by a qualified Turkish data protection
law practitioner. Contact registry@pct.thedpg.com to register as the owner.*
