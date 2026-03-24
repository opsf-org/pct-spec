# Namespace: `x-lfpdppp-mx:`
## Federal Law on Protection of Personal Data Held by Private Parties (Mexico)

**Jurisdiction:** United Mexican States (MX)
**Frameworks addressed:** Ley Federal de Protección de Datos Personales en Posesión
de los Particulares as re-enacted by decree published in the DOF on 20 March 2025,
effective 21 March 2025. Private-sector oversight transferred to the Secretaría
Anticorrupción y Buen Gobierno following the constitutional simplification reform
that extinguished INAI.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

Mexico's LFPDPPP governs the protection of personal data held by private parties.
A new LFPDPPP was enacted by decree published on 20 March 2025, replacing the
2010 law. Private-sector data protection oversight was transferred from INAI
(now extinguished) to the Secretaría Anticorrupción y Buen Gobierno. The law
retains the consent and privacy notice model. The processing framework is built
around consent, notice, and enumerated statutory exceptions rather than a
GDPR-style closed lawful basis list.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-lfpdppp-mx:consent_obtained_flag` | boolean | CONDITIONAL | Required for processing under LFPDPPP. `true` indicates consent has been obtained as the primary basis for processing. |
| `x-lfpdppp-mx:processing_exception` | enum | OPTIONAL | Where processing occurs without consent, the applicable statutory exception. Permitted values: `legal_obligation`, `contractual_relationship`, `medical_emergency`, `public_interest`, `judicial_requirement`, `corporate_transaction`. |
| `x-lfpdppp-mx:privacy_notice_type` | enum | CONDITIONAL | Required for all processing. The type of privacy notice (aviso de privacidad) provided. Permitted values: `full`, `simplified`, `not_applicable`. |
| `x-lfpdppp-mx:privacy_notice_provided_flag` | boolean | CONDITIONAL | `true` indicates a privacy notice has been provided in accordance with the current LFPDPPP before or at the time of data collection. |
| `x-lfpdppp-mx:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data (datos personales sensibles) requiring explicit written consent. |
| `x-lfpdppp-mx:arco_request_flag` | boolean | OPTIONAL | Set to `true` where an ARCO rights request (Access, Rectification, Cancellation, Opposition) is pending. |
| `x-lfpdppp-mx:authority_variant` | enum | OPTIONAL | The competent federal authority. Permitted values: `secretaria_anticorrupcion_y_buen_gobierno`. Note: INAI was extinguished by the 2025 constitutional reform. |
| `x-lfpdppp-mx:cross_border_transfer_basis` | enum | OPTIONAL | The basis for cross-border transfer under the current LFPDPPP. Permitted values: `consent`, `contract_performance`, `legal_obligation`, `vital_interests`, `corporate_transaction`, `authority_approved`. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- **Critical update:** New LFPDPPP enacted by decree 20 March 2025. INAI extinguished. Oversight transferred to Secretaría Anticorrupción y Buen Gobierno.
- `processing_basis` replaced by `consent_obtained_flag` plus `processing_exception` reflecting consent-plus-exceptions model.
- `authority_variant` added reflecting current competent authority.
- `privacy_notice_type` added.
- Transfer basis enum updated: `inai_approved` and `recognised_international_framework` removed.

---

### Citations

- Decreto DOF 20 March 2025 (nueva LFPDPPP)
- Reforma Orgánica transferring functions to Secretaría Anticorrupción y Buen Gobierno

---

*This namespace is reserved for registration by a qualified Mexican data
protection law practitioner. Contact registry@pct.opsf.org to register as
the owner.*
