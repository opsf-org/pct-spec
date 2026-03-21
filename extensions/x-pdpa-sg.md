# Namespace: `x-pdpa-sg:`
## Personal Data Protection Act (Singapore)

**Jurisdiction:** Singapore (SG)
**Frameworks addressed:** Personal Data Protection Act 2012 (PDPA) as amended by
the Personal Data Protection (Amendment) Act 2020; Personal Data Protection
Regulations 2021; enforced by the Personal Data Protection Commission (PDPC).
Note: Part VIA on data portability was inserted by the 2020 Amendment Act but
has not been brought into force as of March 2026.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

Singapore's PDPA governs the collection, use, and disclosure of personal data.
The 2020 amendments introduced mandatory data breach notification, expanded
statutory exceptions to the consent obligation, and inserted a data portability
framework. The PDPA distinguishes between express consent, deemed consent
mechanisms, and separate statutory exceptions (legitimate interests, business
improvement, research). Organisations must designate at least one Data Protection
Officer and make their business contact information publicly available.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-pdpa-sg:consent_ground` | enum | CONDITIONAL | Required when the primary framework is Singapore PDPA. Permitted values: `express_consent`, `deemed_consent_conduct`, `deemed_consent_contractual_necessity`, `deemed_consent_notification`, `legitimate_interests_exception`, `business_improvement_exception`, `research_exception`, `legal_exception`, `emergency_exception`. Note: legitimate interests is a standalone statutory exception under First Schedule Part 3, not a form of deemed consent. |
| `x-pdpa-sg:legitimate_interests_assessment_ref` | string (URI) | CONDITIONAL | Required when `consent_ground` is `legitimate_interests_exception`. Reference to the documented assessment required by PDPC guidance confirming legitimate interests identified, adverse effects assessed, and appropriate measures taken (First Schedule Part 3). |
| `x-pdpa-sg:deemed_consent_notification_assessment_ref` | string (URI) | CONDITIONAL | Required when `consent_ground` is `deemed_consent_notification`. Reference to the documented assessment required before relying on deemed consent by notification under the Second Schedule. |
| `x-pdpa-sg:dpo_contact_ref` | string (URI) | OPTIONAL | Reference to the organisation's designated Data Protection Officer business contact record. Organisations must designate at least one DPO and make their contact information publicly available under the PDPA accountability obligation. |
| `x-pdpa-sg:do_not_call_flag` | boolean | OPTIONAL | Set to `true` where the data includes telephone numbers registered on the Do Not Call Registry. Processing for telemarketing must be blocked where `true`. |
| `x-pdpa-sg:mandatory_breach_notification_flag` | boolean | OPTIONAL | Set to `true` where a notifiable data breach has occurred and PDPC notification under PDPA Section 26D is required within 3 days of assessing that the breach is notifiable. |
| `x-pdpa-sg:overseas_transfer_mechanism` | enum | OPTIONAL | The mechanism for transferring personal data outside Singapore under PDPA Section 26 and the Personal Data Protection Regulations 2021. Permitted values: `legally_enforceable_obligations`, `specified_exception`, `consent_with_warning`, `intra_group_policy`, `other_prescribed_mechanism`. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `consent_basis` replaced by `consent_ground` with corrected enum reflecting statutory distinction between consent mechanisms and statutory exceptions.
- `data_portability_request_flag` removed: Part VIA not yet in force.
- `overseas_transfer_basis` replaced by `overseas_transfer_mechanism` aligned to Section 26 and 2021 Regulations.
- `dpo_contact_ref` added reflecting PDPA accountability obligation.
- `deemed_consent_notification_assessment_ref` added reflecting PDPC guidance.
- `legitimate_interests_assessment_ref` description corrected to First Schedule Part 3.

---

### Citations

- Personal Data Protection Act 2012 (Singapore) as amended
- Personal Data Protection (Amendment) Act 2020, commencement information
- Personal Data Protection Regulations 2021
- PDPC Advisory Guidelines on Key Concepts in the PDPA
- PDPC Assessment Checklist for Legitimate Interests Exception

---

*This namespace is reserved for registration by a qualified Singapore data
protection law practitioner. Contact registry@pct.thedpg.com to register as
the owner.*
