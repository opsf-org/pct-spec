# Namespace: `x-appi-jp:`
## Act on the Protection of Personal Information (Japan)

**Jurisdiction:** Japan (JP)
**Frameworks addressed:** Act on the Protection of Personal Information (APPI)
as consolidated to 1 April 2023, enforced by the Personal Information Protection
Commission (PPC).
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

Japan's APPI distinguishes between personal information, pseudonymised personal
information, anonymously processed information, and personal related information.
Special care-required personal information (including race, creed, social status,
medical history, criminal record, facts of having suffered damage by crime, plus
Cabinet Order categories) requires explicit consent for collection except where
a statutory exception applies. Overseas transfers require consent with specific
disclosure obligations, transfer to a PPC-designated country, or transfer to a
recipient that has established measures conforming to PPC standards.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-appi-jp:data_category` | enum | CONDITIONAL | Required when the primary framework is Japan APPI. Permitted values: `personal_information`, `pseudonymised_personal_information`, `anonymously_processed_information`, `personal_related_information`. |
| `x-appi-jp:special_care_flag` | boolean | OPTIONAL | Set to `true` where data includes special care-required personal information under APPI Article 2(3) and related Cabinet Order. |
| `x-appi-jp:special_care_categories` | array of enum | CONDITIONAL | Required when `x-appi-jp:special_care_flag` is `true`. Permitted values: `race`, `creed`, `social_status`, `medical_history`, `criminal_record`, `crime_victim_status`, `disability`, `medical_exam_results`, `arrest_record`, `other_cabinet_order`. |
| `x-appi-jp:third_party_provision_basis` | enum | OPTIONAL | The basis for providing personal information to a third party under APPI Article 27. Permitted values: `consent`, `opt_out_procedure`, `consignment`, `business_succession`, `joint_use`, `legal_obligation`, `vital_interests`, `public_health`, `public_authority_cooperation`. |
| `x-appi-jp:opt_out_third_party_notification_flag` | boolean | CONDITIONAL | Required when `third_party_provision_basis` is `opt_out_procedure`. `true` indicates PPC notification and required public disclosure of prescribed matters have been completed under APPI Article 27. |
| `x-appi-jp:overseas_transfer_basis` | enum | OPTIONAL | The basis for overseas transfer under APPI Article 28. Permitted values: `consent_with_disclosure`, `ppc_designated_country`, `recipient_with_equivalent_measures`, `other_statutory_exception`. |
| `x-appi-jp:overseas_transfer_recipient_measures_ref` | string (URI) | CONDITIONAL | Required when `overseas_transfer_basis` is `recipient_with_equivalent_measures`. Reference to the disclosure record describing the recipient's equivalent protective measures and related information required under APPI Article 28. |
| `x-appi-jp:breach_notification_flag` | boolean | OPTIONAL | Set to `true` where a reportable incident meeting statutory thresholds has occurred requiring PPC notification and notification to affected individuals. Note: only incidents meeting specified statutory criteria require notification. |
| `x-appi-jp:joint_use_flag` | boolean | OPTIONAL | Set to `true` where personal information is shared under a joint use arrangement requiring public disclosure under APPI Article 27(5)(iii). |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `sensitive_flag` replaced by `special_care_flag` and `special_care_categories` using correct APPI/Cabinet Order categories.
- `overseas_transfer_basis` enum updated to APPI statutory terminology rather than GDPR shorthand.
- `overseas_transfer_country` replaced by `overseas_transfer_recipient_measures_ref`.
- `opt_out_third_party_notification_flag` added reflecting PPC notification requirement.

---

### Citations

- Act on the Protection of Personal Information (consolidated to 1 April 2023)
- PPC Guidelines on Provision to Third Parties in Foreign Countries
- PPC Overview materials on the amended APPI

---

*This namespace is reserved for registration by a qualified Japanese data
protection law practitioner. Contact registry@pct.opsf.org to register as
the owner.*
