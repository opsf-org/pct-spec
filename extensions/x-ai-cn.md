# Namespace: `x-ai-cn:`
## China AI Governance Regulations

**Jurisdiction:** People's Republic of China (CN)
**Frameworks addressed:** Provisions on the Administration of Algorithmic
Recommendations (effective 1 March 2022); Provisions on the Administration of
Deep Synthesis Internet Information Services (effective 10 January 2023); Interim
Measures for the Management of Generative AI Services (effective 15 August 2023);
Measures for Labeling AI-Generated and Synthetic Content (issued March 2025,
effective 1 September 2025). Enforced by the Cyberspace Administration of China
(CAC) jointly with MIIT and MPS.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

China regulates AI through separate instruments for algorithmic recommendations,
deep synthesis, and generative AI services rather than a single overarching AI
act. The 2025 Measures for Labeling AI-Generated and Synthetic Content
(effective 1 September 2025) introduced a dedicated labelling regime. Algorithm
filing requirements apply to certain recommendation services under the 2022
Provisions.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-ai-cn:generative_ai_service_flag` | boolean | OPTIONAL | Set to `true` where the AI system provides a generative AI service to the public within China under the 2023 Measures. Note: certain research and internal uses are outside scope under Article 2. |
| `x-ai-cn:deep_synthesis_flag` | boolean | OPTIONAL | Set to `true` where the AI system uses deep synthesis technology to generate, edit, or synthesise content involving real individuals. Providers must obtain user consent, label generated content, and maintain content logs. |
| `x-ai-cn:algorithm_recommendation_flag` | boolean | OPTIONAL | Set to `true` where the AI system uses algorithmic recommendation technology. Obligations include disclosure of recommendation logic, user choice rights, algorithm registration and filing for specified services, and labelling of algorithmically recommended content. |
| `x-ai-cn:algorithm_filing_flag` | boolean | OPTIONAL | Set to `true` where algorithm filing or filing updates with the CAC are required or have been completed under the 2022 Algorithmic Recommendations Provisions. |
| `x-ai-cn:security_assessment_type` | enum | OPTIONAL | The type of security assessment applicable or completed. Permitted values: `generative_ai_service`, `algorithm_recommendation`, `cross_border_data_transfer`, `none`. Note: AI-service assessment and data export assessment are separate obligations under different instruments. |
| `x-ai-cn:ai_content_label_measures_apply_flag` | boolean | OPTIONAL | Set to `true` where the 2025 Measures for Labeling AI-Generated and Synthetic Content (effective 1 September 2025) apply to content produced by this system. |
| `x-ai-cn:content_labelling_flag` | boolean | OPTIONAL | Set to `true` where AI-generated or AI-assisted content produced by this system is labelled in accordance with applicable labelling requirements under the Deep Synthesis Provisions, Generative AI Measures, and the 2025 Labelling Measures. |
| `x-ai-cn:training_data_compliance_flag` | boolean | OPTIONAL | Set to `true` where training data has been assessed for compliance with applicable Chinese law including consent, intellectual property, and content regulation requirements. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `ai_content_label_measures_apply_flag` added referencing the 2025 Labelling Measures (effective 1 September 2025).
- `algorithm_filing_flag` added reflecting filing requirements under the 2022 Provisions.
- `cac_security_assessment_completed_flag` replaced by `security_assessment_type` to distinguish AI-service assessment from cross-border data transfer assessment.
- `content_labelling_flag` description updated to reference all three relevant instruments including the 2025 Measures.
- Algorithm recommendation description updated to include filing requirements and user choice rights.

---

### Citations

- CAC Algorithmic Recommendation Provisions, effective 1 March 2022
- CAC Deep Synthesis Provisions, effective 10 January 2023
- CAC Interim Measures for Generative AI Services, effective 15 August 2023
- CAC Measures for Labeling AI-Generated and Synthetic Content, March 2025, effective 1 September 2025

---

*This namespace is registered and maintained by OPSF (Open Privacy Standards Foundation).
Contact pct@opsf.org for queries.*
