# Namespace: `x-telecom:`
## Telecommunications Sector Data Obligations

**Jurisdiction:** Multi-jurisdictional (jurisdiction_variant required)
**Frameworks addressed:** EU Electronic Communications Code (Directive 2018/1972);
US Communications Act Section 222 and FCC CPNI rules (47 CFR Part 64 Subpart U);
UK Communications Act 2003 and Ofcom regulations; ePrivacy Directive Articles 6
and 9 for EU traffic/location data distinctions.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-telecom:jurisdiction_variant` | enum | REQUIRED | The applicable regulatory regime. Permitted values: `eu_eecc`, `uk_telecom`, `us_cpni`, `other_national`. |
| `x-telecom:statutory_source_ref` | string (URI) | OPTIONAL | Reference to the specific telecom-law instrument or regulator rule relied on. |
| `x-telecom:metadata_category` | enum | OPTIONAL | The metadata category under the applicable regime. Permitted values: `traffic_data`, `location_data`, `cpni_usage_data`, `call_detail_record`, `other`. Note: EU traffic data and location data are separately regulated under the ePrivacy Directive Articles 6 and 9. |
| `x-telecom:cpni_flag` | boolean | OPTIONAL | Set to `true` where data constitutes CPNI under US Communications Act Section 222(h)(1) and 47 CFR Part 64. FCC rules impose authentication, access, breach notification, and annual certification requirements. |
| `x-telecom:cpni_breach_notification_flag` | boolean | OPTIONAL | Set to `true` where a CPNI breach triggers FCC notification obligations under 47 CFR Part 64 Subpart U. |
| `x-telecom:communications_content_flag` | boolean | OPTIONAL | Set to `true` where data constitutes the content of an electronic communication. Content attracts the highest protection and interception is generally prohibited except under lawful authority. |
| `x-telecom:lawful_interception_flag` | boolean | OPTIONAL | Set to `true` where data has been obtained or is processed pursuant to a lawful interception order. Note: lawful interception is governed by highly jurisdiction-specific public-law regimes, often with secrecy obligations. This field is a governance indicator only. |
| `x-telecom:data_retention_obligation_flag` | boolean | OPTIONAL | Set to `true` where data is subject to a telecom data retention obligation under applicable national law. Note: EU-wide general retention mandates were constrained by CJEU case law; national schemes vary significantly. A jurisdiction and statutory reference should accompany this field. |

### Revision notes
- `jurisdiction_variant` added as REQUIRED field: verifiers cannot reliably interpret x-telecom: claims without knowing the applicable regime.
- `statutory_source_ref` added for instrument-level reference.
- `metadata_category` added replacing generic `communications_metadata_flag`.
- `cpni_breach_notification_flag` added reflecting FCC breach notification obligations.
- `cpni_flag` description updated to reference FCC authentication and certification requirements.
- `data_retention_obligation_flag` note updated reflecting CJEU case law constraint on EU mandates.

*This namespace is registered and maintained by DPG Labs / The Data Privacy Group.*
