# Namespace: `x-eprivacy:`
## EU ePrivacy Directive

**Jurisdiction:** European Union
**Frameworks addressed:** Directive 2002/58/EC on Privacy and Electronic
Communications as amended by Directive 2009/136/EC, implemented through national
law in EU Member States. Note: the proposed ePrivacy Regulation (2017/0003/COD)
was withdrawn by the European Commission and recorded as withdrawn in the EUR-Lex
procedure file. The Directive remains the operative EU framework.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

---

### Overview

The EU ePrivacy Directive regulates the processing of personal data in electronic
communications, covering confidentiality of communications, traffic and location
data, cookies and similar tracking technologies, and unsolicited communications.
Implementation varies significantly across EU Member States. Note: the proposed
ePrivacy Regulation has been withdrawn and is not forthcoming. The core x-pecr:
namespace in the PCT v0.1 specification addresses UK PECR obligations.

---

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-eprivacy:national_implementation` | string (ISO 3166-1 alpha-2) | REQUIRED | The EU member state whose national implementation applies. National implementations vary significantly on consent requirements, exemptions, and enforcement. This field is required whenever any other x-eprivacy: field is used. |
| `x-eprivacy:article_5_3_legal_basis` | enum | CONDITIONAL | Required where tracking technologies are deployed. The Article 5(3) basis relied on. Permitted values: `consent`, `strictly_necessary_for_requested_service`, `transmission_only`, `other_member_state_exemption`. |
| `x-eprivacy:cookie_consent_ref` | string (URI) | OPTIONAL | Reference to the consent management platform record evidencing cookie consent. |
| `x-eprivacy:subscriber_type` | enum | OPTIONAL | The subscriber category relevant to Article 13 direct marketing rules. Permitted values: `natural_person`, `legal_person`. Note: Article 13 rules differ across categories and Member State implementations. |
| `x-eprivacy:traffic_data_flag` | boolean | OPTIONAL | Set to `true` where data constitutes traffic data governed by Article 6. Traffic data must be erased or anonymised when no longer needed for transmission except for limited billing purposes. |
| `x-eprivacy:location_data_flag` | boolean | OPTIONAL | Set to `true` where data constitutes location data other than traffic data governed by Article 9. Location data requires anonymisation or consent to the extent and for the duration necessary for a value-added service. |
| `x-eprivacy:direct_marketing_consent_flag` | boolean | OPTIONAL | Set to `true` where consent has been obtained for electronic direct marketing under Article 13. Note: Article 13(2) customer-relationship exemption may apply for natural persons. |
| `x-eprivacy:soft_opt_in_flag` | boolean | OPTIONAL | Set to `true` where the Article 13(2) customer-relationship exemption applies, permitting direct marketing to existing customers for similar products where opt-out was provided at collection and is provided at each subsequent communication. |
| `x-eprivacy:member_state_rule_ref` | string (URI) | OPTIONAL | Reference to the applicable national implementation instrument or regulator guidance. |

---

### Revision notes (from ai_reviewed pass, 2026-03-20)

- **Critical correction:** ePrivacy Regulation (2017/0003/COD) withdrawn — all references to it as a forthcoming replacement removed.
- `national_implementation` promoted to REQUIRED field: Member State variation is material and a verifier cannot reliably interpret x-eprivacy: claims without it.
- `article_5_3_legal_basis` added replacing `cookie_consent_flag` to reflect the actual Article 5(3) route rather than a binary consent status.
- `subscriber_type` added reflecting the Article 13 distinction between natural and legal persons.
- `member_state_rule_ref` added for national instrument reference.
- Traffic and location data descriptions updated to reflect Articles 6 and 9 structure.

---

### Citations

- Directive 2002/58/EC, consolidated text, especially Articles 5(3), 6, 9, 13
- EUR-Lex procedure file 2017/0003/COD showing "Proposal withdrawn"

---

*This namespace is registered and maintained by OPSF (Open Privacy Standards Foundation).
Contact registry@pct.opsf.org for queries.*
