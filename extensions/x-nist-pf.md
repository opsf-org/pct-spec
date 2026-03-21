# Namespace: `x-nist-pf:`
## NIST Privacy Framework

**Jurisdiction:** United States (global voluntary use)
**Frameworks addressed:** NIST Privacy Framework Version 1.0 (2020), published
by the National Institute of Standards and Technology. Voluntary tool for
improving privacy through enterprise risk management.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

The NIST Privacy Framework is a voluntary tool for organisations to identify,
assess, manage, and communicate privacy risks. It is structured around five Core
Functions: Identify-P, Govern-P, Control-P, Communicate-P, and Protect-P. It is
distinct from the NIST Cybersecurity Framework (addressed in x-nist-csf:). FedRAMP
and CMMC are separate programmes addressed in their own namespaces.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-nist-pf:profile_ref` | string (URI) | OPTIONAL | Reference to the organisation's NIST Privacy Framework profile document for this data category. |
| `x-nist-pf:identify_p_ref` | string (URI) | OPTIONAL | Reference to the completed Identify-P function assessment covering data inventory, business environment, risk assessment, and data processing ecosystem mapping. |
| `x-nist-pf:govern_p_ref` | string (URI) | OPTIONAL | Reference to the Govern-P function assessment covering policies, processes, and procedures for managing privacy risk. |
| `x-nist-pf:data_processing_ecosystem_flag` | boolean | OPTIONAL | Set to `true` where data is shared with or processed by third parties forming part of the organisation's data processing ecosystem as mapped under NIST Privacy Framework ID.DE-P. This is a risk-mapping construct, not a compliance status. |

---

### Citations

- NIST Privacy Framework Version 1.0 (2020)

---

*This namespace is registered and maintained by DPG Labs / The Data Privacy Group.*
