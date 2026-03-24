# Namespace: `x-cmmc:`
## Cybersecurity Maturity Model Certification (US DoD)

**Jurisdiction:** United States — Department of Defense contractors
**Frameworks addressed:** CMMC programme codified at 32 CFR Part 170, applicable
to DoD contractors handling Federal Contract Information (FCI) or Controlled
Unclassified Information (CUI).
**Registration tier:** Open
**Review status:** initial_draft
**Review date:** 2026-03-21

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-cmmc:level` | enum | OPTIONAL | The CMMC level applicable or achieved. Permitted values: `level_1`, `level_2`, `level_3`. Level 1 covers FCI; Levels 2-3 cover CUI with increasing assessment requirements. |
| `x-cmmc:data_type` | enum | OPTIONAL | The type of controlled information. Permitted values: `fci`, `cui`. |
| `x-cmmc:assessment_status` | enum | OPTIONAL | CMMC assessment status. Permitted values: `self_assessment`, `c3pao_assessed`, `dib_assessed`, `not_assessed`. |
| `x-cmmc:assessment_ref` | string (URI) | OPTIONAL | Reference to the CMMC assessment or certification documentation. |

*This namespace is registered and maintained by OPSF (Open Privacy Standards Foundation).*
