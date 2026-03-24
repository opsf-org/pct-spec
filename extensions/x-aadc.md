# Namespace: `x-aadc:`
## UK Age Appropriate Design Code

**Jurisdiction:** United Kingdom (GB)
**Frameworks addressed:** Age Appropriate Design Code (Children's Code) issued by
the ICO under Data Protection Act 2018 Section 123, in force from 2 September
2021. Read with UK GDPR and Online Safety Act 2023. ICO guidance under review
following Data (Use and Access) Act 2025.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

The UK Age Appropriate Design Code applies to information society services likely
to be accessed by children under 18 in the UK. It establishes fifteen standards.
The Code is a statutory code of practice — compliance is admissible in evidence
in proceedings but is not a blanket safe harbour for UK GDPR compliance. Where
an organisation cannot establish that a user is not a child, it may need to apply
the Code to all users. ICO guidance is under review following the Data (Use and
Access) Act coming into law on 19 June 2025.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-aadc:service_likely_accessed_by_children_flag` | boolean | CONDITIONAL | Required when assessing Code applicability at service level. `true` indicates the service is likely to be accessed by children under 18 and the Code therefore applies at service level. |
| `x-aadc:child_user_flag` | boolean | OPTIONAL | Set to `true` where the individual user is known or estimated to be under 18. |
| `x-aadc:age_assurance_level` | enum | OPTIONAL | The level of age assurance applied. Permitted values: `none`, `self_declaration`, `technical_estimation`, `verification`, `hard_identifier`, `apply_code_to_all_users`. |
| `x-aadc:high_privacy_default_flag` | boolean | OPTIONAL | Set to `true` where privacy settings are set to high privacy by default for child users under Code Standard 7. |
| `x-aadc:geolocation_collection_flag` | boolean | OPTIONAL | Set to `true` where precise geolocation data is collected from a child user. Code Standard 10 requires geolocation services to be off by default for child users. |
| `x-aadc:profiling_default_off_flag` | boolean | OPTIONAL | Set to `true` where profiling is switched off by default for child users under Code Standard 12. Note: profiling is Standard 12, not Standard 9. Standard 9 is data sharing. |
| `x-aadc:nudge_technique_flag` | boolean | OPTIONAL | Set to `true` where the service uses nudge techniques that could encourage children to provide unnecessary personal data or weaken privacy protections. Code Standard 13 prohibits detrimental use of nudge techniques against children. |
| `x-aadc:children_risk_assessment_ref` | string (URI) | OPTIONAL | Reference to the child-focused risk assessment or DPIA for this service. |
| `x-aadc:dpia_completed_flag` | boolean | OPTIONAL | Set to `true` where a Data Protection Impact Assessment has been completed for this processing involving children's data under Code Standard 15. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `profiling_flag` renamed to `profiling_default_off_flag` with corrected Standard number: profiling is Standard 12, not Standard 9.
- `service_likely_accessed_by_children_flag` added reflecting service-level Code trigger.
- `age_assurance_level` enum updated to reflect current ICO guidance range.
- `children_risk_assessment_ref` added.
- Overview updated: Code is admissible in evidence but not a blanket UK GDPR safe harbour.
- Note added on ICO guidance review following DUA Act 2025.

---

### Citations

- Data Protection Act 2018, Section 123
- ICO Children's Code standards guidance
- Online Safety Act 2023

---

*This namespace is registered and maintained by OPSF (Open Privacy Standards Foundation).*
