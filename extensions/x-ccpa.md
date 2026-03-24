# Namespace: `x-ccpa:`
## California Consumer Privacy Act / California Privacy Rights Act

**Jurisdiction:** United States — California (US-CA)
**Frameworks addressed:** California Consumer Privacy Act (Cal. Civ. Code §1798.100
et seq.) as amended by the California Privacy Rights Act (CPRA, 2020), enforced
by the California Privacy Protection Agency (CPPA). CPPA Regulations effective
29 March 2023 (Cal. Code Regs. tit. 11, §§7000–7304).
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

The CCPA/CPRA framework establishes privacy rights for California residents and
imposes obligations on businesses that collect, sell, share, or process their
personal information. Key obligations include the right to opt out of sale or
sharing, the right to limit use of sensitive personal information, the right to
correct inaccurate personal information, and enhanced protections for consumers
under the age of 16. Note: the employee data and B2B exemptions that previously
applied under CCPA expired on 1 January 2023 under CPRA — employee and B2B data
are now fully subject to the law.

The CPPA Regulations (effective 29 March 2023) materially affect operational
requirements including opt-out signals, service provider obligations, and sensitive
PI limitation. Implementers must consult the current regulations in addition to
the statute.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-ccpa:opt_out_flag` | boolean | CONDITIONAL | Required when personal information may be sold or shared. `true` indicates the data subject has exercised their right to opt out of sale or sharing under Cal. Civ. Code §1798.120. Where `true`, sale and sharing must be blocked. |
| `x-ccpa:opt_out_signal_flag` | boolean | OPTIONAL | Set to `true` where a recognised opt-out preference signal (e.g. Global Privacy Control) has been received and must be honoured as a valid opt-out request under 11 CCR §7025. |
| `x-ccpa:sensitive_pi_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal information as defined under CPRA §1798.121, including social security numbers, financial account details, precise geolocation, racial or ethnic origin, religious beliefs, union membership, mail or email content, genetic data, biometric data, health information, or sex life or sexual orientation. |
| `x-ccpa:limit_sensitive_use` | boolean | CONDITIONAL | Required when `x-ccpa:sensitive_pi_flag` is `true`. `true` indicates the data subject has exercised their right to limit the use and disclosure of sensitive PI under §1798.121. Processing must be restricted to the permitted purposes listed in §1798.121(a) and 11 CCR §7027(m). |
| `x-ccpa:minor_flag` | boolean | OPTIONAL | Set to `true` where the data subject is known or reasonably believed to be under the age of 16. Triggers enhanced opt-in consent requirements under §1798.120(c)-(d). |
| `x-ccpa:minor_age_band` | enum | CONDITIONAL | Required when `x-ccpa:minor_flag` is `true`. Permitted values: `under_13` (affirmative parental opt-in required), `13_to_15` (affirmative opt-in from minor required). |
| `x-ccpa:correction_flag` | boolean | OPTIONAL | Set to `true` where the data subject has submitted a verified correction request under §1798.106 that has not yet been fully actioned. Note: the statute provides a right to correct but does not explicitly require suspension of all processing pending correction. |
| `x-ccpa:deletion_request_flag` | boolean | OPTIONAL | Set to `true` where a verified deletion request has been received under §1798.105 and is pending processing. |
| `x-ccpa:third_party_role` | enum | OPTIONAL | The role of the party processing this data under CCPA/CPRA. Permitted values: `service_provider`, `contractor`, `third_party`. Note: these are separately defined under Cal. Civ. Code §§1798.140(ag), (j), (ah) with distinct contractual requirements for each. |
| `x-ccpa:purpose_limitation_flag` | boolean | OPTIONAL | Set to `true` where processing is limited to the disclosed purposes per §1798.100(a)(2) and data minimisation obligations under §1798.100(a)(3) have been assessed. |
| `x-ccpa:retention_period` | string (ISO 8601 duration) | OPTIONAL | The retention period consistent with the data minimisation and retention limitation obligations under §1798.100(a)(3). |
| `x-ccpa:cppa_exemption_ref` | string (URI) | OPTIONAL | Reference to a documented exemption from CCPA/CPRA obligations applicable to this data. Note: the employee data and B2B exemptions expired on 1 January 2023. Only current statutory exemptions should be referenced. |

---

### Verification notes

A verifier processing a PCT containing `x-ccpa:` namespace fields must:

- Block any sale or sharing action where `x-ccpa:opt_out_flag` or `x-ccpa:opt_out_signal_flag` is `true`.
- Restrict processing to permitted purposes where `x-ccpa:limit_sensitive_use` is `true`, consistent with 11 CCR §7027(m).
- Require affirmative opt-in consent before permitting sale or sharing where `x-ccpa:minor_flag` is `true`.
- Apply appropriate processing restrictions where `x-ccpa:correction_flag` or `x-ccpa:deletion_request_flag` is `true`.

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `cppa_exemption_ref` description updated: employee and B2B exemptions expired 1 January 2023.
- `opt_out_signal_flag` added reflecting GPC and opt-out preference signal obligations under 11 CCR §7025.
- `service_provider_flag` replaced by `third_party_role` enum to reflect the statutory distinction between service provider, contractor, and third party under §§1798.140(ag), (j), (ah).
- `purpose_limitation_flag` and `retention_period` added reflecting CPRA §1798.100(a)(2)-(3).
- `limit_sensitive_use` description updated to reference 11 CCR §7027(m) permitted purposes.
- `correction_flag` description updated to clarify that suspension of all processing is not a statutory requirement.
- `minor_flag` description updated to reflect the opt-in consent model under §1798.120(c)-(d).

---

### Citations

- California Civil Code §§1798.100, 1798.105, 1798.106, 1798.120, 1798.121, 1798.140, 1798.145
- CPPA Regulations, 11 CCR §§7000–7304 (effective 29 March 2023)

---

*This namespace definition is proposed for inclusion in PCT Specification v0.2.
It has been through an AI-assisted legal review but has not yet been reviewed by
a qualified California privacy law practitioner. Comments and corrections are
welcomed via the GitHub Discussions board at github.com/opsf-org/pct-spec or by
email to pct-spec@opsf.org.*

*This namespace is reserved for registration by a qualified California privacy law
practitioner. Contact pct@opsf.org to register as the owner.*
