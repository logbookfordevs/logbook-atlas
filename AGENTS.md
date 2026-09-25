# Atlas authoring

`workflows/` owns workflow entry instructions; `sources/methods/` owns maintained reusable methods. `skills/logbook-*` packages are generated: edit their canonical inputs, run `pnpm build:skills`, and commit inputs with outputs. `pnpm check` detects stale packages and verifies pinned-source integrity.

For composed methods, read `docs/authoring/source-composition.md` for provenance and adaptation ownership. Preserve upstream snapshots and license notices; adopt updates deliberately with new pins, reviewed adaptations, and regenerated consumers.

`legacy/` preserves the pre-v2 skills. On `feat/skills-v2`, implement one agreed workflow at a time; `main` remains the live catalog until reviewed cutover.

Validate parsing, discovery, packaging, hashes, and behavior. Do not assert skill body wording, headings, or example order in tests. Record behavioral evaluation separately from deterministic package checks.
