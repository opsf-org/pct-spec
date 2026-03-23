# Namespace: `x-lpdp-co:`
## Personal Data Protection Law (Colombia)

**Jurisdiction:** Republic of Colombia (CO)
**Frameworks addressed:** Statutory Law 1581 of 2012; Decree 1074 of 2015 as
amended including Decree 255 of 2022 (BCRs); SIC Circular Externa 003 de 2025
(model contractual clauses). Enforced by SIC.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-lpdp-co:authorisation_obtained_flag` | boolean | CONDITIONAL | Set to `true` where prior, express, and informed authorisation has been obtained under Article 9. Note: Article 10 contains express exceptions where authorisation is not required. |
| `x-lpdp-co:authorisation_exception` | enum | OPTIONAL | Article 10 exception where processing occurs without authorisation. Permitted values: `none`, `public_record`, `judicial_or_medical_emergency`, `historical_statistical_scientific`, `legal_mandate`, `other_article_10_exception`. |
| `x-lpdp-co:sensitive_data_flag` | boolean | OPTIONAL | Set to `true` where data includes sensitive data (datos sensibles) under Article 6. |
| `x-lpdp-co:child_data_flag` | boolean | OPTIONAL | Set to `true` where data relates to a child or adolescent under 18. |
| `x-lpdp-co:rnbd_registration_ref` | string | OPTIONAL | Registration reference in the National Register of Databases (RNBD). Required for controllers above SIC-defined thresholds. |
| `x-lpdp-co:international_flow_type` | enum | OPTIONAL | The type of international data flow under Colombian law. Permitted values: `transfer`, `transmission`. Note: transfer (controller-to-controller) and transmission (controller-to-processor) are separately regulated in Colombian law and SIC's 2025 model clauses. |
| `x-lpdp-co:cross_border_transfer_basis` | enum | OPTIONAL | Transfer basis under Article 26. Permitted values: `sic_approved_country`, `binding_corporate_rules`, `model_clauses`, `consent`, `contract_performance`, `vital_interests`, `public_interest`. |
| `x-lpdp-co:model_clauses_flag` | boolean | OPTIONAL | Set to `true` where SIC model contractual clauses under Circular Externa 003 de 2025 are used. |
| `x-lpdp-co:habeas_data_request_flag` | boolean | OPTIONAL | Set to `true` where a habeas data request is pending. |

### Revision notes
- `authorisation_exception` added reflecting Article 10 exceptions.
- `international_flow_type` added: transfer vs transmission distinction is central in Colombian law.
- `model_clauses_flag` added reflecting SIC Circular Externa 003 de 2025.
- `cross_border_transfer_basis` updated to include model_clauses.

*This namespace is reserved for registration by a qualified Colombian data protection law practitioner.*
