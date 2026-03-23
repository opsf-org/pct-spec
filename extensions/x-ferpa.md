# Namespace: `x-ferpa:`
## Family Educational Rights and Privacy Act (United States)

**Jurisdiction:** United States (US)
**Frameworks addressed:** Family Educational Rights and Privacy Act 1974
(20 U.S.C. §1232g); implementing regulations at 34 CFR Part 99. Administered
by the Student Privacy Policy Office (SPPO), US Department of Education.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-ferpa:education_record_flag` | boolean | CONDITIONAL | Required where data constitutes education records under 34 CFR §99.3. Note: several categories are excluded including sole-possession records, law enforcement unit records, certain employment records, treatment records, and post-attendance alumni records. |
| `x-ferpa:education_record_exclusion` | enum | OPTIONAL | Where data falls within an excluded category. Permitted values: `none`, `sole_possession`, `law_enforcement_unit`, `employment_record`, `treatment_record`, `alumni_record`. |
| `x-ferpa:eligible_student_flag` | boolean | OPTIONAL | Set to `true` where the data subject is an eligible student (18 or over, or attending post-secondary institution) who holds their own FERPA rights. |
| `x-ferpa:disclosure_basis` | enum | CONDITIONAL | Required where education records are disclosed to a third party. Permitted values: `consent`, `school_official`, `transfer_institution`, `financial_aid`, `accrediting_organisation`, `judicial_order`, `health_safety_emergency`, `directory_information`, `research_exception`, `audit_evaluation`, `dependent_student_parent`, `other_34_cfr_99_31`. |
| `x-ferpa:directory_information_flag` | boolean | OPTIONAL | Set to `true` where data is designated as directory information under 34 CFR §99.37 and annual notice has been provided to students including types of directory information, right to refuse, and response period. |
| `x-ferpa:opt_out_flag` | boolean | CONDITIONAL | Required when `directory_information_flag` is `true`. `true` indicates the student has opted out of disclosure of directory information. Disclosure must be blocked where `true`. |
| `x-ferpa:annual_notice_provided_flag` | boolean | OPTIONAL | Set to `true` where the institution has provided the FERPA annual notice required under 34 CFR §99.7. |
| `x-ferpa:record_of_disclosure_required_flag` | boolean | OPTIONAL | Set to `true` where the institution must maintain a record of requests for and disclosures of personally identifiable information under 34 CFR §99.32, subject to applicable exceptions. |

### Revision notes
- `education_record_exclusion` added reflecting 34 CFR §99.3 excluded categories.
- `annual_notice_provided_flag` added.
- `record_of_disclosure_required_flag` added reflecting 34 CFR §99.32.
- Enforcement body updated to Student Privacy Policy Office (SPPO), not FPCO.
- `disclosure_basis` enum expanded to include dependent student parent disclosure.

*This namespace is registered and maintained by DPG Labs / The Data Privacy Group.*
