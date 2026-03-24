# Namespace: `x-direct-marketing:`
## Direct Marketing Data Obligations

**Jurisdiction:** Multi-jurisdictional (jurisdiction_variant required)
**Frameworks addressed:** GDPR Article 21(2) objection right; UK PECR (in core
x-pecr: namespace); US CAN-SPAM Act 2003; US TCPA (47 USC Section 227) and FCC
rules; Canada CASL; Australia Spam Act 2003.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-direct-marketing:jurisdiction_variant` | enum | REQUIRED | The applicable direct marketing regime. Permitted values: `gdpr`, `uk_pecr`, `us_can_spam`, `us_tcpa`, `canada_casl`, `australia_spam_act`, `other`. |
| `x-direct-marketing:legal_model` | enum | OPTIONAL | The consent model under the applicable regime. Permitted values: `opt_in`, `opt_out`, `objection_right`, `mixed_channel_specific`. Note: GDPR Article 21(2) is an objection right; CAN-SPAM is primarily opt-out for commercial email; CASL is opt-in; TCPA requires prior express written consent for autodialled/prerecorded telemarketing calls. |
| `x-direct-marketing:channel` | array of enum | CONDITIONAL | Required where data is processed for direct marketing. Permitted values: `email`, `sms`, `telephone_automated`, `telephone_live`, `post`, `push_notification`, `in_app`, `social_media`. |
| `x-direct-marketing:opt_out_flag` | boolean | OPTIONAL | Set to `true` where the data subject has exercised their right to object to direct marketing under GDPR Article 21(2) or equivalent opt-out/unsubscribe rights. Processing for direct marketing must cease. Note: GDPR Article 21(2) is an absolute objection right; CAN-SPAM and similar regimes create unsubscribe obligations. These are legally distinct mechanisms. |
| `x-direct-marketing:suppression_list_checked_flag` | boolean | OPTIONAL | Set to `true` where applicable suppression lists or do-not-call registries have been checked. Note: CAN-SPAM does not operate through a national suppression registry; TCPA interacts with Do Not Call frameworks. |
| `x-direct-marketing:sender_identification_flag` | boolean | OPTIONAL | Set to `true` where sender identification duties under CAN-SPAM, CASL, and Australia Spam Act have been satisfied. |
| `x-direct-marketing:casl_consent_type` | enum | CONDITIONAL | Required when `jurisdiction_variant` is `canada_casl`. Permitted values: `express`, `implied`, `none`. Note: CASL recognises both express and implied consent in defined circumstances. |
| `x-direct-marketing:us_telemarketing_consent_type` | enum | CONDITIONAL | Required when `jurisdiction_variant` is `us_tcpa` and channel includes telephone. Permitted values: `prior_express_consent`, `prior_express_written_consent`, `not_required_for_this_call_type`, `unknown`. Note: prior express written consent requirement depends on call type, technology, and whether the communication is telemarketing. |
| `x-direct-marketing:can_spam_compliant_flag` | boolean | OPTIONAL | Set to `true` where commercial email to US recipients complies with CAN-SPAM requirements including accurate headers, valid physical address, and clear opt-out mechanism. Note: CAN-SPAM is primarily an opt-out compliance regime for commercial email, not an opt-in consent law. |
| `x-direct-marketing:australia_spam_act_consent_flag` | boolean | OPTIONAL | Set to `true` where consent has been obtained for commercial electronic messages to Australian recipients under the Spam Act 2003. Messages must also include sender identification and a functional unsubscribe facility. |

### Revision notes
- `jurisdiction_variant` added as REQUIRED field: GDPR objection right, CAN-SPAM opt-out, CASL opt-in, and TCPA written consent cannot be represented by a single shared enum.
- `legal_model` added to capture the fundamental differences between regimes.
- `casl_consent_type` enum added: CASL recognises implied consent in defined circumstances.
- `us_telemarketing_consent_type` enum added: TCPA requirements vary by call type.
- `consent_basis` (single cross-jurisdiction enum) removed: replaced by jurisdiction-specific fields.
- `sender_identification_flag` added covering CAN-SPAM, CASL, and Spam Act identification duties.

*This namespace is registered and maintained by OPSF (Open Privacy Standards Foundation).*
