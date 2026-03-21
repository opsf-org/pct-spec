# Namespace: `x-ai-ca:`
## Canada AI Governance Framework

**Jurisdiction:** Canada (CA)
**Frameworks addressed:** Treasury Board Directive on Automated Decision-Making
(current); Canada.ca Algorithmic Impact Assessment tool; OPC guidance on AI and
privacy. Note: the Artificial Intelligence and Data Act (AIDA, Bill C-27) died
on prorogation of the 44th Parliament and is not in force. The 45th Parliament
is now in session; AIDA has not been re-introduced as of March 2026.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

Canada's operative AI governance framework for the federal public sector centres
on the Treasury Board Directive on Automated Decision-Making, which requires
Algorithmic Impact Assessments (AIAs) for federal automated decision systems and
assigns impact levels (I-IV) with corresponding requirements for transparency,
human review, and recourse. AIDA is not in force and its high-impact definitions
never became operative law.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-ai-ca:framework_variant` | enum | OPTIONAL | The applicable Canadian AI governance framework. Permitted values: `federal_adm_directive`, `voluntary_or_policy_guidance`. Note: `future_legislation` should not be used until AIDA or equivalent legislation is enacted. |
| `x-ai-ca:federal_adm_directive_applies_flag` | boolean | OPTIONAL | Set to `true` where the AI system is an automated decision system used by a federal government institution subject to the Treasury Board Directive on Automated Decision-Making. |
| `x-ai-ca:adm_impact_level` | enum | CONDITIONAL | Required when `federal_adm_directive_applies_flag` is `true`. Permitted values: `level_1`, `level_2`, `level_3`, `level_4`. Higher levels require more extensive human review, notice, and recourse mechanisms. |
| `x-ai-ca:public_sector_scope_flag` | boolean | OPTIONAL | Set to `true` where the AI system is used by or for a federal government institution within the scope of the Directive. |
| `x-ai-ca:algorithmic_impact_assessment_ref` | string (URI) | OPTIONAL | Reference to the completed Algorithmic Impact Assessment conducted using the Canada.ca AIA tool. |
| `x-ai-ca:opc_ai_guidance_applied_flag` | boolean | OPTIONAL | Set to `true` where the data processing aspects of this AI system have been assessed against OPC guidance on AI and privacy. Note: the binding federal instrument for government use is the Treasury Board Directive; OPC guidance is advisory. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- **Critical correction:** AIDA (Bill C-27) died on prorogation of the 44th Parliament. `aida_high_impact_flag` removed — not a valid compliance field.
- `framework_variant` added to distinguish operative from non-operative frameworks.
- `public_sector_scope_flag` added.
- AIDA references removed throughout.

---

### Citations

- Treasury Board Directive on Automated Decision-Making
- Canada.ca Algorithmic Impact Assessment tool
- LEGISinfo, Bill C-27, 44th Parliament (lapsed)

---

*This namespace is registered and maintained by DPG Labs / The Data Privacy Group.
Contact registry@pct.thedpg.com for queries.*
