# Namespace: `x-pipa-kr:`
## Personal Information Protection Act (South Korea)

**Jurisdiction:** Republic of Korea (KR)
**Frameworks addressed:** Personal Information Protection Act (PIPA) as amended
14 March 2023, with amended provisions entering into force 15 September 2023,
enforced by the Personal Information Protection Commission (PIPC). Note: some
provisions including MyData portability rights commenced on a different timeline.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

South Korea's PIPA is one of the most stringent data protection frameworks in
Asia-Pacific. The 2023 amendments introduced recognition of countries with
substantially similar protection levels and certified recipients for cross-border
transfers, compatible use rules for processing reasonably related to the original
purpose, strengthened breach notification, and updated automated decision-making
rights including explanation, review, and in some circumstances suspension or
refusal.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-pipa-kr:processing_basis` | enum | CONDITIONAL | Required when the primary framework is South Korea PIPA. Permitted values: `consent`, `legal_obligation`, `contract_performance`, `vital_interests`, `public_task`, `legitimate_interests`. |
| `x-pipa-kr:sensitive_info_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive information under PIPA Article 23, including ideology, belief, union membership, political opinion, health, sexual orientation, criminal records, genetic information, or biometric data. Explicit consent or specific legal basis required. |
| `x-pipa-kr:unique_id_flag` | boolean | OPTIONAL | Set to `true` where data includes unique identification information under PIPA Article 24. Collection and use is severely restricted. |
| `x-pipa-kr:pseudonymised_flag` | boolean | OPTIONAL | Set to `true` where data has been pseudonymised under PIPA Article 28-2. |
| `x-pipa-kr:compatible_use_flag` | boolean | OPTIONAL | Set to `true` where processing relies on the compatible use provision introduced by the 2023 amendments, permitting processing for purposes reasonably related to the original purpose subject to statutory factors. |
| `x-pipa-kr:public_sector_pia_flag` | boolean | OPTIONAL | Set to `true` where a Privacy Impact Assessment is required for a public institution under PIPA Article 33. Note: Article 33 is primarily a public sector obligation, not a general private sector high-risk processing requirement. |
| `x-pipa-kr:automated_decision_rights_flag` | boolean | OPTIONAL | Set to `true` where data is used in automated decision-making with significant impact on the data subject. Data subjects have rights to explanation, review, and in some circumstances suspension or refusal under the amended PIPA. |
| `x-pipa-kr:cross_border_transfer_mechanism` | enum | OPTIONAL | The mechanism for cross-border transfer under the post-2023 PIPA framework. Permitted values: `consent`, `contract_necessity`, `adequate_country`, `certified_recipient`, `other_statutory_ground`. |
| `x-pipa-kr:breach_notification_flag` | boolean | OPTIONAL | Set to `true` where a reportable personal information breach has occurred and notification obligations to the PIPC and affected data subjects are in effect. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `dpia_required_flag` replaced by `public_sector_pia_flag`: Article 33 applies to public sector institutions, not as a general private sector requirement.
- `automated_decision_flag` replaced by `automated_decision_rights_flag` with description updated to reflect post-2023 rights.
- `cross_border_transfer_basis` replaced by `cross_border_transfer_mechanism` with post-2023 enum.
- `compatible_use_flag` added reflecting 2023 compatible use amendments.
- `breach_notification_flag` added reflecting harmonised 2023 notification obligations.

---

### Citations

- Personal Information Protection Act (Republic of Korea) as amended 14 March 2023
- PIPC press release 15 September 2023 on commencement

---

*This namespace is reserved for registration by a qualified South Korean data
protection law practitioner. Contact pct@opsf.org to register as
the owner.*
