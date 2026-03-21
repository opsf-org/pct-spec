# Contributing to the PCT Specification

Thank you for your interest in contributing to the Privacy Claims Token (PCT) specification. Version 0.1 is a draft for public comment, and contributions of all kinds are actively welcomed.

---

## How to Contribute

### Opening an Issue

The preferred way to submit feedback is via a GitHub Issue. Issues are appropriate for:

- **Corrections** — errors, ambiguities, or inconsistencies in the specification text
- **Clarifications** — sections that are unclear or could be more precise
- **Proposed extensions** — new fields, extension namespaces, or regulatory frameworks to be addressed
- **Implementation reports** — feedback from building against the specification, including interoperability findings
- **Questions** — anything you are uncertain about

Please use a descriptive title and, where applicable, reference the specific section number(s) you are commenting on.

### Submitting a Pull Request

Pull requests are welcome for:

- Corrections to specification text (typos, factual errors, broken links)
- New example tokens or scenarios
- Additional content in the `examples/` directory
- Schema improvements

For **substantive changes to the core specification** — new required fields, changes to the claims schema, modifications to the lifecycle or enforcement model — please open an Issue first to discuss the proposal before submitting a PR. This helps ensure alignment before effort is invested.

### Comment by Email

If you prefer not to use GitHub, comments may be submitted by email to:

**pct@dpglabs.io**

Please include the section number and a clear description of your comment or proposed change. Email submissions will be reviewed and, where appropriate, converted to GitHub Issues for tracking.

---

## Contribution Guidelines

- **Be specific.** Reference section numbers where possible.
- **Explain the why.** For proposed changes, explain the problem being solved or the regulatory requirement being addressed.
- **Keep scope focused.** This specification is designed to be jurisdiction-neutral and minimal. Extensions should be proposed via the extension namespace mechanism rather than additions to the core schema.
- **Extension namespaces.** If you are proposing a new regulatory extension namespace (e.g. `x-ccpa:`, `x-lgpd:`), please provide a summary of the key obligations to be addressed and the fields you propose.

---

## What Happens to Contributions

All Issues and PRs will be reviewed by the specification authors. Accepted contributions will be incorporated into the next version of the specification (target: v0.2) with attribution.

The specification is released under CC BY 4.0. By submitting a contribution, you agree that your contribution may be incorporated into the specification under the same licence.

---

## Branching Strategy

### Long-lived branches

| Branch | Purpose |
|--------|---------|
| `main` | Tagged releases only. Every commit is a published, citable version of the spec. Protected — PR-only with required reviews. |
| `develop` | Integration branch. All PRs target here. When stable, merged to `main` with a version tag. |

### Short-lived branches

| Pattern | Purpose | Example |
|---------|---------|---------|
| `feat/<description>` | New spec content (fields, sections, extensions) | `feat/ccpa-extension-namespace` |
| `fix/<description>` | Corrections, typos, broken links | `fix/section-5-typo` |
| `examples/<description>` | New example tokens or scenarios | `examples/hipaa-phi-scenario` |
| `rfc/<topic>` | Substantive proposals that need discussion | `rfc/pct-composition-rules` |

### Release tags & versioning

Tags on `main` follow the spec version directly:

- `v0.1` — First draft for public comment
- `v0.2` — Second revision incorporating feedback
- `v1.0` — First stable release

Patch tags (e.g. `v0.1.1`) may be used for editorial corrections that don't change the spec's substance.

### Draft tags

Draft tags are used to publish snapshots of `develop` for community review before a version is finalised. They follow the pattern `v<version>-draft.<n>`:

- `v0.2-draft.1` — First draft snapshot of v0.2 for community review
- `v0.2-draft.2` — Revised draft after incorporating feedback
- `v0.2-draft.3` — Further revision, etc.

Draft tags are created on `develop` (not `main`). They are **retained permanently** as a historical record of what was reviewed — they are not deleted when the final version is released.

### Building the PDF

The Makefile accepts `VERSION` and `STATUS` variables:

```bash
# Draft PDF (default) — produces pct-spec-v0.2-draft.pdf
make pdf

# Final release PDF — produces pct-spec-v0.2.pdf (no watermark)
make pdf VERSION=v0.2 STATUS=release
```

When `STATUS` is anything other than `release`, the PDF includes a diagonal watermark and the status label in the header and cover page.

### Workflow

1. Branch from `develop` using the naming conventions above
2. Open a PR targeting `develop`
3. At least one maintainer review required
4. When ready for community review, maintainers tag `develop` as `v<version>-draft.<n>` and build a draft PDF
5. When `develop` is stable for a release, maintainers PR into `main` and tag the final version (e.g. `v0.2`)

---

## Code of Conduct

This project follows a simple standard: be respectful, be constructive, and focus on the technical and regulatory substance. Personal criticism or unconstructive commentary will be removed.

---

*DPG Labs · The DPG · [dpglabs.io](https://dpglabs.io)*
