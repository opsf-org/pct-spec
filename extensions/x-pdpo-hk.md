# Namespace: `x-pdpo-hk:`
## Personal Data (Privacy) Ordinance (Hong Kong)

**Jurisdiction:** Hong Kong SAR (HK)
**Frameworks addressed:** Personal Data (Privacy) Ordinance (PDPO, Cap. 486) as
amended by the Personal Data (Privacy) (Amendment) Ordinance 2021, enforced by
the Office of the Privacy Commissioner for Personal Data (PCPD).
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

Hong Kong's PDPO establishes six Data Protection Principles (DPPs):
- DPP1: Collection of personal data
- DPP2: Accuracy and retention of personal data
- DPP3: Use of personal data
- DPP4: Security of personal data
- DPP5: Openness of personal data policies
- DPP6: Access to and correction of personal data

The 2021 amendments introduced criminal doxxing offences (Sections 64 and 64A)
and expanded PCPD enforcement powers. Section 33 on cross-border transfers has
not been brought into force; the PCPD encourages voluntary adoption of comparable
transfer safeguards. Direct marketing under Part VIA distinguishes between use by
the data user itself and provision of personal data to a third party for that
third party's direct marketing, with different requirements and criminal sanctions.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-pdpo-hk:dpp_tags` | array of enum | CONDITIONAL | Required when the primary framework is Hong Kong PDPO. The DPPs engaged by this processing activity. Permitted values: `dpp1_collection`, `dpp2_accuracy_retention`, `dpp3_use`, `dpp4_security`, `dpp5_openness`, `dpp6_access_correction`. Note: DPP2 covers both accuracy and retention; DPP3 is use; DPP4 is security; DPP5 is openness. |
| `x-pdpo-hk:direct_marketing_mode` | enum | OPTIONAL | The direct marketing mode under Part VIA. Permitted values: `own_marketing_use`, `provision_to_third_party_for_marketing`, `none`. Own use and third-party provision carry different notification requirements and criminal sanctions under Part VIA. |
| `x-pdpo-hk:direct_marketing_consent_type` | enum | CONDITIONAL | Required when `x-pdpo-hk:direct_marketing_mode` is not `none`. The consent basis for direct marketing under Part VIA. Permitted values: `express_consent`, `no_objection`, `not_obtained`. Note: under Part VIA, consent includes an indication of no objection, not only express consent. |
| `x-pdpo-hk:section33_voluntary_transfer_controls_flag` | boolean | OPTIONAL | Set to `true` where the organisation has voluntarily adopted cross-border transfer safeguards consistent with PCPD guidance in anticipation of Section 33 commencement. Note: Section 33 has not been brought into force and is not currently an operative statutory restriction. |
| `x-pdpo-hk:doxxing_risk_flag` | boolean | OPTIONAL | Risk indicator (not a statutory compliance status field) set to `true` where data is of a type that could be used in a doxxing disclosure under the 2021 amendments. This is a governance and security judgment rather than a legal compliance status. Enhanced security and access controls are recommended. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- **Critical correction:** `dpp_basis` replaced by `dpp_tags` (array) with corrected DPP numbering. Previous version had DPP3=retention, DPP4=use, DPP5=security which was incorrect. Correct mapping: DPP2=accuracy and retention; DPP3=use; DPP4=security; DPP5=openness.
- `direct_marketing_consent_flag` replaced by `direct_marketing_mode` and `direct_marketing_consent_type` to reflect the Part VIA distinction between own use and third-party provision.
- `transfer_outside_hk_basis` replaced by `section33_voluntary_transfer_controls_flag` to reflect that Section 33 is not in force.
- `doxxing_risk_flag` description updated to clarify it is a risk indicator, not a statutory compliance status field.

---

### Citations

- Personal Data (Privacy) Ordinance (Cap. 486), Hong Kong e-Legislation
- PCPD, Guidance on Direct Marketing (April 2023)
- PCPD, Guidance on Personal Data Protection in Cross-border Data Transfer
- PCPD, Doxxing Offences materials

---

*This namespace is reserved for registration by a qualified Hong Kong data
protection law practitioner. Contact registry@pct.opsf.org to register as
the owner.*
