# Namespace: `x-nist-csf:`
## NIST Cybersecurity Framework

**Jurisdiction:** United States (global voluntary use)
**Frameworks addressed:** NIST Cybersecurity Framework Version 2.0 (2024),
published by the National Institute of Standards and Technology.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

The NIST Cybersecurity Framework 2.0 is a voluntary risk management framework
structured around six Functions: Govern, Identify, Protect, Detect, Respond,
and Recover. Version 2.0 added the Govern function. It is widely adopted by
US federal agencies and globally by organisations seeking to align with US
federal security expectations. It is distinct from the NIST Privacy Framework
(addressed in x-nist-pf:).

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-nist-csf:framework_version` | enum | OPTIONAL | The NIST CSF version applied. Permitted values: `csf_1_1`, `csf_2_0`. |
| `x-nist-csf:profile_ref` | string (URI) | OPTIONAL | Reference to the organisation's NIST CSF profile for this system or data category. |
| `x-nist-csf:govern_function_ref` | string (URI) | OPTIONAL | Reference to the CSF 2.0 Govern function assessment, covering organisational context, risk management strategy, roles, policy, and oversight. |
| `x-nist-csf:identify_function_ref` | string (URI) | OPTIONAL | Reference to the Identify function assessment covering asset management, risk assessment, and improvement. |

---

### Citations

- NIST Cybersecurity Framework 2.0 (2024)

---

*This namespace is registered and maintained by DPG Labs / The Data Privacy Group.*
