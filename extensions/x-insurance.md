# Namespace: `x-insurance:`
## Insurance Sector Data Obligations

**Jurisdiction:** Multi-jurisdictional (jurisdiction_variant required)
**Frameworks addressed:** EU Solvency II (Directive 2009/138/EC) — prudential regime;
EU Insurance Distribution Directive (IDD, 2016/97/EU) — conduct regime; UK Solvency
II and FCA rules; US state insurance regulations and NAIC model laws. Note: these
instruments do not create a single harmonised insurance data regime.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-insurance:jurisdiction_variant` | enum | REQUIRED | The applicable insurance regulatory regime. Permitted values: `eu_solvency_ii`, `eu_idd`, `uk_insurance`, `us_state_insurance`, `other`. |
| `x-insurance:state_or_regime_ref` | string (URI) | OPTIONAL | Reference to the applicable insurance law source, state model adoption, or regulator framework. Particularly important for US state insurance law where NAIC models are not law until adopted by individual states. |
| `x-insurance:underwriting_data_flag` | boolean | OPTIONAL | Set to `true` where data is used in underwriting or pricing decisions. |
| `x-insurance:claims_data_flag` | boolean | OPTIONAL | Set to `true` where data relates to an insurance claim. |
| `x-insurance:consumer_health_info_flag` | boolean | OPTIONAL | Set to `true` where data includes health-related information subject to insurance-sector specific handling expectations. Note: health data in insurance contexts is subject to general data protection special category rules in addition to any sector-specific requirements. |
| `x-insurance:automated_underwriting_flag` | boolean | OPTIONAL | Set to `true` where data is used in automated underwriting or pricing producing a significant effect on the data subject. Note: significant-effect automated decision rules arise primarily from general data protection law (GDPR Article 22 or equivalent) rather than a uniform insurance-sector rule. |
| `x-insurance:fraud_prevention_sharing_ref` | string (URI) | OPTIONAL | Reference to the applicable fraud-prevention data-sharing arrangement and notice. Note: fraud database schemes are jurisdiction-specific. |
| `x-insurance:solvency_ii_flag` | boolean | OPTIONAL | Set to `true` where the data controller is an insurance undertaking subject to Solvency II or UK Solvency II. Note: Solvency II is a prudential governance regime — it does not create a standalone data-processing rulebook separate from GDPR. |

### Revision notes
- `jurisdiction_variant` added as REQUIRED field.
- `state_or_regime_ref` added: NAIC models are not law until adopted by individual states.
- `solvency_ii_flag` description updated: Solvency II is prudential, not a standalone data processing rulebook.
- `naic_model_flag` (boolean) removed: too blunt without state-specific reference.
- `consumer_health_info_flag` added replacing generic sensitive health flag.
- `fraud_prevention_sharing_ref` replaces jurisdiction-specific `fraud_database_flag`.

*This namespace is registered and maintained by OPSF (Open Privacy Standards Foundation).*
