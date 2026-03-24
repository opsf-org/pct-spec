# Namespace: `x-ai-sg:`
## Singapore AI Governance Framework

**Jurisdiction:** Singapore (SG)
**Frameworks addressed:** Model AI Governance Framework (2nd Edition, 2020);
Model AI Governance Framework for Generative AI (2024); Model AI Governance
Framework for Agentic AI (January 2026); AI Verify testing framework (2022/2023);
PDPC Advisory Guidelines on Use of Personal Data in AI Recommendation and Decision
Systems (March 2024); MAS/ABS financial sector AI guidance. All frameworks are
voluntary unless adopted by sector regulators.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

Singapore's AI governance approach is voluntary and guidance-led. The frameworks
are not binding horizontal legislation. Singapore launched the Model AI Governance
Framework for Agentic AI in January 2026, supplementing the 2020 framework and
the 2024 Generative AI framework. The PDPC issued updated Advisory Guidelines on
AI and personal data in March 2024. MAS financial sector AI guidance has been
updated through 2024 model risk management and GenAI guardrail work.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-ai-sg:model_framework_version` | enum | OPTIONAL | The Singapore Model AI Governance Framework version applied. Permitted values: `model_ai_framework_2020`, `gen_ai_framework_2024`, `agentic_ai_framework_2026`. |
| `x-ai-sg:model_ai_framework_applied_flag` | boolean | OPTIONAL | Set to `true` where the AI system has been assessed against the applicable Singapore Model AI Governance Framework. |
| `x-ai-sg:ai_verify_tested_flag` | boolean | OPTIONAL | Set to `true` where the AI system has been tested using the AI Verify testing toolkit against its eleven AI ethics principles and a test report generated. |
| `x-ai-sg:ai_verify_report_ref` | string (URI) | CONDITIONAL | Required when `ai_verify_tested_flag` is `true`. Reference to the AI Verify test report. |
| `x-ai-sg:pdpc_ai_guidance_version_ref` | string (URI) | OPTIONAL | Reference to the PDPC AI guidance version applied, including the Advisory Guidelines on Use of Personal Data in AI Recommendation and Decision Systems (March 2024). |
| `x-ai-sg:pdpc_advisory_applied_flag` | boolean | OPTIONAL | Set to `true` where the AI system has been assessed against current PDPC advisory guidelines on AI and personal data protection. |
| `x-ai-sg:feat_principles_applied_flag` | boolean | OPTIONAL | Set to `true` where the AI system is used in a financial services context and has been assessed against MAS FEAT principles and current MAS/ABS AI guidance. |
| `x-ai-sg:financial_sector_ai_guidance_ref` | string (URI) | OPTIONAL | Reference to the specific MAS/ABS AI guidance applied, including model risk management and GenAI guardrail materials. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `model_framework_version` added covering 2020, 2024 GenAI, and 2026 Agentic AI frameworks.
- `ai_verify_report_ref` retained and made conditional on `ai_verify_tested_flag`.
- `pdpc_advisory_applied_flag` description updated to reference March 2024 Advisory Guidelines specifically.
- `pdpc_ai_guidance_version_ref` added for version-specific reference.
- `financial_sector_ai_guidance_ref` added referencing updated MAS/ABS materials.
- All frameworks described as voluntary throughout.

---

### Citations

- PDPC Model AI Governance Framework (2nd Edition, 2020)
- IMDA/PDPC Model AI Governance Framework for Generative AI (2024)
- IMDA Singapore launches Model AI Governance Framework for Agentic AI, January 2026
- PDPC Advisory Guidelines on Use of Personal Data in AI Recommendation and Decision Systems, March 2024
- MAS information paper on AI model risk management (2024)

---

*This namespace is registered and maintained by OPSF (Open Privacy Standards Foundation).
Contact registry@pct.opsf.org for queries.*
