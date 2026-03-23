# Namespace: `x-coppa:`
## Children's Online Privacy Protection Act (United States)

**Jurisdiction:** United States (US)
**Frameworks addressed:** Children's Online Privacy Protection Act 1998 (COPPA),
16 CFR Part 312 as amended by the FTC final rule amendments published 22 April
2025 in the Federal Register (finalised January 2025).
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

COPPA governs collection, use, and disclosure of personal information from children
under 13 by operators of websites and online services directed at children or with
actual knowledge of collection from children under 13. The FTC finalised amendments
in January 2025, published in the Federal Register on 22 April 2025, which
strengthened consent requirements and require separate verifiable parental consent
before disclosing a child's personal information to third parties including for
targeted advertising.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-coppa:child_under_13_flag` | boolean | CONDITIONAL | Required where the operator has actual knowledge or the service is directed at children under 13. `true` indicates the data subject is known or believed to be under 13. Verifiable parental consent required before collection, use, or disclosure. |
| `x-coppa:verifiable_parental_consent_flag` | boolean | CONDITIONAL | Required when `child_under_13_flag` is `true`. `true` indicates verifiable parental consent obtained under 16 CFR Part 312 (current amended rule). |
| `x-coppa:consent_method` | enum | CONDITIONAL | Required when `verifiable_parental_consent_flag` is `true`. The method used under 16 CFR §312.5 (current amended rule). Permitted values: `signed_form`, `credit_card_verification`, `toll_free_number`, `video_conference`, `government_id`, `knowledge_based_auth`, `face_match`. |
| `x-coppa:third_party_disclosure_parental_consent_flag` | boolean | OPTIONAL | Set to `true` where separate verifiable parental consent has been obtained for disclosure to third parties, including targeted advertising, as required under the 2025 amended rule. |
| `x-coppa:targeted_advertising_flag` | boolean | OPTIONAL | Set to `true` where data is used for targeted advertising directed at a child under 13. Under the 2025 amended rule, separate verifiable parental consent is required before disclosing a child's information to third parties for targeted advertising. |
| `x-coppa:retention_necessary_flag` | boolean | OPTIONAL | Set to `true` where retention of the child's personal information remains reasonably necessary for the specific purpose for which it was collected under 16 CFR Part 312. Set to `false` where retention period has expired and deletion is required. |
| `x-coppa:persistent_identifier_only_flag` | boolean | OPTIONAL | Set to `true` where only a persistent identifier is collected and solely to support internal operations as defined in 16 CFR §312.2. |
| `x-coppa:safe_harbor_program_ref` | string (URI) | OPTIONAL | Reference to an FTC-approved COPPA safe harbor programme, where applicable. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- Framework updated to reflect FTC final rule amendments finalised January 2025.
- `third_party_disclosure_parental_consent_flag` added reflecting new separate consent requirement for third-party disclosures including targeted advertising.
- `targeted_advertising_flag` description updated: 2025 rule requires separate consent, not merely proposed.
- `data_retention_flag` replaced by `retention_necessary_flag` with correct framing.
- `persistent_identifier_only_flag` added tied to 16 CFR §312.2 definition.
- `safe_harbor_program_ref` added.

---

### Citations

- 16 CFR Part 312, especially §§312.2 and 312.5 (current amended rule)
- FTC final COPPA rule amendments, finalised January 2025, Federal Register 22 April 2025

---

*This namespace is registered and maintained by DPG Labs / The Data Privacy Group.*
