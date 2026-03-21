# Namespace: `x-eu-ctr:`
## EU Clinical Trials Regulation

**Jurisdiction:** European Union (EU)
**Frameworks addressed:** Regulation (EU) No 536/2014 on Clinical Trials (CTR),
applicable from 31 January 2022. Read with GDPR, EDPB Opinion 3/2019, and EMA
CTIS implementation materials.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

The CTR governs clinical trial conduct, consent, and CTIS reporting. CTR informed
consent under Article 29 is a clinical trial participation and ethics requirement.
It is not the same as the GDPR lawful basis for processing personal data. EDPB
Opinion 3/2019 expressly distinguishes CTR informed consent from GDPR Articles 6
and 9 legal basis analysis. PCT tokens for clinical trial data must address both
the CTR clinical obligations and the applicable GDPR processing basis separately.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-eu-ctr:trial_id` | string | CONDITIONAL | Required where data is from an EU clinical trial. The EudraCT number or CTIS trial identification number. |
| `x-eu-ctr:gdpr_lawful_basis_ref` | string (URI) | REQUIRED | Reference to the GDPR Article 6 lawful basis and, where applicable, the Article 9 condition relied on for processing trial personal data. Note: CTR Article 29 informed consent is a separate clinical ethics requirement and is not itself a GDPR lawful basis. |
| `x-eu-ctr:ctis_submission_status` | enum | OPTIONAL | The CTIS submission status for this trial. Permitted values: `not_submitted`, `application_submitted`, `authorised`, `summary_results_submitted`, `lay_summary_submitted`. |
| `x-eu-ctr:low_intervention_trial_flag` | boolean | OPTIONAL | Set to `true` where the trial is a low-intervention clinical trial under CTR Article 2(3). |
| `x-eu-ctr:informed_consent_flag` | boolean | CONDITIONAL | Required for all processing of clinical trial participant data. `true` indicates free, informed, and specific CTR-compliant consent under Article 29 and applicable ICH GCP guidelines. Note: this is clinical ethics consent, not GDPR lawful basis. |
| `x-eu-ctr:participant_category` | array of enum | OPTIONAL | The participant category under applicable CTR safeguards provisions. Permitted values: `adult_capable`, `minor`, `incapacitated_subject`, `pregnant_subject`, `breastfeeding_subject`, `emergency_subject`. |
| `x-eu-ctr:sponsor_id` | string (URI) | OPTIONAL | Identifier for the clinical trial sponsor as registered in CTIS. |
| `x-eu-ctr:results_publication_flag` | boolean | OPTIONAL | Set to `true` where data is within scope of CTR results publication obligations under Article 37. Summary results and a layperson summary are due within 12 months of trial completion (6 months for paediatric trials). |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- `gdpr_lawful_basis_ref` added: CTR consent and GDPR lawful basis are separate requirements per EDPB Opinion 3/2019.
- `ctis_submission_status` added: CTIS filing is a central compliance obligation since CTR became applicable January 2022.
- `informed_consent_flag` description updated to clarify it is clinical ethics consent, not GDPR lawful basis.
- `vulnerable_population_flag` replaced by `participant_category` array with correct CTR references.
- `trial_phase` note added: conventional phases are industry/clinical categories, not CTR legal classifications.
- `cross_border_transfer_basis` removed: cross-border transfers are governed by GDPR Chapter V, not a separate CTR regime.

---

### Citations

- Regulation (EU) No 536/2014, Articles 2, 29, 37
- EDPB Opinion 3/2019 on the interplay between CTR and GDPR
- EMA CTIS materials on trial documents and results

---

*This namespace is registered and maintained by DPG Labs / The Data Privacy Group.*
