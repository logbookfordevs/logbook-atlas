# Maintaining composed skills

The first implemented workflow is Investigate. `workflows/logbook-investigate/entry.md` owns its public contract and conditional routing. `sources/methods/` owns the reusable methods; `sources/composition.json` records source lineage, ownership and consumers. `skills/logbook-investigate/` is generated distribution output, installable without AFK or a shared runtime directory.

Run `pnpm build:skills` after editing inputs. Run `pnpm check` before committing. Commit canonical inputs and generated outputs together. The check compares bytes, including entry metadata, agent policy, local references, license notices and source manifests. An independently installed package has everything required for its core method; Domain Modeling and Truss are optional behavioral composition, discovered through the host's installed skills.

## Sources and adaptations

- Research: Matt Pocock's MIT-licensed source, **patched**. The pristine snapshot has no host-specific invocation flag at this revision. Replay `sources/patches/research.patch` against the snapshot to reproduce the maintained method. `pnpm build:skills` verifies that replay. The patch removes entry metadata, makes delegation and durable output conditional, prevents recursive delegation, and clarifies source conflicts and missing access.
- Source verification: **derived** from Addy Osmani's Source Driven Development. Retains version/condition-aware primary evidence, precise attribution and truthful limits. Removes implementation and routine per-decision browsing/approval requirements. Its planned owner is Implement, but no Implement workflow is shipped by this slice.
- Adversarial challenge: **derived** from Addy Osmani's Doubt Driven Development. Retains artifact + contract, fresh-context challenge when authorized, reconciliation, and a bounded stop. Omits the continuous posture, mandatory cross-model offer and host-specific orchestration. Its planned owner is Decide, but no Decide workflow is shipped by this slice.

The upstream snapshots are maintainer evidence, not runtime instructions. Their former invocation policy does not govern a packaged method. The generated references carry the reconciled behavior; a caller does not need to override an unmodified upstream root. Their local paths do not invoke a manual umbrella.

Each upstream origin has a repository, immutable commit and original path, plus source and license SHA-256 values. Generated receipts include the carried-content checksum and classification. Hashes verify bytes, not behavior. Derived methods have explicit derivation records instead of falsely claiming verbatim patches. License notices ship with each consumer.

## Updating an input

Compare a candidate upstream revision with its pinned snapshot. Review the affected adaptation and all declared consumers. Adopt the revision deliberately, refresh the source/license checksums, update the patch or derived method and adaptation record, then regenerate and validate consumers together. The build performs no network updates. A watcher/issue bot is deferred; this manifest supplies its future input and impact map.

Research patches use the single temporary path `source.md`; the build replays them in an isolated temporary directory. Method files are canonical editing surfaces, but changes to a patched method also require refreshing its patch. Source snapshots are immutable evidence until a deliberate upstream adoption changes their pin and hash together.

## Frontier-model design

The supplied [OpenAI Astra article](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra) informed a short outcome-based description, conditional reference loading, explicit completion, and fewer unnecessary approval or orchestration rituals. Writing for Agents informed pointer conditions, hierarchy, and separating always-loaded metadata from detailed methods. These are design choices, not a claim of measured superiority on Astra. Record actual behavior against the evaluation cases before making that claim.
