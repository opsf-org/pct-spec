# Namespace: `x-ai-int:`
## International AI Governance Frameworks

**Jurisdiction:** Multi-jurisdictional / international
**Frameworks addressed:** UNESCO Recommendation on the Ethics of AI (adopted
23 November 2021); OECD AI Principles as revised by OECD Council decision
8 November 2023; G7 Hiroshima AI Process Code of Conduct for Advanced AI Systems
(2023); Council of Europe Framework Convention on AI (CETS No. 225, opened for
signature 5 September 2024); ISO/IEC 42001:2023 Artificial Intelligence Management
System Standard.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

International AI governance frameworks operate at different levels of legal
enforceability. ISO/IEC 42001 is an auditable management system standard against
which organisations can certify. The Council of Europe Framework Convention is
a binding treaty for ratifying states. UNESCO and OECD instruments are non-binding
standard-setting. Corporate alignment with these frameworks is voluntary unless
mandated by applicable domestic law or procurement requirements.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-ai-int:alignment_frameworks` | array of enum | OPTIONAL | The international AI governance frameworks applied. Permitted values: `unesco_2021`, `oecd_2023_revised`, `g7_hiroshima_2023`, `coe_cets_225`, `iso_42001_2023`. |
| `x-ai-int:iso_42001_certified_flag` | boolean | OPTIONAL | Set to `true` where the organisation holds ISO/IEC 42001:2023 certification from an accredited certification body (not ISO itself) for its AI management system. |
| `x-ai-int:iso_42001_cert_ref` | string (URI) | CONDITIONAL | Required when `iso_42001_certified_flag` is `true`. Reference to the certificate or certification body record. |
| `x-ai-int:oecd_version` | enum | OPTIONAL | The OECD AI Principles version applied. Permitted values: `2019_original`, `2023_revised`. Note: OECD AI Principles were revised by Council decision on 8 November 2023. |
| `x-ai-int:oecd_ai_principles_applied_flag` | boolean | OPTIONAL | Set to `true` where the AI system has been assessed against the OECD AI Principles (2023 revised version). |
| `x-ai-int:coe_status` | enum | OPTIONAL | The state's relationship to the Council of Europe Framework Convention on AI (CETS No. 225). Permitted values: `not_applicable`, `signatory_state`, `party_state`. Note: the Convention was opened for signature 5 September 2024. Signatory and ratifying party status are distinct. |
| `x-ai-int:coe_framework_convention_applies_flag` | boolean | OPTIONAL | Set to `true` where the organisation is in a state that has ratified the Council of Europe Framework Convention (party state). |
| `x-ai-int:g7_code_of_conduct_applied_flag` | boolean | OPTIONAL | Set to `true` where the organisation has voluntarily committed to the G7 Hiroshima AI Process Code of Conduct for Advanced AI Systems. |
| `x-ai-int:unesco_assessment_ref` | string (URI) | OPTIONAL | Reference to an ethics impact assessment conducted in alignment with UNESCO's Recommendation on the Ethics of AI. Note: the Recommendation is a non-binding state-level instrument; corporate assessments against it are voluntary alignment exercises. |
| `x-ai-int:ai_incident_reported_flag` | boolean | OPTIONAL | Governance metadata (not a universal compliance obligation) set to `true` where an AI incident has been reported to an incident database or relevant authority. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `coe_status` added to distinguish signatory from ratifying party status.
- `alignment_frameworks` array added for clean multi-framework tagging.
- `oecd_version` added: OECD AI Principles revised 8 November 2023.
- `iso_42001_certified_flag` description clarified: certification by accredited body, not ISO itself.
- `ai_incident_reported_flag` reframed as governance metadata, not a universal compliance obligation.
- `unesco_assessment_ref` description updated to clarify non-binding nature of UNESCO instrument.

---

### Citations

- UNESCO Recommendation on the Ethics of AI, adopted 23 November 2021
- OECD AI Principles and Council decision revision, 8 November 2023
- G7 Hiroshima AI Process Code of Conduct (2023)
- Council of Europe CETS No. 225, opened for signature 5 September 2024
- ISO/IEC 42001:2023

---

*This namespace is registered and maintained by OPSF (Open Privacy Standards Foundation).
Contact pct@opsf.org for queries.*
