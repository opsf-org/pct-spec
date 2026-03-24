# Privacy Claims Token (PCT) — Open Specification

**Version 0.2 · Draft for Public Comment**

March 2026

**Specification authors:** OPSF (Open Privacy Standards Foundation) · [opsf.org](https://opsf.org)

---

**Licence**

This specification is released under the Creative Commons Attribution 4.0 International Licence (CC BY 4.0). Anyone may implement, extend, or build upon it freely, provided attribution is given to the original authors.

---

## Abstract

The Privacy Claims Token (PCT) specification defines an open, portable format for expressing, signing, and verifying the data obligations that govern how a dataset may be lawfully processed, transferred, or used. A PCT is a structured, cryptographically signed object — inspired by the JSON Web Token (JWT) model — that travels with data through systems and pipelines, enabling any participating system to verify compliance before any action is permitted.

This specification addresses the core gap in modern data governance: obligations are documented in policy platforms and systems of record, but are not consistently enforced at the point of execution. PCT bridges that gap by making obligations machine-readable, portable, tamper-evident, and verifiable in real time.

Version 0.2 is a draft for public comment. Implementations, corrections, and extensions are welcomed from any party. The specification is designed to be jurisdiction-neutral and extensible to all current and future privacy, AI governance, and data sovereignty regulatory frameworks.

---

## Table of Contents

1. [Introduction](#1-introduction)
   - 1.1 [The problem this specification addresses](#11-the-problem-this-specification-addresses)
   - 1.2 [The core concept](#12-the-core-concept)
   - 1.3 [Design principles](#13-design-principles)
2. [Terminology and Definitions](#2-terminology-and-definitions)
3. [Scope and Applicability](#3-scope-and-applicability)
   - 3.1 [What PCT governs](#31-what-pct-governs)
   - 3.2 [What PCT does not govern](#32-what-pct-does-not-govern)
   - 3.3 [Regulatory frameworks addressed](#33-regulatory-frameworks-addressed)
4. [The PCT Lifecycle](#4-the-pct-lifecycle)
   - 4.1 [Overview](#41-overview)
   - 4.2 [State 1 — Issuance](#42-state-1--issuance)
   - 4.3 [State 2 — Attachment](#43-state-2--attachment)
   - 4.4 [State 3 — Transmission](#44-state-3--transmission)
   - 4.5 [State 4 — Verification](#45-state-4--verification)
   - 4.6 [State 5 — Decision](#46-state-5--decision)
   - 4.7 [State 6 — Audit](#47-state-6--audit)
5. [Claims Schema](#5-claims-schema)
   - 5.1 [Structure overview](#51-structure-overview)
   - 5.2 [Header fields](#52-header-fields)
   - 5.3 [Core payload fields](#53-core-payload-fields)
   - 5.4 [The lawful_basis object](#54-the-lawful_basis-object)
   - 5.5 [The jurisdiction_rules object](#55-the-jurisdiction_rules-object)
   - 5.6 [The transfer_restrictions object](#56-the-transfer_restrictions-object)
   - 5.7 [Extension namespaces](#57-extension-namespaces)
   - 5.8 [Data binding and integrity verification](#58-data-binding-and-integrity-verification)
   - 5.9 [The ai_context object](#59-the-ai_context-object)
6. [Signing and Verification](#6-signing-and-verification)
   - 6.1 [Signing requirements](#61-signing-requirements)
   - 6.2 [Signature construction](#62-signature-construction)
   - 6.3 [Verification procedure](#63-verification-procedure)
7. [Enforcement API](#7-enforcement-api)
   - 7.1 [Overview](#71-overview)
   - 7.2 [Verification request](#72-verification-request)
   - 7.3 [Verification response](#73-verification-response)
8. [Audit Records](#8-audit-records)
   - 8.1 [Requirements](#81-requirements)
   - 8.2 [Audit record schema](#82-audit-record-schema)
9. [Example Tokens and Scenarios](#9-example-tokens-and-scenarios)
   - 9.1 [Scenario 1 — Permitted: UK clinical data, UK processing, valid consent](#91-scenario-1--permitted-uk-clinical-data-uk-processing-valid-consent)
   - 9.2 [Scenario 2 — Blocked: UK clinical data routed to US model](#92-scenario-2--blocked-uk-clinical-data-routed-to-us-model)
   - 9.3 [Scenario 3 — Blocked: purpose not in claims](#93-scenario-3--blocked-purpose-not-in-claims)
   - 9.4 [Scenario 4 — Clinical trial data, multiple simultaneous failures](#94-scenario-4--clinical-trial-data-multiple-simultaneous-failures)
10. [Conformance](#10-conformance)
    - 10.1 [Conformance levels](#101-conformance-levels)
    - 10.2 [Conformance declaration](#102-conformance-declaration)
    - 10.3 [Interoperability](#103-interoperability)
11. [Security Considerations](#11-security-considerations)
    - 11.1 [Claim accuracy](#111-claim-accuracy)
    - 11.2 [Key compromise](#112-key-compromise)
    - 11.3 [Replay attacks](#113-replay-attacks)
    - 11.4 [Token detachment and data substitution](#114-token-detachment-and-data-substitution)
    - 11.5 [Consent withdrawal](#115-consent-withdrawal)
12. [The PCT Namespace Registry](#12-the-pct-namespace-registry)
    - 12.1 [Purpose and authority](#121-purpose-and-authority)
    - 12.2 [Namespace prefix format](#122-namespace-prefix-format)
    - 12.3 [Registration tiers](#123-registration-tiers)
    - 12.4 [Registration requirements](#124-registration-requirements)
    - 12.5 [Registration process](#125-registration-process)
    - 12.6 [Registrant obligations](#126-registrant-obligations)
    - 12.7 [Dispute resolution](#127-dispute-resolution)
    - 12.8 [The registry record format](#128-the-registry-record-format)
13. [Extension Namespace Promotion to Core](#13-extension-namespace-promotion-to-core)
    - 13.1 [Purpose](#131-purpose)
    - 13.2 [Promotion criteria](#132-promotion-criteria)
    - 13.3 [Promotion process](#133-promotion-process)
    - 13.4 [Deprecation of promoted extension fields](#134-deprecation-of-promoted-extension-fields)
    - 13.5 [Fields that will not be promoted](#135-fields-that-will-not-be-promoted)
- [Appendix A — Full PCT JSON Schema](#appendix-a--full-pct-json-schema)
- [Appendix B — Controlled Purpose Vocabulary](#appendix-b--controlled-purpose-vocabulary)
- [Appendix C — Version History](#appendix-c--version-history)

---

## 1. Introduction

### 1.1 The problem this specification addresses

Organisations operating across modern digital environments — multi-cloud infrastructure, SaaS platforms, AI pipelines, and cross-border data flows — face a structural compliance problem. Privacy and data governance obligations are documented, but not operationalised. The gap between what an organisation's policies say should happen and what its systems actually do when data moves is where regulatory risk, legal liability, and AI deployment failures accumulate.

Existing tools address parts of this problem. Privacy management platforms such as OneTrust, Transcend, and TrustArc serve as systems of record — they document lawful bases, maintain records of processing activities, manage consent, and track regulatory obligations. Sovereign cloud infrastructure from hyperscalers provides data residency guarantees at the infrastructure level. However, none of these tools enforce obligations at runtime, at the moment data is actually used.

The result is that compliance, for most organisations, exists in documents and dashboards — not in the execution path. When an AI model is called, when data crosses a jurisdiction, when a dataset is used for a purpose that was never consented to: there is no consistent, automatic mechanism to intercept, verify, and either permit or block that action.

> **The runtime gap:** PCT is designed specifically to close the gap between documented obligations and enforced obligations. It does not replace policy platforms or infrastructure controls — it makes them actionable at the moment of execution.

### 1.2 The core concept

The Privacy Claims Token takes its conceptual model from JSON Web Tokens (JWTs), the standard mechanism for portable, signed identity claims in authentication systems. A JWT carries structured claims about a user — who they are, what they are permitted to do — and those claims travel with the user's session. Any system that receives the token can verify its authenticity and act on its claims without calling back to a central authority.

PCT applies the same model to data rather than users. When a dataset is created, ingested, or enters a processing pipeline, a PCT is issued that encodes the obligations attached to that data: its jurisdiction of origin, the purposes for which it may be used, the lawful basis under which it was collected, consent status, transfer restrictions, and so forth. Those claims are cryptographically signed. Wherever the data travels, the PCT travels with it. Before any action — a processing operation, an AI model call, a cross-border transfer — the PCT is verified. If the claimed obligations permit the action, it proceeds. If not, it is blocked. In either case, a tamper-evident audit record is generated automatically.

This model produces three outcomes that current approaches cannot deliver simultaneously: **real-time enforcement**, **portable proof**, and **automatic audit**.

### 1.3 Design principles

This specification is governed by the following principles, which take precedence in cases of ambiguity or tension:

- **Jurisdiction-neutral.** The claims model must be capable of expressing obligations arising under any privacy, AI governance, or data sovereignty regulatory framework, present or future. No single jurisdiction's requirements are privileged in the base schema.

- **Extensible by design.** The core schema defines a mandatory minimum. All claims fields support extension namespaces, allowing implementations to express regulatory requirements not anticipated at the time of this specification.

- **Open and implementation-agnostic.** This specification describes what a PCT must contain and how it must behave. It does not prescribe a specific technology stack, programming language, or vendor implementation.

- **Cryptographically verifiable.** Claims must be signed in a manner that allows any receiving system to verify authenticity and detect tampering without contacting the issuing system.

- **Human-readable.** While PCT is designed for machine processing, the claims vocabulary is drawn from established legal and regulatory terminology so that the token is comprehensible to lawyers, DPOs, and compliance professionals without specialist technical knowledge.

- **Audit-first.** Every verification event must produce a structured, tamper-evident audit record. Proof of compliance is not optional — it is a first-class output of the PCT lifecycle.

---

## 2. Terminology and Definitions

The following terms are used throughout this specification. Where a term has an established meaning under a referenced regulatory framework, the PCT definition is consistent with that meaning unless otherwise stated.

| Term | Definition |
|------|------------|
| **PCT** | Privacy Claims Token. A structured, signed object encoding the data obligations attached to a specific dataset or data flow. |
| **Claim** | A discrete, structured assertion within a PCT about a specific obligation or constraint governing the data. Analogous to a claim in the JWT specification (RFC 7519). |
| **Issuer** | The entity responsible for generating and signing a PCT. The issuer attests to the accuracy of the claims at the time of issuance. |
| **Subject** | The dataset, data flow, or processing operation to which the PCT is attached. |
| **Verifier** | Any system, service, or component that receives a PCT and evaluates its claims before permitting or blocking an action. |
| **Enforcement point** | A system component at which PCT verification is performed and an allow/block decision is made. Equivalent to a policy enforcement point (PEP) in access control architecture. |
| **Lawful basis** | The legal ground under which personal data may be processed. Under GDPR and equivalent frameworks, examples include consent, contract, legal obligation, vital interests, public task, and legitimate interests. |
| **Purpose limitation** | The principle that data may only be used for the specific purpose(s) for which it was collected or subsequently legitimately specified. |
| **Data obligation** | Any legal, regulatory, or contractual requirement that constrains how data may be collected, stored, processed, transferred, or used. |
| **Transfer restriction** | A constraint on the movement of data across a jurisdictional boundary, arising from regulatory requirements such as GDPR Chapter V, HIPAA cross-border provisions, or national data localisation laws. |
| **Audit record** | A structured, tamper-evident log entry generated at each PCT verification event, recording the decision, the claims evaluated, and the timestamp. |
| **Signature** | A cryptographic mechanism — in this specification, an HMAC-SHA256 or RS256 signature — that allows a verifier to confirm that a PCT was issued by a trusted party and has not been modified since issuance. |
| **Extension namespace** | A convention for adding non-standard claims to a PCT without conflicting with the core schema, using a prefixed key format (e.g. `x-hipaa:minimum_necessary`). |
| **PCT lifecycle** | The sequence of states through which a PCT passes: issuance, attachment, transmission, verification, decision, and audit. |

---

## 3. Scope and Applicability

### 3.1 What PCT governs

This specification governs the format, content, signing, verification, and audit of Privacy Claims Tokens. It applies to any processing operation, data transfer, or AI model interaction where a participating system chooses to implement PCT-based enforcement.

PCT is applicable to, but not limited to, the following scenarios:

- Personal data processing operations subject to GDPR, UK GDPR, or equivalent frameworks
- Cross-border data transfers subject to adequacy decisions, standard contractual clauses, or equivalent transfer mechanisms
- AI model interactions where personal or sensitive data forms part of the input, context, or training pipeline
- Clinical data processing subject to HIPAA, EU Clinical Trials Regulation, or equivalent frameworks
- Financial data processing subject to DORA, FCA requirements, or equivalent frameworks
- Electronic communications processing subject to PECR or the EU ePrivacy framework
- Any data processing subject to national data localisation or sovereignty requirements
- Automated decision-making and profiling operations subject to Article 22 GDPR or equivalent provisions

### 3.2 What PCT does not govern

This specification does not govern:

- The content of the underlying policies, consents, or lawful bases that a PCT records. Those are the responsibility of the issuing organisation and its legal counsel.
- The technical architecture of systems that implement PCT verification. Implementers are free to use any technology stack consistent with the requirements of Section 6.
- Liability arising from incorrect claims within a PCT. The issuer bears responsibility for the accuracy of claims at the time of issuance.
- The format or content of privacy notices, consent records, or records of processing activities (RoPAs), which remain governed by applicable regulatory frameworks.

### 3.3 Regulatory frameworks addressed

Version 0.1 of this specification explicitly addresses the claims requirements arising from the following frameworks. The extension namespace mechanism (Section 5.7) supports any framework not listed here.

| Framework | Key obligations addressed | Relevant PCT fields |
|-----------|--------------------------|---------------------|
| **GDPR / UK GDPR** | Lawful basis, purpose limitation, data minimisation, consent, transfer restrictions, DPA notification obligations, Article 22 automated decisions | `lawful_basis`, `allowed_purposes`, `consent_status`, `transfer_restrictions`, `data_categories`, `automated_decision_flag` |
| **EU AI Act** | High-risk AI system obligations, transparency requirements, human oversight, prohibited use cases, training data provenance | `ai_context.risk_tier`, `ai_context.human_oversight`, `ai_context.prohibited_use_check`, `ai_context.training_data_flag` |
| **HIPAA** | Minimum necessary standard, permitted disclosures, PHI handling, Business Associate obligations, breach notification triggers | `x-hipaa:minimum_necessary`, `x-hipaa:permitted_disclosure`, `x-hipaa:phi_flag`, `x-hipaa:baa_in_place` |
| **DORA** | ICT risk management, operational resilience, third-party risk, incident reporting obligations for financial entities | `x-dora:ict_risk_classification`, `x-dora:third_party_flag`, `x-dora:incident_trigger` |
| **DUAA (Data Use and Access Act)** | Data access conditions, trusted research environment requirements, data intermediary rules | `x-duaa:access_condition`, `x-duaa:trusted_research_env` |
| **PECR / UK PECR** | Cookie and tracking consent, electronic communications data, direct marketing permissions | `x-pecr:tracking_consent`, `x-pecr:comms_data_flag`, `x-pecr:marketing_permission` |
| **Other frameworks** | Any national or sectoral framework may be addressed via extension namespaces using the `x-{framework}:` prefix convention | `x-{framework}:{field}` |

---

## 4. The PCT Lifecycle

### 4.1 Overview

A PCT passes through six defined states from creation to final audit record. Each state is described below. Implementations must support all six states; they may implement additional intermediate states provided these are documented.

### 4.2 State 1 — Issuance

A PCT is issued by an authorised issuer at the point a dataset is created, ingested, or enters a processing environment where PCT enforcement is active. The issuer constructs the claims object in accordance with Section 5, signs it in accordance with Section 6, and records the issuance event.

The issuer is responsible for:

- Accurately encoding all applicable obligations as claims
- Selecting the correct signature algorithm and key
- Setting the `issued_at` and `expires_at` timestamps
- Generating a globally unique `pct_id`

> **Issuer responsibility:** The PCT is not a legal guarantee. It is a machine-readable attestation by the issuer that, to the best of the issuer's knowledge at the time of issuance, the claims accurately reflect the obligations attached to the data. Issuers should have governance processes in place to ensure accuracy.

### 4.3 State 2 — Attachment

The issued PCT is attached to the data subject. Attachment may be implemented as:

- A header field in an API request carrying the data
- A sidecar metadata file travelling alongside a dataset in a pipeline
- A field within a data envelope or wrapper
- A reference in a data catalogue or metadata store, retrieved at verification time

Implementations must document their attachment mechanism. The attachment must be durable — the PCT must remain associated with the data throughout its journey through the system.

### 4.4 State 3 — Transmission

The PCT travels with the data. Transmission may occur across network boundaries, jurisdictions, cloud environments, or AI pipeline stages. During transmission, the PCT must not be modified. Any system that modifies a PCT must re-sign it as a new issuance and record the re-issuance event, including a reference to the originating PCT by its `pct_id`.

### 4.5 State 4 — Verification

At each enforcement point, before any action is permitted, the receiving system must verify the PCT. Verification comprises the following steps, which must be performed in order:

1. **Signature verification.** Confirm that the PCT signature is valid and was produced by a trusted issuer key. If signature verification fails, the action must be blocked regardless of claim content.
2. **Expiry check.** Confirm that the current timestamp is within the `valid_from` / `expires_at` window. An expired PCT must be treated as invalid.
3. **Purpose check.** Confirm that the `requested_purpose` of the action is present in the `allowed_purposes` claim. If not, block.
4. **Jurisdiction check.** Confirm that the action's `processing_region` is consistent with the `jurisdiction_rules` claim. If not, block.
5. **Consent check.** Where the `lawful_basis` is consent, confirm that `consent_status` is true and that the consent scope covers the requested purpose. If not, block.
6. **Data category check.** Confirm that any special category data indicators (`data_categories`) are consistent with the additional safeguards required under applicable law for the requested action. If not, block.
7. **Transfer restriction check.** Where the action involves cross-border data movement, confirm that the destination is listed in `permitted_destinations` or that an applicable transfer mechanism is recorded. If not, block.
8. **Extension claims check.** Evaluate any extension namespace claims applicable to the action context. Block if any extension claim check fails.

A single failed check is sufficient to block the action. Partial passes are not permitted.

### 4.6 State 5 — Decision

Following verification, the enforcement point issues a decision: `ALLOW` or `BLOCK`. The decision, together with the specific checks that produced it, is recorded in the audit record (State 6). The decision is communicated to the requesting system via the enforcement API (see Section 7).

In addition to `ALLOW` and `BLOCK`, an enforcement point may issue a `TRANSFORM` decision, indicating that the action may proceed subject to a data transformation — such as redaction, pseudonymisation, or tokenisation — that brings it within the permitted claims. `TRANSFORM` decisions must record both the original request and the transformation applied.

### 4.7 State 6 — Audit

Every verification event must produce an audit record, regardless of the decision outcome. The audit record must be generated at the time of the decision, must be tamper-evident (see Section 8), and must be retained for a period consistent with applicable regulatory requirements.

The minimum required fields of an audit record are defined in Section 8.

---

## 5. Claims Schema

### 5.1 Structure overview

A PCT consists of three components, following the JWT convention:

- **Header.** Metadata about the token itself: the signing algorithm, key identifier, and PCT specification version.
- **Payload.** The structured claims object encoding the data obligations.
- **Signature.** The cryptographic signature over the header and payload.

When serialised for transmission, the PCT must be encoded as a Base64URL-encoded string of the form `header.payload.signature`, consistent with RFC 7519 compact serialisation. Human-readable JSON representations may be used for documentation, debugging, and audit log storage.

### 5.2 Header fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `alg` | string | **REQUIRED** | Signing algorithm. Must be `RS256` (RSA + SHA-256) or `HS256` (HMAC + SHA-256). RS256 is recommended for multi-party deployments. |
| `kid` | string | **REQUIRED** | Key identifier. A reference to the signing key used, enabling key rotation without token invalidation. |
| `typ` | string | **REQUIRED** | Token type. Must be the literal string `PCT`. |
| `pct_version` | string | **REQUIRED** | The version of this specification the token conforms to. For this version, must be `0.1`. |

### 5.3 Core payload fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `pct_id` | string (UUID v4) | **REQUIRED** | Globally unique identifier for this PCT instance. Must be a UUID v4. |
| `issued_at` | integer (Unix epoch) | **REQUIRED** | Timestamp at which the PCT was issued, in seconds since Unix epoch (UTC). |
| `valid_from` | integer (Unix epoch) | **REQUIRED** | Timestamp from which the PCT is valid. May equal `issued_at`. |
| `expires_at` | integer (Unix epoch) | **REQUIRED** | Timestamp after which the PCT is no longer valid. Verifiers must reject expired PCTs. |
| `issuer` | string (URI) | **REQUIRED** | URI identifying the issuing entity. Should be a stable, resolvable identifier. |
| `subject_id` | string | **REQUIRED** | Identifier for the dataset, data flow, or processing subject this PCT is attached to. |
| `subject_type` | enum | **REQUIRED** | Category of subject. Permitted values: `dataset`, `data_flow`, `api_request`, `ai_interaction`, `transfer`. |
| `data_origin` | string (ISO 3166-1 alpha-2) | **REQUIRED** | Two-letter country code of the jurisdiction where the data was originally collected. |
| `data_categories` | array of enum | **REQUIRED** | The categories of data present. Permitted values include: `personal`, `sensitive`, `special_category`, `health`, `financial`, `biometric`, `genetic`, `criminal`, `communications`, `children`, `pseudonymised`, `anonymised`. |
| `lawful_basis` | object | **REQUIRED** | The legal ground(s) for processing. See Section 5.4. |
| `allowed_purposes` | array of string | **REQUIRED** | The purposes for which the data may be used. Values should be drawn from a controlled vocabulary (see Appendix B) or expressed as URIs. |
| `consent_status` | boolean | CONDITIONAL | Required when `lawful_basis` includes consent. True indicates valid, informed, current consent exists. |
| `consent_scope` | array of string | CONDITIONAL | Required when `consent_status` is true. The specific purposes covered by the consent, consistent with `allowed_purposes`. |
| `consent_record_ref` | string (URI) | OPTIONAL | Reference to an external consent record, enabling verification against the system of record. |
| `jurisdiction_rules` | object | **REQUIRED** | Constraints on where the data may be processed. See Section 5.5. |
| `transfer_restrictions` | object | CONDITIONAL | Required when `subject_type` is `transfer` or when cross-border processing is anticipated. See Section 5.6. |
| `retention_limit` | string (ISO 8601 duration) | OPTIONAL | The maximum period for which the data may be retained (e.g. `P2Y` for two years). |
| `automated_decision_flag` | boolean | OPTIONAL | Set to true if the data may be used in automated decision-making subject to Article 22 GDPR or equivalent. |
| `data_hash` | string | **REQUIRED** | Cryptographic hash of the canonical serialised form of the data payload at the time of token issuance. See Section 5.8 for canonicalisation requirements. |
| `hash_algorithm` | enum | **REQUIRED** | Hashing algorithm used to produce `data_hash`. Permitted values: `sha-256`, `sha-384`, `sha-512`. `sha-256` is RECOMMENDED. MD5 and SHA-1 are explicitly prohibited. |
| `hash_scope` | enum | **REQUIRED** | Defines what was hashed. Permitted values: `full_payload` (entire data payload hashed as a single unit), `merkle_root` (Merkle tree hash structure; see Section 5.8.3). |
| `data_format` | string | OPTIONAL | MIME type or format descriptor of the data payload at the time of hashing (e.g. `application/json`, `text/csv`, `application/octet-stream`). Assists verifiers in reproducing the canonical form. |
| `ai_context` | object | CONDITIONAL | Required when `subject_type` is `ai_interaction`. See Section 5.9. |
| `extensions` | object | OPTIONAL | Extension namespace claims. See Section 5.7. |

### 5.4 The lawful_basis object

The `lawful_basis` object must contain at least one basis. Where multiple bases apply, all must be listed.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `bases` | array of enum | **REQUIRED** | The applicable lawful basis or bases. Permitted values: `consent`, `contract`, `legal_obligation`, `vital_interests`, `public_task`, `legitimate_interests`, `not_applicable` (for anonymised data). |
| `legitimate_interests_assessment_ref` | string (URI) | CONDITIONAL | Required when `bases` includes `legitimate_interests`. Reference to the Legitimate Interests Assessment (LIA) on record. |
| `legal_obligation_ref` | string (URI) | CONDITIONAL | Required when `bases` includes `legal_obligation`. Reference to the specific legal instrument creating the obligation. |
| `framework` | string | OPTIONAL | The regulatory framework under which the lawful basis is assessed (e.g. `GDPR`, `UK_GDPR`, `HIPAA`). Where omitted, GDPR is assumed. |

### 5.5 The jurisdiction_rules object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `permitted_regions` | array of string (ISO 3166-1 alpha-2) | **REQUIRED** | Country codes in which processing is permitted. Use `*` to indicate no restriction, though this is discouraged for sensitive data. |
| `restricted_regions` | array of string (ISO 3166-1 alpha-2) | OPTIONAL | Country codes in which processing is explicitly prohibited, overriding any general permission. |
| `residency_required` | boolean | OPTIONAL | If true, data must remain within `permitted_regions` at all times and may not be temporarily processed elsewhere. |
| `sovereignty_framework` | string | OPTIONAL | Reference to a sovereignty or adequacy framework under which processing is permitted (e.g. `GDPR_adequacy`, `UK_adequacy`, `APEC_CBPR`). |

### 5.6 The transfer_restrictions object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `permitted_destinations` | array of string (ISO 3166-1 alpha-2) | **REQUIRED** | Country codes to which transfer is permitted. |
| `transfer_mechanism` | enum | **REQUIRED** | The legal mechanism authorising the transfer. Permitted values: `adequacy_decision`, `standard_contractual_clauses`, `binding_corporate_rules`, `derogation`, `not_required`, `other`. |
| `transfer_mechanism_ref` | string (URI) | OPTIONAL | Reference to the specific instrument (e.g. the executed SCCs) authorising the transfer. |
| `onward_transfer_permitted` | boolean | OPTIONAL | Whether the recipient may further transfer the data to a third party. |

### 5.7 Extension namespaces

Extension claims are added to the `extensions` object using the prefix convention `x-{framework}:{field}`. Extension keys must not conflict with core schema field names. The following extension namespaces are defined in this version:

- **`x-hipaa:`** Claims addressing HIPAA-specific obligations (`minimum_necessary`, `phi_flag`, `permitted_disclosure`, `baa_in_place`).
- **`x-dora:`** Claims addressing DORA-specific obligations (`ict_risk_classification`, `third_party_flag`, `incident_trigger`).
- **`x-duaa:`** Claims addressing UK Data Use and Access Act obligations (`access_condition`, `trusted_research_env`).
- **`x-pecr:`** Claims addressing PECR / ePrivacy obligations (`tracking_consent`, `comms_data_flag`, `marketing_permission`).
- **`x-ai-act:`** Claims addressing EU AI Act obligations (`risk_tier`, `human_oversight_required`, `prohibited_use_check`, `training_data_flag`, `conformity_assessment_ref`).

Any implementer may define additional extension namespaces using the `x-{label}:` prefix. Extension namespaces not defined in this specification must be documented publicly by the defining party. Verifiers encountering unknown extension namespaces must not fail silently — they must either evaluate the extension claim or flag the PCT as requiring human review.

### 5.8 Data binding and integrity verification

#### 5.8.1 Purpose

The data binding mechanism ensures that a PCT token is cryptographically bound to the specific data payload it was issued to govern. A verifier receiving a PCT token and a data payload can confirm:

1. That the data has not been modified since the token was issued
2. That the token has not been detached from its original data and reattached to a different payload
3. That the token's claims apply to the data presented, and no other data

#### 5.8.2 Canonicalisation requirement

To ensure consistent and reproducible hash values across different systems and implementations, the data payload MUST be serialised into a canonical form before hashing. The canonical form is defined as follows:

- **For JSON payloads:** RFC 8785 JSON Canonicalisation Scheme (JCS). All keys MUST be sorted lexicographically. All whitespace outside string values MUST be removed. Unicode characters MUST be encoded consistently per RFC 8785.
- **For binary payloads:** The raw byte sequence as transmitted, with no transformation applied.
- **For structured data in other formats (CSV, XML, etc.):** The implementation MUST document the specific canonicalisation method applied in the `data_format` field and MUST apply it consistently across all issuance and verification operations.

Failure to use a canonical form risks hash verification failures caused by insignificant formatting differences rather than genuine data modification. This would undermine the utility of the binding mechanism and MUST be avoided.

#### 5.8.3 Large dataset handling — Merkle tree hashing

For large datasets where computing a hash of the entire payload at every verification event is computationally impractical, implementations MAY use a Merkle tree hash structure. In this case:

- The data payload is divided into chunks of a consistent, implementation-defined size
- Each chunk is hashed individually using the algorithm specified in `hash_algorithm`
- The hashes are combined into a Merkle tree and the root hash is stored in `data_hash`
- The field `hash_scope` MUST be set to `merkle_root`
- The chunk size and tree construction method MUST be documented in the implementation's conformance statement

Merkle tree hashing allows individual chunks of a large dataset to be verified independently without requiring the entire dataset to be re-hashed, which is particularly valuable in streaming and pipeline processing scenarios.

#### 5.8.4 Token issuance with data binding

When issuing a PCT token with data binding, the issuer MUST:

1. Serialise the data payload into its canonical form as defined in Section 5.8.2
2. Compute the hash of the canonical form using the algorithm specified in `hash_algorithm`
3. Set `data_hash` to the Base64url-encoded hash value
4. Set `hash_algorithm` to the algorithm identifier
5. Set `hash_scope` to `full_payload` or `merkle_root` as appropriate
6. Include all data binding fields in the PCT payload before signing
7. Sign the complete payload including the data binding fields using the signing mechanism defined in Section 6

The data binding fields are part of the signed payload and are therefore protected by the token signature. Any modification to `data_hash`, `hash_algorithm`, or `hash_scope` after signing will cause signature verification to fail.

#### 5.8.5 Verification of data binding

When verifying a PCT token and its associated data payload, the verifier MUST:

1. Verify the token signature as defined in Section 6
2. Extract `data_hash`, `hash_algorithm`, and `hash_scope` from the verified payload
3. Serialise the received data payload into its canonical form using the same method as the issuer
4. Compute the hash of the canonical form using the algorithm identified in `hash_algorithm`
5. Compare the computed hash with the value in `data_hash`
6. If the hashes do not match, the verification MUST fail and the data MUST NOT be processed under the claims in the token
7. If the hashes match, the verifier MAY proceed to evaluate the token's claims

A verification failure at step 6 indicates one of the following conditions:
- The data payload has been modified since the token was issued
- The token has been detached from its original data and presented with a different payload
- The canonical serialisation method used by the verifier differs from that used by the issuer (implementation error)

In all cases, processing MUST be halted and the event MUST be recorded in the audit log as a data integrity failure.

#### 5.8.6 Legitimate data transformation

Some processing operations permitted by a PCT token may materially change the data payload, for example anonymisation, aggregation, pseudonymisation, or format conversion. Such transformations will invalidate the original data binding because the transformed data will produce a different hash.

Where a permitted transformation produces a materially different data payload, the following rules apply:

1. A new PCT token MUST be issued for the transformed payload, with a new `data_hash` computed from the transformed data in its canonical form
2. The new token SHOULD reference the original token's `pct_id` in a `derived_from` field to maintain the audit chain
3. The original token SHOULD be explicitly deprecated by the issuer
4. The transformation event MUST be recorded in the audit log, referencing both the original and new token identifiers

Minor transformations that do not change the logical content of the data, such as re-encoding from JSON to CBOR while preserving all field values, require re-issuance only if the canonical serialisation produces a different byte sequence. Implementations SHOULD test canonical equivalence before determining whether re-issuance is required.

#### 5.8.7 Algorithm selection and deprecation

Implementations MUST use one of the permitted hash algorithms listed in the `hash_algorithm` field definition. The following algorithms are explicitly prohibited:

- **`md5`**: Vulnerable to collision attacks. MUST NOT be used.
- **`sha-1`**: Vulnerable to collision attacks. MUST NOT be used.

The RECOMMENDED algorithm is `sha-256`. Implementations requiring additional collision resistance MAY use `sha-384` or `sha-512`.

The list of permitted algorithms will be reviewed with each major version of the PCT specification. Implementations SHOULD be designed to support algorithm agility, meaning the ability to update the hashing algorithm without requiring a full re-implementation of the data binding mechanism.

### 5.9 The ai_context object

Required when `subject_type` is `ai_interaction`. This object addresses the specific obligations arising when personal or sensitive data is used in connection with an AI model.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `model_id` | string | **REQUIRED** | Identifier for the AI model being invoked. |
| `model_region` | string (ISO 3166-1 alpha-2) | **REQUIRED** | The jurisdiction in which the model will process the data. |
| `risk_tier` | enum | **REQUIRED** | AI risk classification under the EU AI Act or equivalent. Permitted values: `minimal`, `limited`, `high`, `unacceptable`. |
| `prohibited_use_check` | boolean | **REQUIRED** | Attests that the intended use has been checked against the list of prohibited AI applications under applicable law. Must be `true` to permit use. |
| `human_oversight_required` | boolean | OPTIONAL | Indicates whether human review of the AI output is required before any decision is actioned. |
| `training_data_flag` | boolean | OPTIONAL | Set to true if the data may be used to train, fine-tune, or evaluate the model. |
| `output_retention_permitted` | boolean | OPTIONAL | Whether AI-generated outputs derived from this data may be retained. |
| `conformity_assessment_ref` | string (URI) | OPTIONAL | For high-risk AI systems, reference to the conformity assessment documentation. |

---

## 6. Signing and Verification

### 6.1 Signing requirements

All PCTs must be cryptographically signed before attachment. Unsigned PCTs must be rejected by all verifiers.

The following signing algorithms are supported in version 0.1:

- **RS256** (RSASSA-PKCS1-v1_5 with SHA-256). Recommended for all deployments where the issuer and verifier are different organisations or systems. Requires a public/private key pair.
- **HS256** (HMAC with SHA-256). Permitted only for single-organisation deployments where the issuer and all verifiers share a secure secret. Must not be used across organisational boundaries.

> **Key management:** Issuers must implement key rotation procedures. The `kid` field in the PCT header enables verifiers to retrieve the correct public key without invalidating existing tokens. Expired or revoked keys must be maintained in a key registry for audit purposes.

### 6.2 Signature construction

The signature is computed over the Base64URL encoding of the header concatenated with a period and the Base64URL encoding of the payload, consistent with RFC 7519 Section 7.2.

```text
signature = sign(
  Base64URL(header) + '.' + Base64URL(payload),
  private_key
)
```

```text
pct = Base64URL(header) + '.' + Base64URL(payload) + '.' + Base64URL(signature)
```

### 6.3 Verification procedure

A verifier must perform all of the following steps before accepting a PCT:

1. Decode the three components of the compact serialised PCT.
2. Retrieve the public key (or shared secret) associated with the `kid` value in the header.
3. Verify the signature over `header.payload` using the retrieved key.
4. Confirm that the `pct_version` in the header is a version supported by the verifier.
5. Confirm that the current timestamp is between `valid_from` and `expires_at`.
6. Verify the data binding as defined in Section 5.8.5: re-hash the received data payload and compare against `data_hash`.
7. Proceed to claims evaluation as defined in Section 4.5.

If any step fails, the PCT must be treated as invalid and the action must be blocked. Verifiers must not skip steps or apply partial verification.

---

## 7. Enforcement API

### 7.1 Overview

This section defines the minimum API contract that a PCT-compliant enforcement point must expose. Implementations may provide richer interfaces; they must not expose less than the minimum defined here.

### 7.2 Verification request

An enforcement point must accept a verification request containing the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `pct` | string | **REQUIRED** | The compact serialised PCT (`header.payload.signature`). |
| `requested_action` | enum | **REQUIRED** | The action being requested. Permitted values: `process`, `transfer`, `ai_call`, `store`, `delete`, `disclose`. |
| `requested_purpose` | string | **REQUIRED** | The specific purpose for which the action is being performed. Must match a value in `allowed_purposes` to pass. |
| `processing_region` | string (ISO 3166-1 alpha-2) | **REQUIRED** | The country code where the action will occur. |
| `requestor_id` | string | **REQUIRED** | Identifier of the system or service making the request. |
| `request_timestamp` | integer (Unix epoch) | **REQUIRED** | Timestamp of the request. |
| `request_id` | string (UUID v4) | **REQUIRED** | Unique identifier for this verification request, used in the audit record. |

### 7.3 Verification response

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `decision` | enum | **REQUIRED** | The enforcement decision. Values: `ALLOW`, `BLOCK`, `TRANSFORM`. |
| `decision_reasons` | array of string | **REQUIRED** | Human-readable explanation of the checks that produced the decision. Required for `BLOCK` and `TRANSFORM` decisions. |
| `transform_instructions` | object | CONDITIONAL | Required when decision is `TRANSFORM`. Specifies the transformation to be applied (e.g. redact field x, pseudonymise field y). |
| `audit_record_id` | string (UUID v4) | **REQUIRED** | The identifier of the audit record generated for this decision. |
| `response_timestamp` | integer (Unix epoch) | **REQUIRED** | Timestamp at which the decision was made. |

---

## 8. Audit Records

### 8.1 Requirements

Every verification event must produce an audit record. Audit records must be:

- Generated at the time of the decision, not retrospectively
- Tamper-evident, using a SHA-256 hash of the full record payload
- Retained for a minimum period consistent with applicable regulatory requirements (suggested minimum: 7 years for data subject to GDPR or HIPAA)
- Structured in a format that can be exported and presented to a regulator or auditor without specialist tooling

### 8.2 Audit record schema

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `audit_id` | string (UUID v4) | **REQUIRED** | Unique identifier for this audit record. |
| `request_id` | string (UUID v4) | **REQUIRED** | The `request_id` from the originating verification request. |
| `pct_id` | string (UUID v4) | **REQUIRED** | The `pct_id` of the PCT evaluated. |
| `issuer` | string (URI) | **REQUIRED** | The issuer of the PCT evaluated. |
| `requestor_id` | string | **REQUIRED** | The system that made the verification request. |
| `requested_action` | enum | **REQUIRED** | The action that was requested. |
| `requested_purpose` | string | **REQUIRED** | The purpose stated in the verification request. |
| `processing_region` | string | **REQUIRED** | The region in which the action was to be performed. |
| `decision` | enum | **REQUIRED** | The enforcement decision: `ALLOW`, `BLOCK`, or `TRANSFORM`. |
| `checks_performed` | array of object | **REQUIRED** | The ordered list of checks performed, each including `check_name`, `result` (pass/fail), and `reason`. |
| `decision_timestamp` | integer (Unix epoch) | **REQUIRED** | Timestamp at which the decision was made. |
| `record_hash` | string (hex) | **REQUIRED** | SHA-256 hash of the JSON-serialised audit record (excluding the `record_hash` field itself). Enables tamper detection. |

---

## 9. Example Tokens and Scenarios

### 9.1 Scenario 1 — Permitted: UK clinical data, UK processing, valid consent

This example shows a PCT that would result in an ALLOW decision for a clinical analytics AI call on UK patient data processed within the UK.

```json
{
  "pct_id": "f3a2b1c4-1234-4abc-8def-000000000001",
  "issued_at": 1743000000,
  "valid_from": 1743000000,
  "expires_at": 1774536000,
  "issuer": "https://orchestrator.opsf.org",
  "subject_id": "dataset:patient-cohort-2026-03",
  "subject_type": "ai_interaction",
  "data_origin": "GB",
  "data_categories": ["health", "special_category"],
  "lawful_basis": {
    "bases": ["consent"],
    "framework": "UK_GDPR"
  },
  "allowed_purposes": ["clinical_analytics", "treatment_support"],
  "consent_status": true,
  "consent_scope": ["clinical_analytics", "treatment_support"],
  "jurisdiction_rules": {
    "permitted_regions": ["GB"],
    "residency_required": true
  },
  "data_hash": "n4bQgYhMfWWaL-qgxVrQFaO_TxsrC4Is0V1sFbDwCgg",
  "hash_algorithm": "sha-256",
  "hash_scope": "full_payload",
  "data_format": "application/json",
  "ai_context": {
    "model_id": "medai-v2-uk",
    "model_region": "GB",
    "risk_tier": "high",
    "prohibited_use_check": true,
    "human_oversight_required": true
  }
}
```

**Expected decision:** `ALLOW` — all checks pass. Model region (GB) matches `permitted_regions`. Requested purpose (`clinical_analytics`) is in `allowed_purposes`. Consent is true and covers the purpose. Risk tier is high but `prohibited_use_check` is true and `human_oversight_required` is noted in the audit record.

### 9.2 Scenario 2 — Blocked: UK clinical data routed to US model

The same dataset is requested for processing by a US-hosted model.

```json
{
  "...": "(same PCT as Scenario 1 — jurisdiction_rules.permitted_regions: [GB], residency_required: true)",
  "ai_context": {
    "model_id": "us-general-llm-v3",
    "model_region": "US",
    "risk_tier": "high",
    "prohibited_use_check": true
  }
}
```

**Expected decision:** `BLOCK` — jurisdiction check fails. `model_region` (US) is not in `permitted_regions` ([GB]) and `residency_required` is true. The action is blocked before processing occurs. Audit record is generated with `check_name: jurisdiction_check`, `result: fail`.

### 9.3 Scenario 3 — Blocked: purpose not in claims

The dataset is requested for a commercial research purpose not covered by the consent or the `allowed_purposes` list.

```json
{
  "requested_action": "ai_call",
  "requested_purpose": "commercial_research",
  "processing_region": "GB"
}
```

**Expected decision:** `BLOCK` — purpose check fails. `commercial_research` is not present in `allowed_purposes` ([`clinical_analytics`, `treatment_support`]).

### 9.4 Scenario 4 — Clinical trial data, multiple simultaneous failures

Clinical trial data is requested for processing by an overseas AI system for a purpose outside the trial protocol, with no valid consent for the requested scope.

**PCT:**
```json
{
  "pct_id": "a1b2c3d4-5678-4abc-9012-000000000004",
  "data_origin": "DE",
  "data_categories": ["health", "genetic", "special_category"],
  "lawful_basis": {
    "bases": ["consent"],
    "framework": "GDPR"
  },
  "allowed_purposes": ["clinical_trial_protocol_A"],
  "consent_status": true,
  "consent_scope": ["clinical_trial_protocol_A"],
  "jurisdiction_rules": {
    "permitted_regions": ["DE", "FR", "NL"],
    "residency_required": true
  },
  "extensions": {
    "x-hipaa:phi_flag": true,
    "x-hipaa:minimum_necessary": true
  }
}
```

**Verification request:**
```json
{
  "requested_purpose": "secondary_commercial_research",
  "processing_region": "US"
}
```

**Expected decision:** `BLOCK` — multiple simultaneous failures:
1. Purpose check: `secondary_commercial_research` not in `allowed_purposes`
2. Jurisdiction check: US not in `permitted_regions`
3. Consent scope check: consent does not cover `secondary_commercial_research`

All failures are recorded in the audit record.

---

## 10. Conformance

### 10.1 Conformance levels

This specification defines two conformance levels:

- **PCT Core Conformant.** An implementation that correctly issues, signs, transmits, verifies, and audits PCTs in accordance with all REQUIRED fields and the lifecycle defined in Section 4. Core conformance covers Sections 1 through 8.

- **PCT Extended Conformant.** A core-conformant implementation that additionally implements at least one extension namespace defined in Section 5.7, exposes a conformant enforcement API as defined in Section 7, and produces audit records conformant with Section 8.

### 10.2 Conformance declaration

Implementations claiming conformance to this specification must publicly document:

- The conformance level claimed (Core or Extended)
- The version of the specification implemented (currently 0.1)
- Any extension namespaces implemented
- Any optional fields implemented
- Any known deviations from the specification and the reasons for them

### 10.3 Interoperability

PCT-conformant systems from different vendors must be interoperable with respect to the core schema and the compact serialisation format. A PCT issued by any conformant issuer must be verifiable by any conformant verifier, provided the verifier has access to the issuer's public key.

---

## 11. Security Considerations

### 11.1 Claim accuracy

The PCT mechanism provides cryptographic assurance that claims have not been tampered with since issuance. It does not provide assurance that claims were accurate at the time of issuance. Issuers must implement governance processes — including integration with authoritative consent management systems, policy platforms, and data catalogues — to ensure that claims accurately reflect reality at the time of issuance.

### 11.2 Key compromise

If an issuer's private signing key is compromised, all PCTs signed with that key must be considered potentially fraudulent. Issuers must maintain a key revocation mechanism and must notify relying verifiers of key compromise without delay. Verifiers must check key revocation status before accepting PCTs from issuers whose key status is uncertain.

### 11.3 Replay attacks

A PCT that has been captured in transit could be replayed to authorise an action for which the PCT was not originally intended. Implementations should mitigate replay risk by binding the PCT to a specific request using the `request_id` and `request_timestamp` fields in the verification request, and by setting `expires_at` values appropriate to the sensitivity of the data.

### 11.4 Token detachment and data substitution

A valid PCT could be detached from its original data and presented with a different, potentially malicious, dataset. The data binding mechanism defined in Section 5.8 mitigates this by cryptographically binding the token to a hash of the data payload at issuance. Verifiers must always perform the data binding check (Section 5.8.5) before evaluating claims. A mismatch between the computed hash and `data_hash` must be treated as a verification failure.

### 11.5 Consent withdrawal

Where the lawful basis is consent, a PCT issued on the basis of consent becomes invalid if that consent is subsequently withdrawn. PCT lifecycles should be configured with expiry periods short enough that revoked consent is not honoured by stale tokens. For high-sensitivity processing, implementations should implement a consent status check against the live consent record at verification time using the `consent_record_ref` field.

---

## 12. The PCT Namespace Registry

### 12.1 Purpose and authority

The PCT Namespace Registry is the authoritative record of all registered extension namespace prefixes in the PCT ecosystem. It is maintained by OPSF (Open Privacy Standards Foundation) as the authoring organisation of this specification.

The registry exists to prevent namespace collisions, establish clear ownership and accountability for each namespace, and ensure that verifiers and implementers can identify the authoritative definition of any extension claim they encounter. Without a registry, two organisations could independently define `x-fintech:` with conflicting semantics, creating ambiguity that undermines the reliability of PCT verification.

Registration is required for any organisation wishing to publish an extension namespace for use by third parties. An organisation may use unregistered namespaces internally, but must not publish or promote unregistered namespaces for external adoption. Verifiers encountering an unregistered namespace must treat it as unverified and flag the PCT for human review rather than failing silently.

### 12.2 Namespace prefix format

All extension namespace prefixes must conform to the following format:

```
x-{label}:
```

Where `{label}` is a short, lowercase, alphanumeric identifier with no spaces or special characters other than hyphens. Examples: `x-ccpa:`, `x-lgpd:`, `x-uk-nhs:`, `x-psd2:`.

The following prefixes are reserved by OPSF (Open Privacy Standards Foundation) and may not be registered by third parties:

- `x-hipaa:`
- `x-dora:`
- `x-duaa:`
- `x-pecr:`
- `x-ai-act:`
- `x-pct:` (reserved for future core extensions)

### 12.3 Registration tiers

The registry operates on two tiers.

**Tier 1 — Open Registration.** Available at no cost to individuals, academic institutions, non-profit organisations, open source projects, and regulatory bodies. Tier 1 registrations are listed in the public registry with full documentation and are eligible for community review and promotion to core.

**Tier 2 — Commercial Registration.** Required for commercial organisations registering namespaces for use in products or services. Tier 2 registrations carry an annual registration fee, are listed in the public registry with full documentation, and are eligible for community review and promotion to core. Commercial registrants receive a verified badge in the registry.

Fee structures for Tier 2 registration are published separately at [opsf.org/registry](https://opsf.org/registry) and are reviewed annually.

### 12.4 Registration requirements

An application to register a namespace must include the following:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `namespace_prefix` | string | REQUIRED | The proposed prefix in `x-{label}:` format. |
| `registrant_name` | string | REQUIRED | The full legal name of the registering organisation or individual. |
| `registrant_contact` | string (email) | REQUIRED | A stable contact address for the registrant. |
| `regulatory_framework` | string | REQUIRED | The regulatory framework, standard, or domain the namespace addresses. |
| `jurisdiction` | string | REQUIRED | The jurisdiction(s) to which the framework applies. |
| `documentation_url` | string (URI) | REQUIRED | A publicly accessible URL where the full namespace field definitions are documented. |
| `fields` | array of object | REQUIRED | A summary list of the fields defined within the namespace, each with a name, type, and description. |
| `version` | string | REQUIRED | The version of the namespace definition being registered. Must follow semantic versioning (e.g. `1.0.0`). |
| `tier` | enum | REQUIRED | The registration tier. Values: `open`, `commercial`. |
| `licence` | string | OPTIONAL | The licence under which the namespace definition is published. |

### 12.5 Registration process

Applications are submitted to [pct@opsf.org](mailto:pct@opsf.org) or via the web form at [opsf.org/registry/apply](https://opsf.org/registry/apply).

OPSF (Open Privacy Standards Foundation) will review each application within 14 working days and will either approve the registration, request clarification, or reject the application with reasons. Grounds for rejection include conflict with an existing registration, conflict with the core schema field names, insufficient documentation, or failure to meet the format requirements of Section 12.2.

Approved registrations are published in the PCT Namespace Registry within 5 working days of approval. The registry is publicly available at [opsf.org/registry](https://opsf.org/registry) and is also published as a machine-readable JSON file in the PCT specification GitHub repository at `registry/namespaces.json`.

### 12.6 Registrant obligations

Registrants are responsible for:

- Maintaining the accuracy of the documentation at the registered `documentation_url`.
- Notifying OPSF (Open Privacy Standards Foundation) of any material changes to the namespace definition by submitting an updated registration.
- Renewing commercial registrations annually and maintaining payment of applicable fees.
- Ensuring that implementations of their namespace are consistent with the registered field definitions.

OPSF (Open Privacy Standards Foundation) reserves the right to suspend or revoke a registration where a registrant fails to meet these obligations, where the namespace is found to conflict with the core schema, or where the registered documentation is found to be materially misleading.

### 12.7 Dispute resolution

Where two parties claim entitlement to the same namespace prefix, OPSF (Open Privacy Standards Foundation) will adjudicate based on the date of application, the quality and completeness of the documentation, and the legitimacy of the claimed regulatory basis. OPSF (Open Privacy Standards Foundation)'s decision is final. Parties may appeal in writing within 30 days of a decision.

### 12.8 The registry record format

Each entry in the public registry is a JSON object conforming to the following structure:

```json
{
  "namespace_prefix": "x-ccpa",
  "registrant_name": "Example Organisation",
  "registrant_contact": "pct@example.org",
  "regulatory_framework": "California Consumer Privacy Act / CPRA",
  "jurisdiction": "US-CA",
  "documentation_url": "https://example.org/pct/x-ccpa",
  "version": "1.0.0",
  "tier": "open",
  "registration_date": "2026-06-01",
  "status": "active",
  "fields": [
    {
      "name": "opt_out_flag",
      "type": "boolean",
      "description": "Indicates whether the data subject has exercised their right to opt out of sale or sharing of personal information."
    },
    {
      "name": "sensitive_pi_flag",
      "type": "boolean",
      "description": "Indicates whether the data includes sensitive personal information as defined under CPRA Section 1798.121."
    }
  ]
}
```

---

## 13. Extension Namespace Promotion to Core

### 13.1 Purpose

The PCT core schema is intentionally minimal. It defines the fields that are universally applicable across all jurisdictions and use cases. Extension namespaces address jurisdiction-specific, sector-specific, or use-case-specific obligations that are not universally applicable.

Over time, some extension namespaces may demonstrate sufficient universality, maturity, and implementer consensus to warrant promotion to the core schema. This section defines the criteria and process by which that promotion may occur.

### 13.2 Promotion criteria

An extension namespace field or set of fields may be considered for promotion to the core schema when all of the following criteria are satisfied:

**Universality.** The obligation addressed by the field arises under regulatory frameworks that together govern a significant majority of global personal data processing activity. A field that is relevant only to a single jurisdiction or sector will not meet this criterion regardless of the size of that jurisdiction or sector.

**Maturity.** The namespace must have been registered and in active documented use for a minimum of one full version cycle of the PCT specification. Fields proposed for promotion from v0.2 extensions must therefore have been registered no later than the publication of v0.2 and must have demonstrable implementation evidence by the time v1.0 is being drafted.

**Implementation evidence.** There must be documented evidence of real-world implementation of the namespace fields in question by at least three independent organisations. Self-certification by the registrant is not sufficient. Evidence may take the form of public conformance declarations, case studies, or verified implementation reports submitted to the PCT GitHub Discussions board.

**Community consensus.** There must be broad agreement within the PCT implementer and legal community that the field belongs in the core schema. This is assessed through the GitHub Discussions process and, where necessary, a formal comment period. Significant unresolved objections from substantive contributors will prevent promotion regardless of other criteria being met.

**Schema compatibility.** The proposed field must be compatible with the existing core schema and must not create conflicts with existing required or optional fields. Where a promoted field would require changes to the core schema beyond simple addition, those changes must themselves be subject to the full comment process.

### 13.3 Promotion process

Promotion proposals may be submitted by any party, including the original namespace registrant, any implementer, or OPSF (Open Privacy Standards Foundation) itself. A promotion proposal must be submitted as a GitHub Issue using the promotion proposal template and must include:

- The namespace prefix and specific field or fields proposed for promotion
- Evidence satisfying each of the criteria in Section 13.2
- Proposed core schema field name, type, and description
- Analysis of any backwards compatibility implications
- Proposed handling of the existing extension namespace field following promotion (deprecation timeline, mapping guidance)

OPSF (Open Privacy Standards Foundation) will review promotion proposals and open a formal 60-day public comment period for each substantive proposal. Following the comment period, OPSF (Open Privacy Standards Foundation) will publish a decision with reasons. Accepted promotions will be incorporated into the next major or minor version of the specification as appropriate.

### 13.4 Deprecation of promoted extension fields

Where an extension namespace field is promoted to core, the original extension namespace field does not become invalid immediately. A deprecation period of at least one full version cycle will apply, during which both the core field and the extension field are accepted by conformant verifiers. Implementers are expected to migrate to the core field during this period.

Following the deprecation period, verifiers are no longer required to process the deprecated extension field. The original namespace registration remains active in the registry but is marked as deprecated with a reference to the core field that replaced it.

### 13.5 Fields that will not be promoted

The following categories of field are not eligible for promotion to the core schema regardless of adoption levels:

- Fields addressing obligations that arise under a single national jurisdiction only, where there is no reasonable prospect of that obligation being adopted universally.
- Fields addressing highly sector-specific obligations with no applicability outside that sector.
- Fields that duplicate or overlap substantially with existing core fields.
- Fields submitted by a registrant with a commercial interest in the promotion that have not achieved independent third-party implementation evidence.

---

## Appendix A — Full PCT JSON Schema

The following JSON Schema (Draft 2020-12) defines the complete structure of a PCT payload. Implementations may use this schema for validation.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://pct.opsf.org/schema/0.1/pct.json",
  "title": "Privacy Claims Token",
  "type": "object",
  "required": [
    "pct_id", "issued_at", "valid_from", "expires_at",
    "issuer", "subject_id", "subject_type", "data_origin",
    "data_categories", "lawful_basis", "allowed_purposes",
    "jurisdiction_rules", "data_hash", "hash_algorithm",
    "hash_scope"
  ],
  "properties": {
    "pct_id":          { "type": "string", "format": "uuid" },
    "issued_at":       { "type": "integer" },
    "valid_from":      { "type": "integer" },
    "expires_at":      { "type": "integer" },
    "issuer":          { "type": "string", "format": "uri" },
    "subject_id":      { "type": "string" },
    "subject_type":    {
      "type": "string",
      "enum": ["dataset", "data_flow", "api_request", "ai_interaction", "transfer"]
    },
    "data_origin":     { "type": "string", "pattern": "^[A-Z]{2}$" },
    "data_categories": {
      "type": "array",
      "items": { "type": "string" },
      "minItems": 1
    },
    "lawful_basis": {
      "type": "object",
      "required": ["bases"],
      "properties": {
        "bases":     { "type": "array", "items": { "type": "string" } },
        "framework": { "type": "string" }
      }
    },
    "allowed_purposes": {
      "type": "array",
      "items": { "type": "string" },
      "minItems": 1
    },
    "consent_status":  { "type": "boolean" },
    "consent_scope":   { "type": "array", "items": { "type": "string" } },
    "jurisdiction_rules": {
      "type": "object",
      "required": ["permitted_regions"],
      "properties": {
        "permitted_regions":   { "type": "array" },
        "restricted_regions":  { "type": "array" },
        "residency_required":  { "type": "boolean" },
        "sovereignty_framework": { "type": "string" }
      }
    },
    "data_hash":       { "type": "string" },
    "hash_algorithm":  { "type": "string", "enum": ["sha-256", "sha-384", "sha-512"] },
    "hash_scope":      { "type": "string", "enum": ["full_payload", "merkle_root"] },
    "data_format":     { "type": "string" },
    "ai_context":  { "type": "object" },
    "extensions":  { "type": "object" }
  }
}
```

---

## Appendix B — Controlled Purpose Vocabulary

The following values are defined as the standard controlled vocabulary for the `allowed_purposes` field. Implementers may use additional values expressed as URIs. Values are case-sensitive.

| Term | Definition |
|------|------------|
| `clinical_analytics` | Processing for the purpose of analysing clinical or health data to derive insights, support diagnosis, or inform treatment pathways. |
| `treatment_support` | Processing in direct support of delivering healthcare treatment to the data subject. |
| `clinical_trial_protocol_{id}` | Processing within the scope of a specific, identified clinical trial protocol. Replace `{id}` with the trial identifier. |
| `research_public_interest` | Scientific or academic research conducted in the public interest, consistent with applicable ethical approvals. |
| `fraud_prevention` | Processing to detect, prevent, or investigate fraud or financial crime. |
| `compliance_reporting` | Processing required to fulfil a statutory reporting obligation. |
| `service_delivery` | Processing necessary to deliver a contracted service to the data subject. |
| `marketing_targeted` | Processing to deliver targeted marketing communications where consent has been obtained. |
| `marketing_general` | Processing to deliver general marketing communications on the basis of legitimate interests. |
| `model_training` | Processing to train, fine-tune, or evaluate a machine learning model. |
| `model_inference` | Processing as input to a deployed machine learning model for inference only, not training. |
| `data_portability` | Processing to fulfil a data portability request from the data subject. |
| `legal_proceedings` | Processing in connection with legal proceedings or legal advice. |
| `audit_internal` | Processing for the purpose of internal audit, governance, or risk management. |
| `audit_external` | Processing by an external auditor or regulator. |
| `archiving_public_interest` | Long-term archiving in the public interest, consistent with applicable exemptions. |

---

## Appendix C — Version History

| Version | Date | Notes |
|---------|------|-------|
| **0.1** | March 2026 | Initial draft for public comment. Core schema, lifecycle, signing model, data binding and integrity verification, enforcement API, audit record, four regulatory extension namespaces, example scenarios, and JSON Schema appendix. Authored by OPSF (Open Privacy Standards Foundation). |

---

Comments, corrections, and proposed extensions for version 0.2 should be submitted to:

**info@opsf.org**

[github.com/opsf-org/pct-spec](https://github.com/opsf-org/pct-spec)

---

*Privacy Claims Token Specification v0.1 · Released under CC BY 4.0 · OPSF (Open Privacy Standards Foundation) · [opsf.org](https://opsf.org)*
