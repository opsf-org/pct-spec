# Namespace: `x-pipeda:`
## PIPEDA and Provincial Privacy Laws (Canada)

**Jurisdiction:** Canada (CA)
**Frameworks addressed:** Personal Information Protection and Electronic Documents
Act (PIPEDA, S.C. 2000, c.5); Alberta Personal Information Protection Act (PIPA);
British Columbia Personal Information Protection Act (PIPA); Quebec Act to modernize
legislative provisions respecting the protection of personal information (Law 25,
in force from September 2023). Note: the proposed Consumer Privacy Protection Act
(CPPA, Bill C-27) died on prorogation of the 44th Parliament and is not in force.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

PIPEDA governs collection, use, and disclosure of personal information in the
course of commercial activity in Canada based on ten fair information principles.
Quebec's Law 25 introduces GDPR-style obligations including privacy by default,
data minimisation, mandatory privacy impact assessments for high-risk processing,
automated decision-making transparency, and biometric database registration.
The OPC requires meaningful consent rather than a simple express/implied binary,
with particular attention to the sensitivity of information and reasonable
expectations.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-pipeda:consent_type` | enum | CONDITIONAL | Required when the primary framework is PIPEDA. Permitted values: `express`, `implied`. PIPEDA permits implied consent for less sensitive information where the individual would reasonably expect collection and use. OPC guidance requires meaningful consent appropriate to the sensitivity and context. |
| `x-pipeda:meaningful_consent_flag` | boolean | OPTIONAL | Set to `true` where consent has been assessed as meaningful under OPC Guidelines for Meaningful Consent (2018, updated), taking into account that individuals understand what they are consenting to and that consent is not bundled, buried, or obtained through confusing language. |
| `x-pipeda:provincial_framework` | enum | OPTIONAL | Where a provincial private sector law applies in addition to or instead of PIPEDA. Permitted values: `alberta_pipa`, `bc_pipa`, `quebec_law25`. |
| `x-pipeda:quebec_pia_required_flag` | boolean | CONDITIONAL | Required when `x-pipeda:provincial_framework` includes `quebec_law25` and the processing involves a technology with a high risk to privacy or communication of personal information outside Quebec. `true` indicates a Privacy Impact Assessment has been completed as required under Quebec Law 25. |
| `x-pipeda:automated_decision_flag` | boolean | OPTIONAL | Set to `true` where processing involves an automated decision-making system under Quebec Law 25 Section 12.1, requiring disclosure to the individual and the right to request human review. |
| `x-pipeda:privacy_by_default_flag` | boolean | OPTIONAL | Set to `true` where the system or service has been designed to ensure only the personal information necessary for each specific purpose of use is collected, used, communicated, or retained, in accordance with Quebec Law 25 Section 9.1. |
| `x-pipeda:breach_notification_flag` | boolean | OPTIONAL | Set to `true` where a breach of security safeguards involving personal information creates a real risk of significant harm (RROSH) and notification to the OPC and affected individuals is required under PIPEDA Section 10.1. |
| `x-pipeda:cross_border_transfer_flag` | boolean | OPTIONAL | Set to `true` where personal information is transferred to a third party in another country for processing. Under PIPEDA Principle 4.1.3, comparable protections must be ensured. OPC guidance (2019) clarifies transfers are uses, not disclosures, but transparency is required. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `meaningful_consent_flag` added reflecting OPC meaningful consent requirements.
- `automated_decision_flag` added reflecting Quebec Law 25 Section 12.1.
- `privacy_by_default_flag` added reflecting Quebec Law 25 Section 9.1.
- CPPA reference updated: Bill C-27 died on prorogation and is not in force.
- `consent_type` description updated to reflect OPC meaningful consent guidance.

---

### Citations

- PIPEDA, S.C. 2000, c.5
- OPC Guidelines for Meaningful Consent (2018, updated)
- Quebec Law 25, Sections 9.1, 12.1
- OPC Cross-border transfer guidance (2019)

---

*This namespace is reserved for registration by a qualified Canadian privacy law
practitioner. Contact registry@pct.opsf.org to register as the owner.*
