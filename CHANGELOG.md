# Changelog

All notable changes to the Privacy Claims Token specification will be documented here.

This project follows [Semantic Versioning](https://semver.org/) for specification versions.

---

## [0.2-draft.3] — March 2026

**Third draft snapshot of v0.2 for community review.**

### Changed

- Rebranded all references from DPG Labs / dpglabs / thedpg to OPSF (Open Privacy Standards Foundation) (#19)
- Added GitHub issue/PR templates and CODEOWNERS for public collaboration (#17)
- Added workflow to notify pct-site on spec releases (#13)

---

## [0.1] — March 2026

**Initial draft for public comment.**

### Added

- Core schema (Section 5): header fields, core payload fields, `lawful_basis`, `jurisdiction_rules`, `transfer_restrictions`, data binding and integrity verification (Section 5.8), `ai_context`, extension namespaces
- PCT lifecycle definition (Section 4): six states — Issuance, Attachment, Transmission, Verification, Decision, Audit
- Signing and verification model (Section 6): RS256 and HS256 support, consistent with RFC 7519
- Enforcement API contract (Section 7): minimum verification request/response schema
- Audit record schema (Section 8): tamper-evident audit record with SHA-256 hash
- Four example scenarios (Section 9): ALLOW and BLOCK cases including jurisdiction, purpose, and multi-failure scenarios
- Two conformance levels: PCT Core Conformant and PCT Extended Conformant
- Security considerations (Section 11): claim accuracy, key compromise, replay attacks, consent withdrawal
- Regulatory framework coverage: GDPR/UK GDPR, EU AI Act, HIPAA, DORA, DUAA, PECR
- Extension namespaces: `x-hipaa:`, `x-dora:`, `x-duaa:`, `x-pecr:`, `x-ai-act:`
- Appendix A: Full JSON Schema (Draft 2020-12)
- Appendix B: Controlled purpose vocabulary (16 standard terms)

**Authors:** OPSF (Open Privacy Standards Foundation) · [opsf.org](https://opsf.org)

---

## Upcoming: [0.2]

Proposed for the next version based on public comment period. Issues and PRs welcome via GitHub or info@opsf.org.
