# Namespace: `x-biometrics:`
## Biometric Data Processing

**Jurisdiction:** Multi-jurisdictional (jurisdiction_variant recommended)
**Frameworks addressed:** GDPR Article 9 / UK GDPR (biometric data as special
category); Illinois BIPA (740 ILCS 14) as amended by Public Act 103-0769; Texas
Business and Commerce Code Chapter 503 (CUBI). Note: Washington My Health My Data
Act contains a biometric data definition within its consumer health data framework
but is not a general biometric processing law equivalent to BIPA or CUBI.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-biometrics:jurisdiction_variant` | enum | OPTIONAL | The primary applicable biometric regime. Permitted values: `gdpr_uk_gdpr`, `illinois_bipa`, `texas_cubi`, `washington_mhmda`, `other`. |
| `x-biometrics:biometric_identifier_type` | array of enum | CONDITIONAL | Required where biometric data is processed. Permitted values: `fingerprint`, `facial_geometry`, `iris_scan`, `retina_scan`, `voice_print`, `hand_geometry`, `gait`, `vein_pattern`, `keystroke_dynamics`, `other`. Note: DNA is excluded — genetic data is separately defined under GDPR and excluded from biometric identifiers under Illinois BIPA. |
| `x-biometrics:identification_purpose_flag` | boolean | CONDITIONAL | Required where biometric data is processed. `true` indicates processing for the purpose of uniquely identifying a natural person, triggering enhanced protections. |
| `x-biometrics:bipa_applies_flag` | boolean | OPTIONAL | Set to `true` where Illinois BIPA (740 ILCS 14) applies. Note: Public Act 103-0769 changed the remedy structure for repeated disclosures under Section 15(d). |
| `x-biometrics:bipa_written_consent_flag` | boolean | CONDITIONAL | Required when `bipa_applies_flag` is `true`. `true` indicates written consent under BIPA Section 15(b) has been obtained. |
| `x-biometrics:written_policy_published_flag` | boolean | OPTIONAL | Set to `true` where the organisation has published a written policy establishing a retention schedule and permanent destruction guidelines under BIPA Section 15(a). |
| `x-biometrics:profit_from_biometric_data_flag` | boolean | OPTIONAL | Set to `true` where monetisation, sale, lease, or trade of biometric data is implicated. Under BIPA Section 15(c), profiting from biometric identifiers or information is prohibited. Note: disclosure is separately governed by Section 15(d). |
| `x-biometrics:disclosure_condition_met_flag` | boolean | OPTIONAL | Set to `true` where disclosure conditions under the applicable statute have been satisfied. |
| `x-biometrics:destruction_schedule_ref` | string (URI) | OPTIONAL | Reference to the published retention and destruction policy. |
| `x-biometrics:liveness_detection_flag` | boolean | OPTIONAL | Set to `true` where biometric processing includes liveness detection. |

### Revision notes
- `dna` removed from biometric_identifier_type: genetic data is separately defined under GDPR; DNA is excluded from biometric identifiers under BIPA.
- `profit_from_biometric_data_flag` added: BIPA Section 15(c) profit prohibition distinct from Section 15(d) disclosure conditions.
- `disclosure_condition_met_flag` added.
- `destruction_schedule_ref` added.
- Washington MHMDA framing updated: it is not a general biometric law.
- BIPA Public Act 103-0769 noted for remedy structure changes.

*This namespace is registered and maintained by OPSF (Open Privacy Standards Foundation).*
