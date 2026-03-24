# Namespace: `x-mifid2:`
## Markets in Financial Instruments Directive II

**Jurisdiction:** European Union and United Kingdom
**Frameworks addressed:** Directive 2014/65/EU (MiFID II); Regulation (EU) No
600/2014 (MiFIR); UK retained-law implementation through FSMA and FCA rules.
**Registration tier:** Open
**Review status:** ai_reviewed
**Review date:** 2026-03-20

### Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `x-mifid2:instrument_data_flag` | boolean | OPTIONAL | Set to `true` where data relates to financial instrument transactions subject to MiFID II/MiFIR transaction reporting obligations under Article 26 MiFIR. |
| `x-mifid2:communications_recording_flag` | boolean | OPTIONAL | Set to `true` where data constitutes a recorded telephone conversation or electronic communication under MiFID II Article 16(7). Note: Article 16(7) covers communications intended to result in a transaction, even if no transaction is ultimately concluded. |
| `x-mifid2:intended_to_result_in_transaction_flag` | boolean | OPTIONAL | Set to `true` where a communication falls within Article 16(7) because it was intended to result in a transaction. |
| `x-mifid2:retention_period` | string (ISO 8601 duration) | OPTIONAL | The applicable MiFID II retention period. Standard minimum: `P5Y`. Extended on competent authority request: up to `P7Y`. Note: five years is the standard minimum under Article 16(7); seven years applies on specific competent authority request. |
| `x-mifid2:transaction_report_flag` | boolean | OPTIONAL | Set to `true` where data has been or is required to be reported under MiFIR Article 26 transaction reporting obligations. |
| `x-mifid2:best_execution_flag` | boolean | OPTIONAL | Set to `true` where data is required for best execution monitoring and reporting under MiFID II Article 27. |
| `x-mifid2:order_record_flag` | boolean | OPTIONAL | Set to `true` where data forms part of required order or decision records under MiFID II recordkeeping obligations. |
| `x-mifid2:algorithmic_trading_record_flag` | boolean | OPTIONAL | Set to `true` where data falls within algorithmic trading governance and recordkeeping requirements. |
| `x-mifid2:client_category` | enum | OPTIONAL | MiFID II client categorisation. Permitted values: `retail_client`, `professional_client`, `eligible_counterparty`. Note: categorisation drives applicable protection regime and can change through elective opt-up or opt-down processes. |

### Revision notes
- `communications_recording_flag` description updated: Article 16(7) covers communications intended to result in a transaction.
- `intended_to_result_in_transaction_flag` added.
- `retention_period` description clarified: five years standard; seven years on competent authority request.
- `order_record_flag` and `algorithmic_trading_record_flag` added.
- `client_category` note updated on opt-up/opt-down processes.

*This namespace is registered and maintained by OPSF (Open Privacy Standards Foundation).*
