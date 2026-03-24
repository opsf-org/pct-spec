# Namespace: `x-pdpb-in:`
## Digital Personal Data Protection Act (India)

**Jurisdiction:** India (IN)
**Frameworks addressed:** Digital Personal Data Protection Act 2023 (DPDP Act),
enforced by the Data Protection Board of India. Draft DPDP Rules published by
MeitY for consultation in 2025. Rules were under consultation as of March 2026
and had not yet been finalised; implementers should confirm current status.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

India's DPDP Act 2023 establishes a consent-first framework with defined
legitimate uses. Processing may occur on the basis of consent or certain legitimate
uses specified in Section 7 (including employment, state functions, medical
emergencies, epidemics, safety, court orders, and public interest). The Act
applies to processing of digital personal data within India and to processing
outside India where goods or services are offered to individuals in India.

Note: the Draft DPDP Rules were published for consultation in 2025 and were not
finalised as of March 2026. Field definitions will require updating once rules are
finalised.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-pdpb-in:processing_basis` | enum | CONDITIONAL | Required when the primary framework is India DPDP Act. Permitted values aligned with Section 7: `consent`, `legitimate_use_employment`, `legitimate_use_state_function`, `legitimate_use_medical_emergency`, `legitimate_use_epidemic`, `legitimate_use_safety`, `legitimate_use_court_order`, `legitimate_use_public_interest`. |
| `x-pdpb-in:notice_provided_flag` | boolean | CONDITIONAL | Required for consent-based processing. `true` indicates a notice has been provided to the data principal before or at the time of seeking consent, in accordance with DPDP Act Section 5, describing the personal data to be processed and the purpose. |
| `x-pdpb-in:child_data_flag` | boolean | OPTIONAL | Set to `true` where data relates to a child under the age of 18. Verifiable parental consent required before processing. |
| `x-pdpb-in:verifiable_parental_consent_flag` | boolean | CONDITIONAL | Required when `x-pdpb-in:child_data_flag` is `true`. `true` indicates verifiable parental consent has been obtained in accordance with DPDP Act requirements. |
| `x-pdpb-in:significant_data_fiduciary_flag` | boolean | OPTIONAL | Set to `true` where the data fiduciary has been designated as a Significant Data Fiduciary by the Central Government under DPDP Act Section 10. Additional obligations apply including appointment of a Data Protection Officer, an independent data auditor, periodic DPIA, and risk mitigation measures. |
| `x-pdpb-in:breach_notification_flag` | boolean | OPTIONAL | Set to `true` where a personal data breach has occurred and notification to the Data Protection Board and affected data principals is required under DPDP Act Section 8(6). |
| `x-pdpb-in:transfer_restriction_flag` | boolean | OPTIONAL | Set to `true` where the data is subject to a cross-border transfer restriction under DPDP Act Section 16, which empowers the Central Government to restrict transfers to specified countries or territories by notification. Implementers should confirm current notification status. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `processing_basis` enum restructured to align with Section 7 terminology (consent and legitimate uses) rather than GDPR-style taxonomy.
- `notice_provided_flag` added reflecting Section 5 notice obligation.
- `breach_notification_flag` added reflecting Section 8(6) notification obligation.
- `transfer_restriction_flag` added reflecting Section 16 government notification power.
- `significant_data_fiduciary_flag` description updated to include DPIA and audit obligations under Section 10.
- `data_localisation_flag` removed: DPDP Act does not mandate localisation but empowers restrictions via Section 16 notification.
- Framework description updated to reflect draft rules status.

---

### Citations

- Digital Personal Data Protection Act 2023, Sections 5, 7, 8, 10, 16
- Draft DPDP Rules (MeitY, 2025 consultation)

---

*This namespace is reserved for registration by a qualified Indian data protection
law practitioner. Contact registry@pct.opsf.org to register as the owner.*
