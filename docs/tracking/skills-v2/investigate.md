# Investigate — first Skills V2 review checkpoint

Date: 2026-09-25. Branch: `feat/skills-v2`. Status: implemented and packaged; awaiting user review. No other workflow is implemented by this slice. Production `main` remains unchanged.

## Changes

The Markdown proposal and HTML artifact were already present on `main` at `5bea28cf9fe8fa163b572cc2179db8185c46bded`. This branch also preserves the previously local capability-evidence note and adds an implementation checkpoint to both documents.

All 17 existing authored skill directories (66 files) moved from `skills/` into the existing `legacy/` folder. Their bytes are verified against the archive receipt. The two previously archived packages remain. External sources and old catalog entries remain available, and unchanged catalog sources still resolve against production main. This is a development-branch archive, not a production retirement or permission to merge the partial catalog.

`logbook-investigate` is automatically selectable and explicitly invocable. The root owns evidence framing, method selection, optional behavioral composition and completion. It includes a patched Research reference and derived source-verification and adversarial-challenge references. The planned owners of the latter methods remain Implement and Decide; their public workflows are not implemented or invoked here.

Domain Modeling and Truss remain independent optional capabilities. Ordinary vocabulary lookup stays within research; Domain Modeling is for a requested sharpening of the project model. Neither optional skill is required to install or run the core package. AFK's `composes` field advertises selection relationships; it does not prove runtime use or enforce installation.

The generated package includes references, licenses, agent discovery metadata and a source manifest. Canonical inputs, pristine upstream snapshots, Research patch replay, consumer declarations and SHA-256 receipts make it reproducible. No watcher or automatic upstream adoption is shipped.

## Source decisions

Research is pinned to Matt Pocock's `skills/engineering/research/SKILL.md` at `c55ee46073ed923f86ce59a5eb3b6d895095d1b7` (MIT). The current upstream moved Research into the engineering directory; the snapshot uses the observed path.

Source Driven Development and Doubt Driven Development are pinned to Addy Osmani's agent-skills at `bcab6a1b8503100e8618c3b4e32cc78de43de769` (MIT). Their local methods are labeled derived, with recorded omissions and retained behavior. They are not advertised as verbatim copies or complete implementations of their upstream skills.

The Astra article and Writing for Agents shaped authoring, not a runtime dependency. No model selection, mandatory background agent, per-decision web search, or recurring approval ritual is introduced.

## Verification

- `pnpm check`: lint, generated-package parity and 12 tests pass.
- Tests exercise snapshot/license tampering, patch replay mismatch, stale authored/generated output, self-contained reference resolution, optional dependency metadata and all archived bytes. Existing catalog and hook tests pass.
- Standard `npx skills add <package> --list`: discovers exactly `logbook-investigate` with its intended description.
- Standard skills CLI copy-install into a disposable project for Codex: succeeds. Installed files match every checksum in the package receipt. Personal/global installed skills were not changed.
- Existing switchyard snapshot refreshed for Investigate and two previously added independent skills; its validator passes with 55 catalog entries and 5 profiles.
- `git diff --check`: passes.

These prove packaging and maintenance behavior. They do not prove Astra routing quality or comparative task performance. The [behavioral cases](../../evals/investigate.md) are ready for review and live model trials; they are not labeled as completed independent evaluations. No new benchmark claim is made.

## Review surface

Start with [the generated entry](../../../skills/logbook-investigate/SKILL.md), then follow only the reference conditions relevant to a sample question. [The composition guide](../../authoring/source-composition.md) explains provenance and future updates. The [HTML proposal](../../specs/show-me-afk-next-31.html) links back to this checkpoint.

After review, refine Investigate before beginning Decide. Branch publication is not approval to merge Skills V2 into the live catalog.
