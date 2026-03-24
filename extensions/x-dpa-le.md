# Namespace: `x-dpa-le:`
## UK Data Protection Act 2018 — Law Enforcement Processing

**Jurisdiction:** United Kingdom (GB)
**Frameworks addressed:** Data Protection Act 2018 Part 3 (Law Enforcement
Processing), enforced by the Information Commissioner's Office (ICO).
**Registration tier:** Open
**Review status:** initial_draft
**Review date:** 2026-03-21

---

### Overview

The Data Protection Act 2018 Part 3 establishes a separate and distinct regime
for the processing of personal data by competent authorities for law enforcement
purposes, implementing the EU Law Enforcement Directive (LED, 2016/680) in UK law.
This regime operates entirely separately from UK GDPR and applies to processing
by courts, police forces, prosecuting authorities, and other competent authorities
for the purposes of prevention, investigation, detection or prosecution of criminal
offences, execution of criminal penalties, or the safeguarding and prevention of
threats to public security.

Part 3 has distinct lawful processing conditions, purpose limitation requirements,
data subject rights (which are more restricted than under UK GDPR), data protection
by design obligations, and mandatory Data Protection Impact Assessments for high-risk
processing.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-dpa-le:competent_authority_flag` | boolean | REQUIRED | Set to `true` where the controller is a competent authority processing personal data for a law enforcement purpose as defined in DPA 2018 Section 29-30. This confirms that Part 3 rather than UK GDPR applies. |
| `x-dpa-le:law_enforcement_purpose` | enum | REQUIRED | The law enforcement purpose for which the data is processed. Permitted values: `prevention_of_criminal_offences`, `investigation_of_criminal_offences`, `detection_of_criminal_offences`, `prosecution_of_criminal_offences`, `execution_of_criminal_penalties`, `safeguarding_against_public_security_threats`. |
| `x-dpa-le:processing_condition` | enum | CONDITIONAL | The lawful processing condition under DPA 2018 Schedule 7 or 8. Permitted values: `processing_necessary_for_law_enforcement_purpose`, `sensitive_processing_condition_schedule_8`. |
| `x-dpa-le:sensitive_processing_flag` | boolean | OPTIONAL | Set to `true` where processing constitutes sensitive processing under DPA 2018 Section 35(8), including special category data or data relating to criminal convictions. Processing requires an additional Schedule 8 condition. |
| `x-dpa-le:data_category` | enum | OPTIONAL | The category of data subject. Permitted values: `suspect`, `convict`, `victim`, `witness`, `contact_or_associate`, `unknown_category`. DPA 2018 Section 44 requires competent authorities to distinguish categories of data subject as far as possible. |
| `x-dpa-le:accuracy_verification_flag` | boolean | OPTIONAL | Set to `true` where the data has been verified for accuracy including distinguishing facts from personal assessments, in accordance with DPA 2018 Section 40. |
| `x-dpa-le:dpia_required_flag` | boolean | OPTIONAL | Set to `true` where a Data Protection Impact Assessment is required under DPA 2018 Section 64 for high-risk law enforcement processing. |
| `x-dpa-le:international_transfer_basis` | enum | OPTIONAL | The basis for international transfer under DPA 2018 Chapter 5 of Part 3. Permitted values: `adequacy_regulations`, `appropriate_safeguards`, `special_circumstances_derogation`. |

---

### When to use this namespace

This namespace applies only when ALL of the following are true:
1. The controller is a competent authority as defined in DPA 2018 Section 29
2. The processing is for a law enforcement purpose as defined in DPA 2018 Section 31
3. UK GDPR does not apply to this processing activity

Do not use this namespace for general law enforcement-related processing by non-competent authorities, which remains subject to UK GDPR.

---

### Citations

- Data Protection Act 2018, Part 3 (Sections 29-81)
- DPA 2018 Schedule 7 (Conditions for sensitive processing under Part 3)
- DPA 2018 Schedule 8 (Conditions for sensitive processing under Part 3)
- ICO Law Enforcement Processing guidance

---

*This namespace is maintained by OPSF (Open Privacy Standards Foundation) as part of
the PCT specification project. Contact pct@opsf.org for queries.*
