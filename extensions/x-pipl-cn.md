# Namespace: `x-pipl-cn:`
## Personal Information Protection Law (China)

**Jurisdiction:** People's Republic of China (CN)
**Frameworks addressed:** Personal Information Protection Law (PIPL, 2021);
Data Security Law (DSL, 2021); Cybersecurity Law (CSL, 2017); CAC Measures on
Standard Contracts for Cross-Border Transfer of Personal Information (effective
1 June 2023); CAC Provisions on Promoting and Regulating Cross-Border Data Flows
(March 2024); CAC/SAMR Measures for Certification of Cross-Border Personal
Information Transfer (effective 1 January 2026). Enforced by the Cyberspace
Administration of China (CAC).
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

China's PIPL applies to processing of personal information of individuals within
China and to processing outside China directed at individuals in China. PIPL
Article 13 establishes processing bases including consent, contract necessity,
HR management under lawful labour rules and collective contracts, vital interests,
public interest processing, legal duties, public interest news/opinion supervision,
and other laws. For certain activities including sensitive personal information
processing, cross-border transfers, and disclosure to third parties, PIPL requires
separate consent rather than generic consent. Processors must conduct Personal
Information Protection Impact Assessments (PIPIAs) for specified high-risk activities.

The cross-border transfer framework has been significantly updated: the 2024
Provisions created important exemptions from security assessment, standard contract,
and certification requirements for specified transfer categories. The 2025
Certification Measures (effective 1 January 2026) formalised the certification
pathway as a third transfer route.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-pipl-cn:processing_basis` | enum | CONDITIONAL | Required when the primary framework is China PIPL. Permitted values: `consent`, `contract_performance`, `hr_management`, `legal_obligation`, `vital_interests`, `public_interest`, `public_interest_news`, `other_law`. Note: consent must be freely given, informed, and unambiguous. Bundled consent is prohibited. |
| `x-pipl-cn:separate_consent_flag` | boolean | CONDITIONAL | Required where PIPL requires separate consent beyond generic processing consent. `true` indicates separate consent has been obtained. Separate consent is required for: processing sensitive personal information, cross-border transfers (where applicable), disclosure to third parties, and public disclosure of personal information. |
| `x-pipl-cn:sensitive_pi_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal information under PIPL Article 28, including biometric data, religious beliefs, medical health, financial accounts, whereabouts, and personal information of minors under 14. |
| `x-pipl-cn:minor_flag` | boolean | OPTIONAL | Set to `true` where data relates to a minor under the age of 14. Separate consent from parent or guardian required. |
| `x-pipl-cn:pipia_required_flag` | boolean | OPTIONAL | Set to `true` where a Personal Information Protection Impact Assessment (PIPIA) is required under PIPL Article 55. Required for: processing sensitive personal information; use for automated decision-making; entrusted handling, provision to third parties, or public disclosure; and cross-border transfers. |
| `x-pipl-cn:critical_infrastructure_operator_flag` | boolean | OPTIONAL | Set to `true` where the processor is a Critical Information Infrastructure Operator (CIIO) or meets CAC-specified thresholds for personal information processing volume, triggering mandatory domestic storage and CAC security assessment before cross-border transfer. |
| `x-pipl-cn:cross_border_transfer_mechanism` | enum | CONDITIONAL | Required where personal information is transferred outside China. Permitted values: `cac_security_assessment`, `standard_contract`, `certification`, `statutory_exemption`, `other_law_or_treaty`. Reflects the framework following the 2023 Standard Contract Measures, 2024 Provisions, and 2026 Certification Measures. |
| `x-pipl-cn:cross_border_transfer_exemption` | enum | OPTIONAL | Where a transfer falls within an exemption under the 2024 CAC Provisions on Promoting and Regulating Cross-Border Data Flows. Permitted values: `hr_management_necessity`, `contract_necessity`, `below_threshold_non_sensitive`, `other_2024_regulatory_exemption`, `none`. |
| `x-pipl-cn:data_localisation_flag` | boolean | OPTIONAL | Set to `true` where applicable law requires data to remain within China, including for CIIOs and processors meeting volume thresholds under CSL and CAC regulations. |
| `x-pipl-cn:automated_decision_flag` | boolean | OPTIONAL | Set to `true` where data is used in automated decision-making under PIPL Article 24. Obligations include transparency, fairness, no unreasonable differential treatment, and provision of an option not based on personal characteristics or a convenient refusal mechanism for information push and commercial marketing. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `processing_basis` enum updated to add `hr_management` and `public_interest_news` reflecting PIPL Article 13.
- `separate_consent_flag` added reflecting PIPL's separate consent requirement.
- `pipia_required_flag` added reflecting PIPL Article 55 PIPIA obligation.
- `cross_border_transfer_basis` replaced by `cross_border_transfer_mechanism` reflecting current framework.
- `cross_border_transfer_exemption` added reflecting 2024 CAC Provisions exemption categories.
- Framework references updated to include 2023 Standard Contract Measures, 2024 Provisions, and 2025/2026 Certification Measures.
- `automated_decision_flag` description updated to reflect full Article 24 obligations.

---

### Citations

- Personal Information Protection Law of the PRC (2021)
- CAC Measures on Standard Contracts for Cross-Border Transfer, effective 1 June 2023
- CAC Provisions on Promoting and Regulating Cross-Border Data Flows, March 2024
- CAC/SAMR Measures for Certification of Cross-Border Personal Information Transfer, effective 1 January 2026

---

*This namespace is reserved for registration by a qualified Chinese data protection
law practitioner. Contact registry@pct.thedpg.com to register as the owner.*
