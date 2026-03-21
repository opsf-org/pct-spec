# Namespace: `x-pdpl-sa:`
## Personal Data Protection Law (Saudi Arabia)

**Jurisdiction:** Kingdom of Saudi Arabia (SA)
**Frameworks addressed:** Personal Data Protection Law (PDPL, Royal Decree M/19
of 1443H); PDPL Implementing Regulations 2023; SDAIA Cross-Border Transfer
Regulations. Enforced by SDAIA and the National Data Management Office (NDMO).
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-pdpl-sa:consent_required_flag` | boolean | CONDITIONAL | Set to `true` where consent is obtained as the primary basis under Article 5. Note: Saudi PDPL is primarily consent-based with limited statutory exceptions — it does not use a GDPR-style six-basis taxonomy. Legitimate interests is not a recognised standalone basis. |
| `x-pdpl-sa:processing_exception` | enum | OPTIONAL | Statutory exception where processing occurs without consent. Permitted values: `legal_obligation`, `vital_interests`, `public_task`, `judicial_proceedings`, `research`. |
| `x-pdpl-sa:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data under Article 1 of the PDPL, including racial or ethnic origin, religious or ideological beliefs, criminal records, biometric data, genetic data, and health data. Note: financial data beyond general credit status and location revealing sensitive attributes are interpretive rather than explicit statutory categories. |
| `x-pdpl-sa:breach_notification_required_flag` | boolean | OPTIONAL | Set to `true` where a personal data breach triggers notification obligations to SDAIA and, where applicable, data subjects under Implementing Regulations Article 20. |
| `x-pdpl-sa:transfer_risk_assessment_flag` | boolean | OPTIONAL | Set to `true` where the mandatory transfer impact/risk assessment has been conducted as required under the SDAIA Cross-Border Transfer Regulations. |
| `x-pdpl-sa:cross_border_transfer_basis` | enum | OPTIONAL | Transfer basis under PDPL Article 29 and SDAIA Transfer Regulations. Permitted values: `sdaia_approved_country`, `contractual_clauses`, `consent`, `contract_performance`, `vital_interests`, `public_interest`. |
| `x-pdpl-sa:dpo_required_flag` | boolean | OPTIONAL | Set to `true` where DPO designation is required under Implementing Regulations. |
| `x-pdpl-sa:ndmo_classification` | enum | OPTIONAL | NDMO data classification level under the Saudi National Data Governance Framework. Permitted values: `public`, `internal`, `confidential`, `restricted`. |

### Revision notes
- `processing_basis` replaced by `consent_required_flag` plus `processing_exception`: Saudi PDPL is consent-first, not GDPR six-basis.
- `sensitive_data_flag` description updated: financial data and location categories are interpretive not explicit statutory categories.
- `breach_notification_required_flag` added reflecting Implementing Regulations Article 20.
- `transfer_risk_assessment_flag` added reflecting SDAIA Transfer Regulations mandatory assessment.
- `data_localisation_flag` description updated: PDPL does not impose blanket localisation.

*This namespace is reserved for registration by a qualified Saudi Arabian data protection law practitioner.*
