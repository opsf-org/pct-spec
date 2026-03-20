# Development Guide

This document covers the branching strategy, contribution workflow, and project structure for the PCT reference implementation.

## Project Structure

```
pct-spec/
├── SPEC.md                          # The PCT Specification v0.1
├── schema/                          # JSON Schema (Appendix A)
├── examples/                        # Example tokens & scenarios
├── packages/
│   ├── core/                        # @pct/core — signing, verification, schema validation
│   │   └── src/
│   │       ├── types/               # TypeScript type definitions
│   │       ├── signing/             # Token creation & signing (Section 6)
│   │       ├── verification/        # 8-step verification pipeline (Section 4/6)
│   │       └── schema/              # JSON Schema validation (Appendix A)
│   ├── api/                         # @pct/api — Enforcement API server (Section 7)
│   │   └── src/
│   │       └── routes/              # HTTP endpoints
│   └── cli/                         # @pct/cli — Command-line tool
│       └── src/
│           └── commands/            # issue, verify, inspect
├── package.json                     # Workspace root
└── tsconfig.base.json               # Shared TypeScript config
```

## Prerequisites

- Node.js >= 20.0.0
- npm >= 10.0.0

## Getting Started

```bash
npm install                   # Install all workspace dependencies
npm run build                 # Build all packages
npm test                      # Run all tests
```

## Branching Strategy

### Long-lived branches

| Branch | Purpose |
|--------|---------|
| `main` | Tagged releases only. Every commit is a published version. Protected — PR-only with required reviews. |
| `develop` | Integration branch. Feature branches merge here. CI runs the full suite. |
| `spec/v0.1` | Tracks the current spec version. Long-lived. |

### Short-lived branches

| Pattern | Purpose | Example |
|---------|---------|---------|
| `feat/<component>/<description>` | New functionality | `feat/core/token-signing` |
| `fix/<description>` | Bug fixes | `fix/audit-hash-calculation` |
| `rfc/<topic>` | Spec feedback proposals with proof-of-concept | `rfc/pct-composition` |

### Release tags

Semantic versioning where the **minor version tracks the spec version**:

- `v0.1.0` — First release implementing spec v0.1
- `v0.1.1` — Bug fix against spec v0.1
- `v0.2.0` — First release implementing spec v0.2
- `v1.0.0` — First stable release (when the spec hits v1.0)

## Contribution Workflow

### For external contributors

1. **Fork** the repository
2. **Branch** from `develop` using the naming conventions above
3. **Implement** your changes with tests
4. **Open a PR** targeting `develop`

### For maintainers

1. **Branch** from `develop` directly
2. **PR** into `develop` with at least one review
3. **Release**: when `develop` is stable, PR into `main` and tag

### Commit messages

Use conventional commits:

```
feat(core): implement RS256 token signing
fix(api): handle missing public key gracefully
docs: update verification pipeline diagram
test(core): add scenario-2 jurisdiction block test
```

### PR requirements

- All CI checks pass (build, test, lint)
- At least one maintainer review
- Commit messages follow the conventional format
- New features include tests using the spec's example scenarios

## Spec-Impacting Proposals (RFCs)

If your implementation work reveals a gap in the spec (e.g., PCT composition for joined datasets, transform instruction language, key discovery protocol), use the RFC process:

1. Create an `rfc/<topic>` branch from `develop`
2. Add a document under `rfcs/<topic>.md` describing the problem, proposed solution, and trade-offs
3. Include a proof-of-concept implementation
4. Open a PR for discussion

## Architecture Decisions

- **Monorepo**: All packages live in one repo. They're tightly coupled to the same spec version and splitting repos creates version coordination overhead.
- **TypeScript**: Widest reach for a reference implementation. The `jose` library provides battle-tested JWT/JWS primitives.
- **Vitest**: Fast, TypeScript-native test runner.
- **Fastify**: Lightweight, schema-friendly HTTP framework for the enforcement API.
- **No runtime dependencies on Node.js APIs in core**: The core library should be portable to edge runtimes and browsers (except for `node:crypto` which has web equivalents).
