# Namespace: `x-gdpr-national:`
## GDPR National Derogations and Member State Provisions

**Jurisdiction:** European Union member states (EU)
**Frameworks addressed:** GDPR national implementing legislation and derogations
exercised by EU member states under GDPR Articles 6(2), 9(2), 17(3), 22(2)(b),
23, 85-91, and related provisions. Key national instruments include: Ireland Data
Protection Act 2018; Germany Bundesdatenschutzgesetz (BDSG); France Loi
Informatique et Libertés (as amended); Netherlands UAVG; and equivalent national
legislation in all EU member states.
**Registration tier:** Open
**Review status:** initial_draft
**Review date:** 2026-03-21

---

### Overview

GDPR permits member states to exercise a substantial number of derogations and
to introduce more specific provisions in areas including employment, research,
journalism, freedom of expression, national security, and the processing of
special category data. These national provisions can materially affect whether
and how processing is lawful in a specific member state, even where the core
GDPR framework would otherwise permit it.

This namespace allows PCT tokens to identify the applicable member state national
provisions, derogations relied upon, and any member state-specific processing
conditions, enabling verifiers operating in specific national contexts to apply
the correct national rules rather than relying solely on the GDPR baseline.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-gdpr-national:member_state` | string (ISO 3166-1 alpha-2) | REQUIRED | The EU member state whose national implementing legislation applies to this processing activity. |
| `x-gdpr-national:national_instrument_ref` | string (URI) | OPTIONAL | Reference to the national data protection implementing legislation applicable in the identified member state. |
| `x-gdpr-national:national_derogation_relied_on` | array of enum | OPTIONAL | The GDPR derogation articles under which national law supplements or restricts the GDPR baseline for this processing. Permitted values: `art6_2_employment_public_task`, `art9_2_b_employment`, `art9_2_g_public_interest`, `art9_2_h_health`, `art9_2_i_public_health`, `art9_2_j_research_statistics`, `art17_3_exemptions`, `art22_2_b_national_law_automated`, `art23_restriction_of_rights`, `art85_journalism_expression`, `art86_public_documents`, `art87_national_id_numbers`, `art88_employment_context`, `art89_research_statistics_public_interest`, `art90_professional_secrecy`. |
| `x-gdpr-national:employment_context_flag` | boolean | OPTIONAL | Set to `true` where national employment-specific provisions under GDPR Article 88 apply, including provisions on monitoring, health and safety, diversity, and termination of employment. |
| `x-gdpr-national:special_category_national_basis` | enum | OPTIONAL | Where a national law provides the additional condition for processing special category data under GDPR Article 9(2)(g), (h), (i), or (j), the applicable national provision type. Permitted values: `substantial_public_interest_national_law`, `health_and_social_care_national_law`, `public_health_national_law`, `research_statistics_national_law`. |
| `x-gdpr-national:research_exemption_flag` | boolean | OPTIONAL | Set to `true` where national law provides an exemption or derogation for scientific or historical research, statistics, or archiving purposes under GDPR Article 89 and applicable national provisions. |
| `x-gdpr-national:journalism_exemption_flag` | boolean | OPTIONAL | Set to `true` where national law provides exemptions for journalistic, academic, artistic, or literary expression purposes under GDPR Article 85. |
| `x-gdpr-national:national_id_number_flag` | boolean | OPTIONAL | Set to `true` where national law governs the processing of national identification numbers under GDPR Article 87. The conditions for processing national ID numbers vary significantly across member states. |
| `x-gdpr-national:dpa_guidance_ref` | string (URI) | OPTIONAL | Reference to the guidance issued by the national data protection authority that is material to this processing activity in the identified member state. |

---

### When to use this namespace

Use this namespace alongside the core PCT fields and existing extension namespaces
when processing is subject to national derogations or member state-specific
provisions that affect the lawfulness or conditions of processing beyond the GDPR
baseline. This namespace is particularly important for:

- Employment-related data processing, where member state provisions vary significantly
- Special category data processing relying on national substantial public interest conditions
- Research and statistics processing relying on national Article 89 provisions
- Journalism and freedom of expression processing
- Processing of national identification numbers

---

### Citations

- GDPR (EU) 2016/679, Articles 6(2), 9(2), 17(3), 22(2)(b), 23, 85-91
- Ireland Data Protection Act 2018
- Germany Bundesdatenschutzgesetz (BDSG)
- France Loi Informatique et Libertés (as amended)
- Netherlands UAVG (Uitvoeringswet AVG)

---

*This namespace is maintained by OPSF (Open Privacy Standards Foundation) as part of
the PCT specification project. Contact pct@opsf.org for queries.*
