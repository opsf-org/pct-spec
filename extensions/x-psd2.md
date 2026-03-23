# Namespace: `x-psd2:`
## Payment Services Directive 2

**Jurisdiction:** European Union and United Kingdom
**Frameworks addressed:** Directive (EU) 2015/2366 (PSD2); Commission Delegated
Regulation (EU) 2018/389 on SCA/CSC RTS; UK Payment Services Regulations 2017
(PSR 2017) and FCA supervisory framework.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

PSD2 and the SCA/CSC RTS regulate payment data, third-party provider access, and
strong customer authentication. EU and UK implementations now diverge operationally.
SCA is required unless an RTS exemption applies — SCA is not required before all
processing can proceed. The EU re-authentication cycle for account access was
updated from 90 to 180 days under RTS Article 36.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-psd2:jurisdiction_variant` | enum | REQUIRED | The applicable regulatory variant. Permitted values: `eu_psd2`, `uk_psr2017`. |
| `x-psd2:tpp_role` | enum | CONDITIONAL | Required where processing involves a TPP. Permitted values: `aisp`, `pisp`, `aspsp`, `cbpii`. |
| `x-psd2:sensitive_payment_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive payment data under PSD2 Article 4(32), being data that can be used to carry out fraud. Note: for AISPs and PISPs, the payer's/payee's name and account number are expressly excluded from this definition. |
| `x-psd2:psu_explicit_consent_flag` | boolean | CONDITIONAL | Required where processing involves AISP or PISP access. `true` indicates explicit consent from the payment service user under PSD2 Articles 66 or 67, or equivalent UK PSR 2017 provisions. |
| `x-psd2:sca_required_flag` | boolean | OPTIONAL | Set to `true` where Strong Customer Authentication is required for the requested transaction under PSD2 Article 97 and the SCA/CSC RTS. Note: SCA is required unless an RTS exemption applies. |
| `x-psd2:sca_exemption` | enum | OPTIONAL | The SCA exemption relied on where SCA has not been applied. Permitted values: `none`, `transaction_risk_analysis`, `low_value`, `recurring_transaction`, `trusted_beneficiary`, `secure_corporate_payment_process`, `account_access_exemption`. |
| `x-psd2:transaction_risk_analysis_flag` | boolean | OPTIONAL | Set to `true` where Transaction Risk Analysis has been applied as an SCA exemption within permitted fraud rate thresholds. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `jurisdiction_variant` added: EU PSD2 and UK PSR 2017 now diverge operationally.
- `explicit_consent_flag` replaced by `psu_explicit_consent_flag` covering both AISP and PISP access.
- `sensitive_payment_data_flag` description corrected: account name and number excluded per Article 4(32).
- `sca_exemption` added reflecting RTS exemption structure.
- `sca_required_flag` description updated: SCA required unless exemption applies.
- `access_frequency` removed: RTS access frequency rules are not well-represented by a free-form duration field.

---

### Citations

- Directive (EU) 2015/2366, Articles 4(32), 66, 67, 94, 97
- Commission Delegated Regulation (EU) 2018/389, Articles 10, 36

---

*This namespace is registered and maintained by DPG Labs / The Data Privacy Group.*
