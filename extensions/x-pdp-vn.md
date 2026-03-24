# Namespace: `x-pdp-vn:`
## Personal Data Protection Decree (Vietnam)

**Jurisdiction:** Socialist Republic of Vietnam (VN)
**Frameworks addressed:** Decree No. 13/2023/ND-CP on Personal Data Protection
(effective 1 July 2023), enforced by the Ministry of Public Security (MPS) through
the Department of Cybersecurity and Hi-tech Crime Prevention (A05). Read with the
Law on Cybersecurity 2018.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

Vietnam's PDPD is consent-centric and then sets out specific cases where processing
may occur without consent under Article 17. The decree is not a GDPR-style
six-basis framework. Cross-border transfer obligations are governed by Article 25
(impact assessment dossier and notification to MPS) rather than a blanket
localisation requirement. Note: broader data localisation requirements arise from
the Cybersecurity Law rather than from the PDPD itself.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-pdp-vn:consent_obtained_flag` | boolean | CONDITIONAL | Required for standard processing. `true` indicates consent has been obtained as required under Decree 13. |
| `x-pdp-vn:processing_exception` | enum | OPTIONAL | Where processing occurs without consent, the applicable Article 17 exception. Permitted values: `emergency_life_health`, `publicly_disclosed_under_law`, `contractual_obligation_of_data_subject`, `state_agency_emergency_or_security`, `other_article_17_exception`. |
| `x-pdp-vn:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data under PDPD Article 9, including political opinions, religious beliefs, health status, genetic data, biometric data, financial data, sexual orientation, criminal records, location data linked to other personal data, or social relationship data. |
| `x-pdp-vn:processing_impact_assessment_ref` | string (URI) | OPTIONAL | Reference to the Article 24 dossier for impact assessment of personal data processing activities. |
| `x-pdp-vn:cross_border_transfer_impact_assessment_ref` | string (URI) | CONDITIONAL | Required where personal data of Vietnamese citizens is transferred outside Vietnam. Reference to the Article 25 dossier for cross-border transfer impact assessment required before transfer and available for MPS inspection. |
| `x-pdp-vn:sensitive_data_processing_notification_flag` | boolean | OPTIONAL | Set to `true` where the sensitive data processing notification and dossier requirement under the PDPD has been completed. |
| `x-pdp-vn:mps_notification_status` | enum | OPTIONAL | The status of MPS notifications or filings related to this processing activity. Permitted values: `not_required`, `dossier_prepared`, `notified`, `pending`. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `processing_basis` replaced by `consent_obtained_flag` plus `processing_exception` — Decree 13 is consent-plus-exceptions, not a GDPR six-basis model.
- `data_localisation_flag` removed: Decree 13 does not create a general localisation obligation; broader localisation comes from Cybersecurity Law.
- `mps_registration_ref` replaced by `mps_notification_status` — Decree 13 requires dossiers and notifications, not a general MPS registration.
- `impact_assessment_ref` corrected: Article 24 = processing impact assessment; Article 25 = cross-border transfer impact assessment.
- `cross_border_transfer_flag` replaced by `cross_border_transfer_impact_assessment_ref`.
- `sensitive_data_processing_notification_flag` added.

---

### Citations

- Decree No. 13/2023/ND-CP on Personal Data Protection, Articles 17, 24, 25

---

*This namespace is reserved for registration by a qualified Vietnamese data
protection law practitioner. Contact registry@pct.opsf.org to register as
the owner.*
