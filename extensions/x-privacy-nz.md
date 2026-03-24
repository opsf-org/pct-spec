# Namespace: `x-privacy-nz:`
## Privacy Act (New Zealand)

**Jurisdiction:** New Zealand (NZ)
**Frameworks addressed:** Privacy Act 2020, Health Information Privacy Code 2020,
enforced by the Office of the Privacy Commissioner (OPC).
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

New Zealand's Privacy Act 2020 establishes thirteen Information Privacy Principles
(IPPs). New Zealand holds EU and UK adequacy status. The 2020 Act introduced
mandatory notification of privacy breaches causing or likely to cause serious harm,
a new criminal offence for misleading an agency to access another person's
information, and new compliance notices.

Note: the Privacy Act 2020 does not formally define "sensitive personal information"
as a statutory category. The sensitive_info_flag below is a risk indicator, not
a legal compliance status.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-privacy-nz:ipp_tags` | array of enum | CONDITIONAL | Required when the primary framework is New Zealand Privacy Act. The IPPs engaged. Permitted values: `ipp1_purpose_of_collection`, `ipp2_source_of_personal_information`, `ipp3_collection_of_information_from_individual`, `ipp3a_indirect_collection_notice`, `ipp4_manner_of_collection`, `ipp5_storage_and_security`, `ipp6_access`, `ipp7_correction`, `ipp8_accuracy`, `ipp9_retention`, `ipp10_use_limitation`, `ipp11_limits_on_disclosure`, `ipp12_disclosure_outside_nz`, `ipp13_unique_identifiers`. Note: IPP12 is disclosure outside NZ; IPP13 is unique identifiers. |
| `x-privacy-nz:sensitive_info_flag` | boolean | OPTIONAL | Risk indicator (not a statutory category) set to `true` where data is of a type likely to significantly affect an individual's privacy interests, including health information, racial or ethnic origin, religious beliefs, sexual orientation, or criminal history. |
| `x-privacy-nz:health_info_flag` | boolean | OPTIONAL | Set to `true` where data includes health information subject to the Health Information Privacy Code 2020. |
| `x-privacy-nz:offshore_disclosure_mechanism` | enum | OPTIONAL | The mechanism for disclosing personal information outside New Zealand under IPP 12. Permitted values: `recipient_subject_to_nz_act`, `comparable_foreign_law`, `comparable_contractual_safeguards`, `express_informed_authorisation`, `other_ipp12_exception`. |
| `x-privacy-nz:serious_harm_assessment_ref` | string (URI) | OPTIONAL | Reference to the serious harm assessment record under Section 113, which sets out the criteria for determining whether a privacy breach has caused or is likely to cause serious harm. |
| `x-privacy-nz:mandatory_breach_notification_flag` | boolean | OPTIONAL | Set to `true` where a notifiable privacy breach has occurred under Section 113, being a breach that has caused or is likely to cause serious harm to affected individuals. Notification to the OPC and affected individuals is required as soon as reasonably practicable. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- **Critical correction:** IPP numbering corrected. Previous version had IPP 12 and IPP 13 reversed. Correct: IPP 12 = disclosure outside NZ; IPP 13 = unique identifiers.
- `ipp3a_indirect_collection_notice` added to IPP tags.
- `sensitive_info_flag` description updated to clarify it is a risk indicator, not a statutory category.
- `transborder_disclosure_basis` replaced by `offshore_disclosure_mechanism` aligned to IPP 12 pathways.
- `eu_adequacy_transfer_flag` removed: describes EU/UK basis for sending data to NZ, not a NZ domestic law obligation.
- `serious_harm_assessment_ref` added referencing Section 113.

---

### Citations

- Privacy Act 2020, official text
- OPC guidance on IPP 3A, IPP 12, IPP 13
- OPC breach management guidance and Section 113 serious harm criteria

---

*This namespace is reserved for registration by a qualified New Zealand privacy
law practitioner. Contact registry@pct.opsf.org to register as the owner.*
