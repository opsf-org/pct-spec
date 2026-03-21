# Namespace: `x-iot:`
## Internet of Things and Connected Devices

**Jurisdiction:** Multi-jurisdictional (jurisdiction_variant required)
**Frameworks addressed:** EU Cyber Resilience Act (Regulation 2024/2847 — main
obligations from 11 December 2027); UK PSTI Act 2022 and Security Requirements
Regulations 2023 (in force 29 April 2024); US IoT Cybersecurity Improvement Act
2020 (federal procurement); ETSI EN 303 645 (voluntary standard).
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-iot:jurisdiction_variant` | enum | REQUIRED | The applicable regulatory regime. Permitted values: `eu_cra`, `uk_psti`, `us_federal_iot`, `etsi_standard_only`. |
| `x-iot:framework_status` | enum | OPTIONAL | Whether the framework is currently binding or future-state. Permitted values: `currently_binding`, `future_applicability`, `voluntary_standard`. Note: EU CRA main obligations apply from 11 December 2027 — not currently binding as a market-access condition. UK PSTI is currently binding (in force 29 April 2024). |
| `x-iot:device_type` | enum | OPTIONAL | Permitted values: `consumer_device`, `industrial_device`, `medical_device`, `wearable`, `smart_home`, `connected_vehicle`, `infrastructure`, `other`. |
| `x-iot:psti_compliant_flag` | boolean | OPTIONAL | Set to `true` where the connected product meets the UK PSTI Act 2022 and Security Requirements Regulations 2023 mandatory requirements: ban on universal default passwords, vulnerability disclosure policy, and defined minimum security update support period. In force 29 April 2024. |
| `x-iot:vulnerability_disclosure_policy_flag` | boolean | OPTIONAL | Set to `true` where a vulnerability reporting channel and policy is in place. Required under UK PSTI and central to the EU CRA framework. |
| `x-iot:security_update_support_end_date` | string (ISO 8601 date) | OPTIONAL | The minimum security update support end date for this product. |
| `x-iot:cra_readiness_flag` | boolean | OPTIONAL | Set to `true` where the product is being prepared for EU CRA conformance. Note: CRA main obligations apply from 11 December 2027. This is a readiness indicator, not a current market-access compliance status. |
| `x-iot:continuous_collection_flag` | boolean | OPTIONAL | Set to `true` where data is collected continuously or at frequent automated intervals. |
| `x-iot:home_environment_flag` | boolean | OPTIONAL | Set to `true` where the device operates within a private home or domestic environment. |
| `x-iot:data_minimisation_assessment_ref` | string (URI) | OPTIONAL | Reference to a documented data minimisation assessment for this IoT deployment. Note: data minimisation obligations arise from general privacy law, not from the CRA or PSTI Act directly. |

### Revision notes
- `jurisdiction_variant` added as REQUIRED field.
- `framework_status` added: EU CRA main obligations not applicable until December 2027.
- `cra_compliant_flag` replaced by `cra_readiness_flag` to avoid implying current market-access compliance.
- `vulnerability_disclosure_policy_flag` added reflecting central role in both CRA and PSTI.
- `security_update_support_end_date` added.
- `data_minimisation_assessment_ref` note updated: obligation comes from privacy law, not IoT-specific instruments.

*This namespace is registered and maintained by DPG Labs / The Data Privacy Group.*
