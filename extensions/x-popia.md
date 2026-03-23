# Namespace: `x-popia:`
## Protection of Personal Information Act (South Africa)

**Jurisdiction:** South Africa (ZA)
**Frameworks addressed:** Protection of Personal Information Act 4 of 2013 (POPIA),
enforced by the Information Regulator from 1 July 2021.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

South Africa's POPIA establishes eight conditions for lawful processing of personal
information, broadly analogous to GDPR principles. It applies to public and private
bodies processing personal information in South Africa and introduces the concept
of a responsible party (controller) and operator (processor). POPIA includes
specific provisions for special personal information, children's personal
information, and direct marketing. Note: POPIA conditions are principles governing
how processing must be conducted, not lawful bases in the GDPR sense.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-popia:lawful_processing_basis` | enum | CONDITIONAL | Required when the primary framework is POPIA. The applicable lawful processing ground under POPIA Sections 11-12. Permitted values: `data_subject_consent`, `contract_performance`, `legal_obligation`, `vital_interests`, `public_law_duty`, `legitimate_interests`. |
| `x-popia:conditions_applicable` | array of enum | OPTIONAL | The POPIA processing conditions engaged by this activity (Sections 8-25). Permitted values: `accountability`, `processing_limitation`, `purpose_specification`, `further_processing_limitation`, `information_quality`, `openness`, `security_safeguards`, `data_subject_participation`. Note: these are principles, not lawful bases. |
| `x-popia:special_personal_info_flag` | boolean | OPTIONAL | Set to `true` where data includes special personal information under POPIA Section 26, including religious or philosophical beliefs, race or ethnic origin, trade union membership, political persuasion, health or sex life, biometric information, or criminal behaviour. |
| `x-popia:children_flag` | boolean | OPTIONAL | Set to `true` where data relates to a child under the age of 18. Processing of children's personal information is generally prohibited without prior authorisation from the Information Regulator except in limited circumstances under POPIA Section 35. |
| `x-popia:prior_authorisation_flag` | boolean | OPTIONAL | Set to `true` where the processing is of a type requiring prior authorisation from the Information Regulator under POPIA Section 57, including processing of special personal information or children's information not covered by Section 35 exceptions. |
| `x-popia:breach_notification_flag` | boolean | OPTIONAL | Set to `true` where a security compromise has occurred and notification to the Information Regulator and affected data subjects is required under POPIA Section 22. |
| `x-popia:direct_marketing_basis` | enum | OPTIONAL | The basis for direct marketing under POPIA Section 69. Permitted values: `consent`, `existing_customer_exception`. |
| `x-popia:transborder_flow_basis` | enum | OPTIONAL | The basis for transborder information flows under POPIA Section 72. Permitted values: `adequate_protection`, `consent`, `contract_performance`, `public_interest`, `legal_proceedings`, `vital_interests`. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `processing_condition` replaced by `lawful_processing_basis` (lawful grounds under Sections 11-12) and `conditions_applicable` (principles under Sections 8-25) to reflect the correct POPIA structure.
- `prior_authorisation_flag` added reflecting Section 57 requirement.
- `breach_notification_flag` added reflecting Section 22 obligation.
- Children processing description updated to reflect Section 35 exceptions.

---

### Citations

- POPIA Act 4 of 2013, Sections 8-25, 11-12, 22, 26, 35, 57, 69, 72

---

*This namespace is reserved for registration by a qualified South African data
protection law practitioner. Contact registry@pct.thedpg.com to register as
the owner.*
