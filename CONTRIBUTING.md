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

**pct-spec@thedpg.com**

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

## Code of Conduct

This project follows a simple standard: be respectful, be constructive, and focus on the technical and regulatory substance. Personal criticism or unconstructive commentary will be removed.

---

*DPG Labs · The Data Privacy Group · [thedpg.com](https://thedpg.com)*
