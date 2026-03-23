# Namespace: `x-lgpd-ec:`
## Organic Law on Personal Data Protection (Ecuador)

**Jurisdiction:** Republic of Ecuador (EC)
**Frameworks addressed:** Organic Law on Personal Data Protection (LOPDP, 2021);
General Regulation (published 13 November 2023); SPDP resolutions including
SPDP-SPD-2025-0003-R (DPIA/risk management), SPDP-SPD-2025-0041-R (legitimate
interest), SPDP-SPD-2025-0024-R and SPDP-SPD-2026-0004-R (transfers). Enforced
by SPDP.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-lgpd-ec:processing_basis` | enum | CONDITIONAL | Permitted values: `consent`, `contract_performance`, `legal_obligation`, `vital_interests`, `public_task`, `legitimate_interests`. |
| `x-lgpd-ec:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive personal data under LOPDP Article 26. |
| `x-lgpd-ec:child_data_flag` | boolean | OPTIONAL | Set to `true` where data relates to a child or adolescent under 18 under LOPDP Article 30. |
| `x-lgpd-ec:legitimate_interest_assessment_ref` | string (URI) | CONDITIONAL | Required when `processing_basis` is `legitimate_interests`. Reference to the documented assessment required under SPDP Resolution SPDP-SPD-2025-0041-R. |
| `x-lgpd-ec:dpia_required_flag` | boolean | OPTIONAL | Set to `true` where a DPIA is required under LOPDP Article 43 and SPDP Resolution SPDP-SPD-2025-0003-R. |
| `x-lgpd-ec:transfer_rule_version` | enum | OPTIONAL | The transfer instrument layer applied. Permitted values: `law_only`, `reglamento_general_2023`, `spdp_transfer_rules_2025_2026`. |
| `x-lgpd-ec:cross_border_transfer_basis` | enum | OPTIONAL | Transfer basis under LOPDP Article 55 and current SPDP transfer rules. Permitted values: `sdpd_approved_country`, `standard_clauses`, `binding_corporate_rules`, `consent`, `contract_performance`, `vital_interests`. |
| `x-lgpd-ec:local_representative_ref` | string (URI) | OPTIONAL | Reference to the Ecuador representative designated by a non-established controller or processor under the General Regulation. |

### Revision notes
- `legitimate_interest_assessment_ref` added reflecting SPDP-SPD-2025-0041-R.
- `dpia_required_flag` description updated to reference SPDP-SPD-2025-0003-R.
- `transfer_rule_version` added reflecting 2025/2026 SPDP transfer rules.
- `local_representative_ref` added for non-established controllers/processors.
- Framework references updated to include 2025 and 2026 SPDP resolutions.

*This namespace is reserved for registration by a qualified Ecuadorian data protection law practitioner.*
