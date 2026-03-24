# Namespace: `x-fedramp:`
## FedRAMP (Federal Risk and Authorization Management Program)

**Jurisdiction:** United States — Federal Government
**Frameworks addressed:** FedRAMP programme administered by GSA/FedRAMP.gov.
**Registration tier:** Open
**Review status:** initial_draft
**Review date:** 2026-03-21

### Overview

FedRAMP is a US government-wide programme providing a standardised approach to
security assessment, authorisation, and continuous monitoring for cloud products
and services used by federal agencies. It is a separate programme from the NIST
CSF and Privacy Framework and is administered by GSA, not NIST.

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-fedramp:authorisation_status` | enum | OPTIONAL | FedRAMP authorisation status of the processing environment. Permitted values: `not_authorised`, `in_process`, `ato_granted`, `provisional_ato`, `fedramp_ready`. |
| `x-fedramp:impact_level` | enum | OPTIONAL | FedRAMP impact level. Permitted values: `low`, `moderate`, `high`. |
| `x-fedramp:authorisation_ref` | string (URI) | OPTIONAL | Reference to the FedRAMP Marketplace entry or ATO documentation. |

*This namespace is registered and maintained by OPSF (Open Privacy Standards Foundation).*
