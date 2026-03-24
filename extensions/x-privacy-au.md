# Namespace: `x-privacy-au:`
## Privacy Act (Australia)

**Jurisdiction:** Australia (AU)
**Frameworks addressed:** Privacy Act 1988 (Cth) incorporating the Australian
Privacy Principles (APPs) as amended by the Privacy and Other Legislation
Amendment Act 2024, enforced by the Office of the Australian Information
Commissioner (OAIC). Health Information Privacy Code 2020 for health agencies.
Note: the Children's Online Privacy Code mandated by the 2024 amendments was
under consultation as of March 2026 and had not been finalised.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

Australia's Privacy Act applies to Australian Government agencies and private
sector organisations with annual turnover exceeding AUD 3 million, and certain
smaller organisations handling health information. The thirteen Australian Privacy
Principles are not legal bases in the GDPR sense but a set of principles governing
the full lifecycle of personal information handling. Multiple APPs apply
simultaneously to the same processing activity. The 2024 amendments introduced
a statutory tort for serious invasions of privacy and enhanced enforcement powers.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-privacy-au:app_obligations` | array of enum | CONDITIONAL | Required when the primary framework is Australia Privacy Act. The APP obligations engaged by this processing activity. Permitted values: `app1_open_transparent_management`, `app3_collection_solicited`, `app4_collection_unsolicited`, `app6_use_disclosure`, `app7_direct_marketing`, `app8_cross_border_disclosure`, `app9_government_identifiers`, `app11_security`, `app12_access`, `app13_correction`. Note: multiple APPs typically apply simultaneously. |
| `x-privacy-au:sensitive_info_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive information under Privacy Act Section 6, including health information, racial or ethnic origin, political opinion, religious beliefs, sexual orientation, criminal record, biometric data, or genetic information. |
| `x-privacy-au:health_info_flag` | boolean | OPTIONAL | Set to `true` where data includes health information subject to the Health Information Privacy Code 2020. |
| `x-privacy-au:direct_marketing_condition` | enum | OPTIONAL | The condition for direct marketing under APP 7. Permitted values: `consent`, `reasonable_expectation_with_opt_out`, `impracticable_to_obtain_consent_special_rule`, `not_permitted`. |
| `x-privacy-au:cross_border_exception` | enum | OPTIONAL | The basis for cross-border disclosure under APP 8.2. Permitted values: `substantially_similar_law`, `informed_consent_after_warning`, `required_or_authorised_by_law`, `permitted_general_situation`. Note: `substantially_similar_law` requires reasonable belief that the overseas recipient is bound by substantially similar privacy protections. |
| `x-privacy-au:eligible_breach_flag` | boolean | OPTIONAL | Set to `true` where an eligible data breach has occurred under the Notifiable Data Breaches scheme (Privacy Act Part IIIC), requiring notification to the OAIC and affected individuals. |
| `x-privacy-au:statutory_tort_risk_flag` | boolean | OPTIONAL | Set to `true` where processing involves a serious invasion of privacy that could give rise to liability under the statutory tort introduced by the Privacy and Other Legislation Amendment Act 2024. |
| `x-privacy-au:children_online_service_flag` | boolean | OPTIONAL | Set to `true` where the service is likely to fall within scope of the Children's Online Privacy Code being developed under the 2024 amendments. Note: Code was under consultation as of March 2026 and had not been finalised. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `app_basis` (single enum) replaced by `app_obligations` (array) — APPs are not GDPR-style bases and multiple APPs apply simultaneously.
- `direct_marketing_basis` replaced by `direct_marketing_condition` aligned to APP 7.
- `cross_border_disclosure_basis` replaced by `cross_border_exception` aligned to APP 8.2.
- `notifiable_breach_flag` replaced by `eligible_breach_flag` using correct Part IIIC terminology.
- `statutory_tort_risk_flag` added reflecting 2024 amendments.
- Children's Code status note updated to reflect consultation status as of March 2026.

---

### Citations

- Privacy Act 1988 (Cth), latest compilation
- Privacy and Other Legislation Amendment Act 2024
- OAIC Notifiable Data Breaches guidance
- OAIC Children's Online Privacy Code materials

---

*This namespace is reserved for registration by a qualified Australian privacy
law practitioner. Contact pct@opsf.org to register as the owner.*
