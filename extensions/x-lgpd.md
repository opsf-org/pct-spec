# Namespace: `x-lgpd:`
## Lei Geral de Proteção de Dados (Brazil)

**Jurisdiction:** Brazil (BR)
**Frameworks addressed:** Lei Geral de Proteção de Dados Pessoais (LGPD, Law No.
13,709/2018), enforced by the Autoridade Nacional de Proteção de Dados (ANPD).
ANPD Resolution CD/ANPD No. 2/2022 on small entity DPO exemptions. ANPD Resolution
CD/ANPD No. 19/2024 on standard contractual clauses for international transfers.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

Brazil's LGPD establishes ten lawful bases for processing, data subject rights
including access, correction, deletion, portability, and review of automated
decisions, and specific protections for sensitive personal data and children's
data. The ANPD has issued implementing resolutions including approved standard
contractual clauses for international transfers (Resolution No. 19/2024).

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-lgpd:lawful_basis` | enum | CONDITIONAL | Required when the primary framework is LGPD. Permitted values: `consent`, `legal_obligation`, `public_policy_execution`, `research`, `contract_performance`, `regular_exercise_of_rights`, `vital_interests`, `health_protection`, `legitimate_interests`, `credit_protection`. |
| `x-lgpd:sensitive_processing_basis` | enum | CONDITIONAL | Required when processing sensitive personal data under LGPD Article 11. Permitted values: `explicit_consent`, `legal_obligation`, `shared_policy_execution`, `research`, `regular_exercise_of_rights`, `health_protection`, `fraud_prevention`. Sensitive data has distinct legal bases under Article 11 separate from the general bases in Article 7. |
| `x-lgpd:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data under LGPD Article 5(II), including racial or ethnic origin, religious belief, political opinion, union or religious affiliation, health or sexual orientation data, and genetic or biometric data. |
| `x-lgpd:child_data_flag` | boolean | OPTIONAL | Set to `true` where data relates to a child (under 12) or adolescent (12-17). Parental or guardian consent required except where processing is in the child's best interest under LGPD Article 14(3). |
| `x-lgpd:parental_consent_flag` | boolean | CONDITIONAL | Required when `x-lgpd:child_data_flag` is `true`. `true` indicates specific and prominent parental or guardian consent has been obtained under LGPD Article 14(1), unless the best-interest exception under Article 14(3) applies. |
| `x-lgpd:international_transfer_basis` | enum | OPTIONAL | The legal basis for international transfer under LGPD Article 33. Permitted values: `anpd_authorised_country`, `anpd_standard_clauses`, `global_corporate_policy`, `consent`, `legal_cooperation`, `vital_interests`, `registry`, `contract`. Note: ANPD Resolution No. 19/2024 provides approved standard contractual clauses. |
| `x-lgpd:anpd_scc_flag` | boolean | OPTIONAL | Set to `true` where the international transfer relies on ANPD-approved standard contractual clauses under Resolution CD/ANPD No. 19/2024. |
| `x-lgpd:dpo_ref` | string (URI) | OPTIONAL | Reference to the data protection officer (Encarregado) contact record. Required for most controllers under LGPD Article 41; ANPD Resolution No. 2/2022 permits simplified or exempted DPO arrangements for small entities. |
| `x-lgpd:data_subject_request_flag` | enum | OPTIONAL | Indicates a pending data subject request under LGPD Article 18. Permitted values: `access`, `correction`, `deletion`, `anonymisation`, `portability`, `review_automated_decision`, `revocation_of_consent`. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `sensitive_processing_basis` added reflecting the distinct Article 11 legal bases for sensitive data.
- `anpd_scc_flag` added reflecting ANPD Resolution No. 19/2024 approved SCCs.
- `international_transfer_basis` enum updated to include `anpd_standard_clauses`.
- `dpo_ref` description updated to reflect ANPD Resolution No. 2/2022 small entity exemption.
- `parental_consent_flag` description updated to reflect Article 14(3) best-interest exception.
- `data_subject_request_flag` added reflecting LGPD Article 18 rights.

---

### Citations

- LGPD Law No. 13,709/2018, Articles 5, 7, 11, 14, 18, 33, 41
- ANPD Resolution CD/ANPD No. 2/2022
- ANPD Resolution CD/ANPD No. 19/2024

---

*This namespace is reserved for registration by a qualified Brazilian data
protection law practitioner. Contact registry@pct.opsf.org to register as
the owner.*
