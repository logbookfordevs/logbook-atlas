# Logbook Atlas

The opinionated, maintained collection distributed by [AI Field Kit](https://github.com/logbookfordevs/ai-field-kit).

Atlas owns the default catalog and its content. AFK owns the CLI, installation, catalog schema support, and harness adapters. Existing skill names and behavior are preserved; the proposed next-generation workflows remain separate design work.

## Contents

- `afk/catalog/` — manifests consumed by the AFK CLI
- `skills/` — authored skill packages
- `rules/` — shared agent rules and supporting files
- `hooks/` — deterministic agent hooks
- `agents/` — portable custom-agent definitions

## Use the catalog

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

The updated AFK CLI defaults to Atlas and migrates legacy AFK catalog references while preserving custom sources. Publish Atlas before releasing the CLI update. Older CLI versions can select Atlas with `afk refresh --default-source logbookfordevs/ai-field-kit-catalog`. Local checkout changes alone do not distribute this migration.


## Catalog documentation

- [Catalog guide](docs/catalog-guide.md)
- [Composition map](afk-skills.html)
- [Workflow switchyard](docs/afk-skills-profiles-state-machine.html)
- [Legacy skills](legacy/)
- [Project-local registry](registry.json)
