# AI Field Kit Catalog

The opinionated, maintained collection distributed by [AI Field Kit](https://github.com/logbookfordevs/ai-field-kit).

This repository is an additive preview of the collection as an independent release unit. The original AI Field Kit repository remains the active compatibility source until a later migration decision.

## Contents

- `afk/catalog/` — manifests consumed by the AFK CLI
- `skills/` — authored skill packages
- `rules/` — shared agent rules and supporting files
- `hooks/` — deterministic agent hooks
- `agents/` — portable custom-agent definitions

## Try the separated source

Preview the catalog without changing your saved defaults:

```bash
afk show skills --source logbookfordevs/ai-field-kit-catalog --ref main
```

Install an authored skill directly:

```bash
npx skills add https://github.com/logbookfordevs/ai-field-kit-catalog
```

## Development

```bash
pnpm install
pnpm check
```

`pnpm check` lints the repository and validates that catalog IDs are unique, referenced local assets exist, and AFK-owned source URLs point at this repository.

## Compatibility status

This repository does not replace `logbookfordevs/ai-field-kit` yet. Existing AFK defaults, installations, lock metadata, and documentation continue to use the original source. The two repositories can coexist while the extraction is evaluated.

