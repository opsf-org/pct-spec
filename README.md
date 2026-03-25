# Privacy Claims Token (PCT) — Open Specification

**Version 0.1 · Draft for Public Comment · March 2026**

[![Licence: CC BY 4.0](https://img.shields.io/badge/Licence-CC%20BY%204.0-blue.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Status: Draft](https://img.shields.io/badge/Status-Draft%20for%20Public%20Comment-orange.svg)]()
[![Version: 0.1](https://img.shields.io/badge/Version-0.1-green.svg)]()

---

## What is the Privacy Claims Token?

The **Privacy Claims Token (PCT)** is an open, portable format for expressing, signing, and verifying the data obligations that govern how a dataset may be lawfully processed, transferred, or used.

A PCT is a structured, cryptographically signed object — inspired by the JSON Web Token (JWT) model — that **travels with data** through systems and pipelines. Any participating system can verify compliance before any action is permitted.

**In simple terms:** data carries its obligations with it. Before any action — an AI model call, a cross-border transfer, a processing operation — the PCT is verified. If the claimed obligations permit the action, it proceeds. If not, it is blocked. In either case, a tamper-evident audit record is generated automatically.

---

## The Problem PCT Solves

Organisations operating across modern digital environments face a structural compliance problem. Privacy and data governance obligations are documented in policy platforms and systems of record — but they are not enforced at the point of execution.

When an AI model is called, when data crosses a jurisdiction, when a dataset is used for a purpose that was never consented to: there is currently no consistent, automatic mechanism to intercept, verify, and either permit or block that action.

PCT closes the gap between documented obligations and enforced obligations.

---

## Key Features

- **Portable** — travels with data through pipelines, APIs, and cloud environments
- **Cryptographically signed** — tamper-evident; any verifier can confirm authenticity
- **Jurisdiction-neutral** — expresses obligations under GDPR, UK GDPR, HIPAA, EU AI Act, DORA, and any future framework
- **Extensible** — core schema plus extension namespaces for any regulatory requirement
- **Audit-first** — every verification event generates a structured, tamper-evident audit record automatically
- **Human-readable** — claims vocabulary drawn from legal and regulatory terminology

---

## Quick Start

A PCT payload looks like this:

```json
{
  "pct_id": "f3a2b1c4-1234-4abc-8def-000000000001",
  "issued_at": 1743000000,
  "expires_at": 1774536000,
  "issuer": "https://orchestrator.example.com",
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
  "jurisdiction_rules": {
    "permitted_regions": ["GB"],
    "residency_required": true
  },
  "ai_context": {
    "model_id": "medai-v2-uk",
    "model_region": "GB",
    "risk_tier": "high",
    "prohibited_use_check": true,
    "human_oversight_required": true
  }
}
```

When a verification request is made, the enforcement point checks this token and responds:

```json
{
  "decision": "ALLOW",
  "decision_reasons": ["All checks passed"],
  "audit_record_id": "e9f1a234-...",
  "response_timestamp": 1743000042
}
```

---

## Repository Contents

| File | Description |
|------|-------------|
| [`README.md`](README.md) | This file — overview and quick start |
| [`SPEC.md`](SPEC.md) | Full specification in Markdown |
| [`schema/pct-schema-0.1.json`](schema/pct-schema-0.1.json) | JSON Schema (Draft 2020-12) for PCT payload validation |
| [`examples/`](examples/) | Example PCT tokens and verification scenarios |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | How to submit comments, corrections, and extensions |
| [`LICENCE`](LICENCE) | CC BY 4.0 licence text |
| [`CHANGELOG.md`](CHANGELOG.md) | Version history |

---

## Regulatory Coverage

Version 0.1 explicitly addresses obligations arising from:

| Framework | Key areas covered |
|-----------|------------------|
| **GDPR / UK GDPR** | Lawful basis, purpose limitation, consent, transfer restrictions, automated decisions |
| **EU AI Act** | Risk tiers, prohibited use checks, human oversight, training data provenance |
| **HIPAA** | Minimum necessary, PHI handling, Business Associate obligations |
| **DORA** | ICT risk, third-party risk, operational resilience |
| **DUAA** | Data access conditions, trusted research environments |
| **PECR / ePrivacy** | Tracking consent, communications data, direct marketing |

Any framework not listed can be addressed via extension namespaces.

---

## Conformance Levels

**PCT Core Conformant** — correctly issues, signs, transmits, verifies, and audits PCTs using all required fields.

**PCT Extended Conformant** — core conformance plus at least one extension namespace, a conformant enforcement API, and full audit records.

---

## Contributing

This is a draft for public comment. Contributions of all kinds are welcome:

- Bug reports and corrections
- Proposed new fields or extension namespaces
- Implementation reports and interoperability feedback
- Translations

Please see [`CONTRIBUTING.md`](CONTRIBUTING.md) for details, or open an issue.

**Comment by email:** info@opsf.org

---

## Licence

This specification is released under the [Creative Commons Attribution 4.0 International Licence (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

Anyone may implement, extend, or build upon it freely, provided attribution is given to the original authors.

---

## Authors

**OPSF (Open Privacy Standards Foundation)**

[opsf.org](https://opsf.org)

---

*Privacy Claims Token Specification v0.1 · March 2026*
