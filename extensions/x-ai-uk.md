# Namespace: `x-ai-uk:`
## UK AI Governance Framework

**Jurisdiction:** United Kingdom (GB)
**Frameworks addressed:** UK AI Regulation White Paper (March 2023); UK Government
Implementing the AI Regulatory Principles guidance (February 2024); AI Opportunities
Action Plan government response (January 2025); ICO AI and data protection guidance
(under review post-Data (Use and Access) Act 2025); UK AI Security Institute (AISI).
No horizontal UK AI statute is in force as of March 2026.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

The UK has adopted a principles-based, sector-led approach to AI regulation. No
horizontal UK AI statute is in force as of March 2026. Existing sectoral regulators
apply their existing powers guided by five cross-sector principles. The Digital
Regulation Cooperation Forum (DRCF) has four members: ICO, CMA, Ofcom, and FCA.
The UK AI Security Institute evaluates frontier AI models. ICO AI guidance is under
review following the Data (Use and Access) Act coming into law on 19 June 2025.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-ai-uk:uk_ai_framework_version` | enum | OPTIONAL | The UK AI policy layer relied on. Permitted values: `white_paper_2023`, `regulator_guidance_2024`, `action_plan_response_2025`. |
| `x-ai-uk:regulator_principles_applied` | array of enum | OPTIONAL | The cross-sector AI principles assessed. Permitted values: `safety_security_robustness`, `transparency_explainability`, `fairness`, `accountability_governance`, `contestability_redress`. |
| `x-ai-uk:drcf_sector` | enum | OPTIONAL | The DRCF member regulator with primary oversight of this AI deployment. Permitted values: `ico`, `cma`, `ofcom`, `fca`. Note: DRCF has four members only — ICO, CMA, Ofcom, and FCA. MHRA is not a DRCF member. |
| `x-ai-uk:aisi_evaluated_flag` | boolean | OPTIONAL | Set to `true` where the AI model has been evaluated by the UK AI Security Institute (AISI). AISI evaluations are currently focused on frontier models. |
| `x-ai-uk:ico_ai_guidance_version_ref` | string (URI) | OPTIONAL | Reference to the specific ICO AI guidance or AI and data protection risk toolkit version assessed. Note: ICO AI guidance is under review following the Data (Use and Access) Act 2025. |
| `x-ai-uk:ico_ai_guidance_applied_flag` | boolean | OPTIONAL | Set to `true` where the AI system's data processing has been assessed against current ICO AI and data protection guidance. |
| `x-ai-uk:automated_decision_safeguards_flag` | boolean | OPTIONAL | Set to `true` where the AI system makes decisions based solely on automated processing that produce legal or similarly significant effects on individuals, and safeguards required under UK GDPR Article 22 are in place. Note: Article 22 applies to solely automated decisions with legal or similarly significant effects — not every AI system that influences a decision. |
| `x-ai-uk:fairness_assessment_ref` | string (URI) | OPTIONAL | Reference to a documented fairness assessment addressing discriminatory outputs or bias. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `drcf_sector` enum corrected: MHRA removed. DRCF has four members — ICO, CMA, Ofcom, FCA only.
- AI Security Institute branding updated throughout (AISI).
- `ico_ai_guidance_version_ref` added to support versioning given guidance under review post-DUA Act 2025.
- `automated_decision_safeguards_flag` description narrowed: Article 22 applies to solely automated decisions with legal/similarly significant effects, not every AI influence.
- `uk_ai_framework_version` and `regulator_principles_applied` added.
- Note added that no horizontal UK AI statute is in force as of March 2026.

---

### Citations

- UK Government AI Regulation White Paper, March 2023
- UK Government Implementing AI Regulatory Principles guidance, February 2024
- AI Opportunities Action Plan government response, January 2025
- ICO AI and data protection guidance and risk toolkit
- DRCF official membership pages
- UK AI Security Institute official site and 2025 publications

---

*This namespace is registered and maintained by DPG Labs / The Data Privacy Group.
Contact registry@pct.thedpg.com for queries.*
