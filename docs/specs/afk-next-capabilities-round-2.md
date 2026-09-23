> Historical proposal, superseded by [round three](afk-next-capabilities.md). Retained for comparison; its exclusions are not current recommendations.

# AFK Next: second proposal

Status: recommendation for discussion; architecture and names are not yet approved.
Date: 2026-09-17.
Baseline: AFK `6ed15517f414077b95e95891b7cb15477d101eb5`; 52 catalog entries, 33 manual and 19 automatic.

## Recommendation

Prefer **B: manual umbrellas with independent automatic skills** for the next default catalog. Compose selected manual methods into five explicit entry points: Decide, Prepare, Context, Mock, and Review. Retain all 19 automatic skills independently. Keep 15 current manual skills standalone, including the user-selected tools and coherent specialist workflows. Add two manual specialists adapted from PE: Verify and Product Description.

This is a replacement for the first proposal, not another layer of exceptions. The earlier idea of turning every recognizable task into an umbrella is withdrawn. There is no proposed Configure, Coordinate, Investigate, Diagnose, Learn, generic Design, or generic Implement umbrella. Existing skills already serve those tasks. Writing for Humans, Writing for Agents, and Truss stay independently addressable, without umbrella assignments.

The reason to prefer B is specific: it improves the human-selected workflow surface while preserving the direct discovery and lifecycle of independently useful automatic skills. It leaves more knowledge distributed than A. That is an accepted trade-off, not proof that B consumes fewer tokens or always routes correctly.

The relevant horizon is the next default-catalog revision and its migration, not a permanent restriction on AFK. Optimize first for understandable ownership, reliable access to retained behaviors, and maintainable source boundaries; evaluate runtime costs rather than predicting them from catalog size. User-selected isolation, short descriptions, complete source provenance for incorporated material, and safe user migration are non-negotiable. No numeric scores are assigned because comparative runtime evidence does not exist.

## Scope and terminology

This redesign concerns AFK's recommended default catalog. The CLI continues to support users' own catalogs and sources. Every current entry is accounted for below; accounting does not require inclusion in an umbrella. Default catalog membership and default installation selection are separate; the latter is not finalized here.

- **Capability composition:** use another independently available capability. This is the behavioral composition discussed in the interview.
- **Source composition:** incorporate and reconcile source material into AFK-maintained behavior. This is the structural composition discussed in the interview.
- **Source provenance:** origin, selected revision, and adaptation lineage of incorporated material. Existing **Skill Provenance** retains its installation/cache meaning.
- **Umbrella:** an entry point with several deliberately related internal operations. An umbrella is a skill packaging choice, not a synonym for a user task or catalog category.

Auto/manual policy does not define a skill's role: an automatic entry can itself be a substantial workflow or router. B uses the AFK default policy at the named baseline to bound this revision. A user's later invocation-policy change must not restructure files or change source ownership.

## The alternatives, made concrete

### A. Selective composition across manual and automatic entries

Use source composition wherever it improves coherence, regardless of the existing invocation policy. Keep explicit standalone choices, Impeccable, and library/tool integrations intact. A credible form shares B's Decide, Prepare, and Context groups but differs in three places:

| Composed entry in A | Incorporated current material | Suggested invocation |
|---|---|---|
| Prototype | `prototype`, `html-wireframe`, `html-prototype` | Automatic, with explicit invocation also available |
| Review | `afk-code-review`, `afk-code-review-verdicts`, `afk-static-review`, plus selected PE interface-review material | Automatic, with explicit modes |
| Motion | `animate`, `review-animations`, `apple-design`, `animate-text` | Automatic, with build/review/gesture modes |

A can reconcile rough-versus-fidelity prototype contracts in one place, share motion policy across creation and review, and unify review entry. Its strongest benefit is coherent knowledge ownership across existing invocation boundaries. Its costs are rewriting automatic discovery boundaries, reconciling more source instructions, and maintaining an independently complete replacement for every absorbed skill. This is a viable alternative, not an intentionally oversized design.

Architect stays standalone even in this version of A: a new coordinator still has no additional responsibility worth a wrapper. Explicit preference also keeps Truss and both writing skills independent. A does not require turning everything into a composed source.

### B. Manual umbrellas, independent automatic capabilities — preferred

Only selected existing manual methods are structurally composed. Automatic capabilities retain their identities, descriptions, and independently maintained payloads. A selected manual operation reaches those capabilities through explicit behavioral composition when needed.

B reduces the number of manual choices while leaving ordinary automatic use intact. It does not eliminate all overlapping expertise, promise smaller automatic metadata, or merge Matt's prototype with the HTML methods. New PE-based capabilities are deliberately proposed as manual specialists; new sources do not inherit a policy merely because of their origin.

### C. Current catalog plus clearer Compass routing — control

Keep the current skills and tighten routing. Add the desired PE specialists independently. This has the least migration and source-maintenance burden. It remains a serious fallback if B's internal routers merely reproduce Compass and add another read without improving human selection or behavior.

## Comparison and judgment

| Criterion | A: across invocation policies | B: manual umbrellas | C: current entries + Compass |
|---|---|---|---|
| Maintainability | More consolidated domain policy; more source adaptation and dependency migration | Smaller source-composition boundary; automatic upstream lifecycles stay intact | Least vendoring; existing overlap stays |
| Strategy | Strongest foundation for unified domain knowledge | Delivers a composed default without requiring broad automatic-skill replacement | Preserves optionality but makes little architectural progress |
| Clarity | Fewer domain entry points, but more important distinctions inside automatic routers | Human selects a bounded workflow; atomic automatic capabilities remain visible | Familiar names; the user still chooses among overlapping manuals |
| Runtime performance | Could eliminate repeated domain loads; could also load broader roots and misroute | Preserves current automatic metadata; adds a root before selected manual methods | No new root layer, but potentially more routing/search effort |
| Migration | Changes some automatic callers and skill identities as well as manuals | Changes 18 manual identities; automatic identities unchanged | Minimal changes |
| Original prototype problem | Can solve all three methods in one implementation | Improves the HTML pair; keeps a boundary with automatic `prototype` | Existing crossroads continues to carry the distinction |

I prefer B because the user is most concerned about losing precise discovery, growing descriptions, and preserving skills that already work. A offers a stronger unification benefit, especially for motion and prototyping, but it changes the very automatic boundaries whose reliability we cannot yet demonstrate. B still needs evaluation: keeping an automatic skill does not prove it will always activate.

The preference would change toward A for a bounded domain if B repeatedly misses the correct method or reintroduces conflicting policies, and a cross-policy composition resolves those failures with a short description and no material outcome/cost regression. The preference would change toward C for a group if its new umbrella saves no meaningful choice and adds only routing overhead. No rule forces every group to migrate together.

## The proposed manual surface in B

Names and invocation strings are working labels, not installed commands. Descriptions below are routing sketches for review, not finalized skill prompts.

| Entry | Short description sketch | Internal operations | Why this grouping earns consideration |
|---|---|---|---|
| Decide — `afk-decide` | Resolve a decision through an interview, external questions, or independent assessment. | General, documented, technical, visual decision; questionnaire; clean-room | One open decision with different evidence-gathering methods and specialist lenses |
| Prepare — `afk-prepare` | Turn settled intent into a specification or dependency-aware implementation tickets. | Spec; tickets | Two adjacent synthesis operations with distinct outputs; no generic planning engine |
| Context — `afk-context` | Clarify a request, brief the current work, or prepare its handoff. | Restate answer; brief implications; read back request; recap; handoff | Establish or transfer shared understanding of the current task |
| Mock — `afk-mock` | Create a standalone wireframe or polished prototype for a bounded product question. | Wireframe; fidelity mockup/flow | Same artifact family and shared craft, with explicit fidelity selection |
| Review — `afk-review` | Assess code, interface quality, or supplied findings without changing the implementation. | Code verdicts; static findings; motion; interface/fidelity | Human-requested judgment with scoped evidence and explicit lenses |

These are five proposals, not five equally proven wins. Context and Mock carry the greatest risk of adding a router where short direct skills may be better. Prepare has only two sources, but a substantive output distinction; it is not justified merely by reducing two names to one.

### Decide: compose wrappers, preserve independent expertise

Source composition carries useful behavior from `grill-me`, `grill-with-docs`, `afk-code-grill`, `afk-design-grill`, `to-questionnaire`, and `clean-room`. Its general interview uses independent `grilling`; documented decisions also use `domain-modeling`; technical decisions use `codebase-design` and, when warranted, independently retained Truss. Visual decision work uses full Impeccable and preserves AFK's visual-commitment contract.

Clean-room is a distinct operation, not an automatic extra review on every decision. It must preserve a neutral evidence brief, no inherited conversation, and an unchanged returned verdict. It uses standalone Architect when selecting an authorized worker; it must not create an unsolicited user-owned task. Questionnaire produces a document for another person; it does not send it without authorization.

Select from the explicit operation or the request's material intent. Ask one focused question if interview versus independent judgment is genuinely ambiguous. Do not run several methods just because they are packaged together. A visual decision requiring alternatives remains visual; it cannot be reduced to a text interview. A direct Impeccable request continues to reach Impeccable independently.

### Prepare: preserve spec and ticket contracts

Source composition carries `afk-to-spec` and `afk-to-tickets`. Spec mode synthesizes intended behavior; ticket mode slices settled intent into verifiable units and dependencies. Neither silently starts implementation. A request for both can continue across both operations within the authorization already given.

Wayfinder remains standalone for a multi-session unresolved decision graph. Prepare does not absorb it or force its planning process over a simple spec. Remove inherited volume incentives and redundant interviews only through recorded adaptations, preserving material unresolved decisions and meaningful test seams.

### Context: keep each small operation small

Source composition carries `bro`, `facts`, `readback`, `recap`, and `handoff`. The root chooses by purpose and subject: the last answer, current work and implications, the user's request, recent state, or the next context. Bare ambiguous invocation presents a small choice rather than running all operations.

The readback operation retains its explicit confirmation behavior, but only when selected; it never becomes an entry gate for unrelated work. Recap stays brief. Facts preserves critical implications rather than becoming a generic summary. Handoff writes a resumable record and references existing artifacts. Long-form writing stays with the two independent writing skills. `show-me` also remains standalone because visual explanation is broader than current-task context synchronization.

### Mock: honest about the remaining boundary

Source composition carries only `html-wireframe` and `html-prototype`. Independent `design-artifact` provides relevant craft through capability composition, with fidelity rules remaining in the selected Mock method.

Automatic `prototype` remains independent for question-first rough UI and logic/state experiments. A self-contained HTML file alone cannot distinguish the routes because Matt's logic mode also produces HTML. The deciding question is the artifact's review job: rough experiment versus structural wireframe or credible visual/flow fidelity. If Mock is explicitly invoked but the question needs real-app exploration, it can use independent `prototype` through an explicit handoff without copying its source. It must preserve the host shell and state what the result establishes.

This leaves a real boundary for Compass and users to understand. If that continues to be painful, A's unified Prototype is the strongest candidate to reopen. Do not claim B has completely solved the original three-source prototype problem.

### Review: optional depth around independent code review

Source composition carries `afk-code-review-verdicts`, `afk-static-review`, and `review-animations`, plus selected PE interface/fidelity methods if approved. Automatic `afk-code-review` stays standalone and retains its Standards/Spec outputs. Ordinary automatic code review does not implicitly invoke the entire manual umbrella.

Code-verdict mode calls that independent review and adjudicates its findings without merging its axes. Static mode runs existing checks and interprets relevant results. Motion/interface modes load only the needed reference sets. Multi-lens review keeps technical axes distinguishable from UI quality and states coverage. Source references and file paths must be normalized; PE's source audit found residual original-name links and conflicting scratch-harness instructions.

A review-only request never silently edits product code. A hostile-state harness needs a declared permitted scratch surface or an explicit limitation; inheriting an upstream instruction to create routes is not enough. A request that already includes warranted fixes may continue into authorized implementation after review. The default tracked implementation review remains the independent code review; richer manual review is not an unrequested new gate.

## New manual specialists: Verify and Product Description

Recommend including both capabilities, reflecting Leonardo's strong preference, but adapt them rather than installing them as a new mandatory PE workflow chain.

- **Verify — proposed `afk-verify`:** derive or run a named check set, preserve expected/observed results and execution evidence, render a report when requested, and retain skipped/not-run distinctions. Adapt PE's schema/renderer, storage, and browser integration. Strengthen evidence requirements; a valid JSON report is not proof the checks ran. Keep tests and normal validation available without invoking this reporting workflow.
- **Product Description — proposed `afk-describe`:** document how an existing product or feature behaves from the user's perspective, with source revision, states, interrupts, unknowns, observed evidence, and defect triage. Support an existing documentation location and bounded feature scope. Keep intended specification distinct from observed behavior. Use independent writing/research capabilities only as relevant. Remove raw upstream document-length targets and mandatory new-repository ceremony through recorded patches/derivation.

The descriptions can remain narrow: “Run scoped behavior checks and produce an evidence-backed verification report” and “Document an existing product's behavior, with source references and verification status.” These are new focused skills, not umbrellas created to house hypothetical future additions.

PE Review is a selective contribution to Review. PE Design, Build, Brand Assets, and its router are not proposed additional entries in this revision. Preserve them in the enrichment backlog. Source and license checks precede incorporation, especially where PE itself carries another author's work.

## Standalone means no umbrella assignment

All 19 current automatic skills remain standalone in B. This includes Architect, Impeccable, Truss, diagnosis, shadcn, writing for agents, prototype, code review, research, and implementation methods. Writing for Humans remains a standalone manual skill. Tool-specific integrations also remain independently addressable. Shared use by a workflow does not give them a parent umbrella.

Impeccable retains its full payload and modes. AFK does not need to absorb that payload to use it. A selected Decide visual operation can compose with Impeccable; an ordinary design or implementation request can still reach it directly. Packaging and runtime compatibility need testing, but no wholesale Impeccable fork is proposed.

Leonardo noted that B also makes a larger AFK Design workflow plausible through capability/behavioral composition with independent Impeccable. This helps resolve the earlier uncertainty about preserving its full system: independent catalog ownership and participation in a broader workflow can coexist. The recommendation not to create generic Design in this revision is not an architectural prohibition. Such a workflow could earn its place by coordinating a distinct end-to-end outcome while using Impeccable intact; it would not make Impeccable a structurally incorporated source or remove direct invocation. This is a recorded possibility, not a decision to add AFK Design to the five proposed umbrellas.

Architect remains an automatic standalone coordination skill. Preserve the existing rule/caller path that requires its guidance before spawning; do not rely only on automatic discovery. The composed clean-room method and other authorized spawning workflows must make that dependency explicit. Merely discussing agent plans must not cause a spawn.

Wayfinder, ADF, and tracked `afk-implement` retain their governing workflows. They are not references under generic Plan, Design, and Implement umbrellas. Direct untracked work stays ordinary agent behavior. Teach stays Teach. No new container is created just to rename an existing coherent skill.

`apple-design` and `animate-text` also remain standalone manuals in B. Animate Text is library-independent; that is not a reason to force it into an umbrella. Its material can serve creation, selection, or review, while automatic `animate` remains independent. A shared Motion skill is explicitly A's stronger option, not silently part of B.

## Complete current-catalog disposition under B

This inventory is for migration accountability. Standalone rows have no umbrella assignment. “Incorporate” is a proposed source-composition destination, not an installation already changed. All invocation policies refer to the current AFK default catalog baseline.

| Current entry | Policy | Proposed disposition |
|---|---|---|
| `afk-cli` | manual | Standalone |
| `afk-animated-driven-frontend` | manual | Standalone; preserve co-direction workflow |
| `afk-ask` | manual | Standalone |
| `afk-code-grill` | manual | Incorporate into Decide |
| `afk-design-grill` | manual | Incorporate into Decide; preserve visual commitment |
| `impeccable` | auto | Standalone; full payload |
| `afk-create-agent` | manual | Standalone |
| `afk-to-spec` | manual | Incorporate into Prepare |
| `afk-to-tickets` | manual | Incorporate into Prepare |
| `writing-for-humans` | manual | Standalone |
| `afk-implement` | manual | Standalone; preserve tracked workflow |
| `afk-compass` | manual | Standalone navigation |
| `afk-architect` | auto | Standalone |
| `afk-profile-use` | manual | Standalone |
| `truss-evaluation` | auto | Standalone by explicit preference |
| `diagnosing-bugs` | auto | Standalone |
| `shadcn` | auto | Standalone |
| `plannotator-guide` | manual | Standalone |
| `orchestrator` | manual | Standalone |
| `bro` | manual | Incorporate into Context |
| `facts` | manual | Incorporate into Context |
| `readback` | manual | Incorporate into Context |
| `recap` | manual | Incorporate into Context |
| `clean-room` | manual | Incorporate into Decide |
| `design-artifact` | auto | Standalone |
| `show-me` | manual | Standalone |
| `html-wireframe` | manual | Incorporate into Mock |
| `html-prototype` | manual | Incorporate into Mock |
| `tdd` | auto | Standalone |
| `research` | auto | Standalone |
| `source-driven-development` | auto | Standalone |
| `doubt-driven-development` | auto | Standalone |
| `code-simplification` | auto | Standalone |
| `review-animations` | manual | Incorporate into Review |
| `animate` | auto | Standalone |
| `apple-design` | manual | Standalone |
| `animate-text` | manual | Standalone; portable text-motion resource |
| `writing-for-agents` | auto | Standalone |
| `wizard` | auto | Standalone |
| `to-questionnaire` | manual | Incorporate into Decide |
| `teach` | manual | Standalone |
| `grill-with-docs` | manual | Incorporate into Decide |
| `grill-me` | manual | Incorporate into Decide |
| `prototype` | auto | Standalone |
| `handoff` | manual | Incorporate into Context |
| `wayfinder` | manual | Standalone; preserve decision graph workflow |
| `afk-code-review` | auto | Standalone; preserve Standards/Spec |
| `afk-code-review-verdicts` | manual | Incorporate into Review |
| `afk-static-review` | manual | Incorporate into Review |
| `grilling` | auto | Standalone |
| `domain-modeling` | auto | Standalone |
| `codebase-design` | auto | Standalone |

Arithmetic after a completed migration: 18 manual entries become 5; 34 existing entries stay independent; 2 new specialists are added. That yields **41 catalog entries: 19 automatic and 22 manual**, versus 52 today. This is not a target or token-saving claim. Temporary aliases, additional profile packages, independently installed old skills, and future selection choices can change the actual discovery footprint.

A's concrete version would replace 23 existing entries with 6 composed entries, then add the same 2 specialists: 37 catalog entries. Its stronger domain consolidation saves four more entries than B in these examples; that alone does not justify the added automatic-routing and maintenance changes. C with the two new specialists would have 54. Default-install counts are not inferred from these figures.

Profile-only packages (Stitch, HTML, Video, Remotion) are outside this count and remain independently configured. The HTML profile's package installation could reintroduce old HTML skill entries; the migration must reconcile profile packages and callers before claiming the old entries have disappeared. The uncataloged authored `afk-structured-debugging` needs an explicit preservation/retirement decision before any old-tree cleanup. Never infer deletion permission from absence in the 52-entry catalog.

## Worked routing comparisons

These are source-informed walkthroughs, not executed agent benchmarks.

| Request / situation | A | B | Main implication |
|---|---|---|---|
| User explicitly requests a documented interview | Decide loads selected wrapper and independent primitives | Same | Both reduce manual wrapper selection without needing to absorb Grilling |
| Ordinary conversation raises a question worth challenging | Independent Grilling can still be selected | Independent Grilling remains unchanged | Manual Decide is not a mandatory gate |
| Review changes against the issue and repo rules | New automatic Review must select the technical contract | Existing automatic code review retains its contract | B has less automatic behavioral change; A offers more centralized review |
| Explicitly request animation review | Motion review mode | Manual Review motion mode | Both need narrow reference loading; neither should implement fixes |
| Animate a drawer | New automatic Motion build mode | Existing automatic Animate | A can centralize shared policy; B preserves the existing trigger |
| Compare rough real-app variants, then a polished standalone flow | Unified Prototype selects different methods | Independent Prototype, then manual Mock | A is cleaner at this boundary; B relies on explicit review purpose |
| A task requires authorized independent workers | Architect stays independent | Architect stays independent | Both must preserve before-spawn rules/callers, not just metadata |
| User asks for a recap | Context selects brief recap | Same | No handoff artifact or readback gate should appear |
| User asks for a fresh independent decision | Decide clean-room mode | Same | Neutral brief/no inherited conversation remain required |
| User requests full Impeccable work | Independent Impeccable | Independent Impeccable | Neither alternative should reduce its breadth |
| Write a guide for developers / instructions for agents | Separate writing skills | Separate writing skills | Audience distinction stays discoverable |
| Run behavior QA / document actual product behavior | Manual Verify / Product Description | Same | New capability value is independent of which architecture wins |
| Fix one typo | Ordinary implementation | Ordinary implementation | No umbrella or workflow ceremony required |

## How B would be packaged and maintained

Develop in an isolated experimental tree alongside the current canonical source. Exact directory and publication exclusion mechanics belong in the implementation spec. Do not expose drafts through ordinary discovery, setup, or publication. Carry relevant current-system fixes forward deliberately. Switching the default does not require deleting retained standalone authored skills.

For each composed manual entry, keep an AFK-owned short root, selected internal methods, and source-provenance records for each incorporated file. A method's calls to independent capabilities belong in capability dependency metadata; the incorporated files belong in a separate source manifest. The existing `composes` expansion supports dependency selection, not runtime invocation enforcement. Do not use it to claim that source material was loaded or executed.

Record upstream repository/path/commit, source and carried-content checksums as appropriate, classification, pristine copy/patch or derivation, notices, and conflict rulings. Track multi-source lineage. For PE-derived material distinguish PE's original contribution from inherited upstream material. Standalone dependencies keep their own package identity; record supported/tested versions where interoperability matters without copying their source simply to pin it.

A future watcher compares pinned inputs with upstream changes and creates reviewable notices or proposed updates. It does not silently accept changes or resolve AFK rulings. Acceptance updates carried material and its recorded provenance together. Integrity establishes expected bytes; behavior evaluation establishes whether the adaptation still works.

Independent dependencies must actually be available in each supported installation. Explicit umbrella invocation is intended to authorize its selected documented behavioral composition, but hosts' manual-invocation semantics must be tested; do not assume those semantics are identical. A dependency missing at runtime should yield a clear setup path or an honest coverage limit, never a silent claim that its method was applied.

## Migration requirements

Provide a user-runnable AFK migration tool with the release. It must show old-to-new mappings, find catalog/profile/rule/caller references, distinguish AFK-managed installations from unrelated same-named skills, detect local modifications, and make repeat runs safe. Preserve a recoverable prior state. Retained manual and all automatic entries are not cleanup targets merely because they are old.

Retire the 18 incorporated entry points only after their replacements are complete and tested. Compatibility aliases must target the exact old operation, including its confirmation/side-effect boundaries, rather than invoke an ambiguous bare umbrella. Aliases should be an explicit transitional choice: permanently retaining all old descriptions plus all new umbrellas would undermine the proposed simplification.

The HTML profile and Wayfinder's use of independent Prototype need particular attention. User-created catalogs remain user-owned; the migration offers mappings and preserves overrides instead of replacing their catalog with AFK defaults. Public IDs, exact folder layout, invocation flags for new skills, and default-install selections are finalized in the implementation spec after this architecture is accepted.

## Evaluation before changing the default

Evaluate C, A's changed domain routes, and B's proposed groups on the same representative prompts, including paraphrases and negative cases. Use fresh contexts and the relevant Astra plus other model/harness combinations AFK supports. Keep project fixtures and task scope comparable. Do not substitute an author's source walkthrough for a runtime result.

Observe separately:

1. Entry selection from visible metadata or explicit invocation.
2. Internal mode selection and which references/dependencies were actually loaded.
3. Required behavior at the action boundary: before spawning, issuing a verdict, writing a handoff, or approving fidelity.
4. Completion, lost requirements, unnecessary questions, unrequested side effects, and unwanted extra methods.
5. Description size, loaded instruction size, latency, and measured token/cost data when available.

Every selected method needs a reachability case; each confusing neighboring pair needs a discrimination case. Include delegation entered through another workflow, ambiguous bare invocation, a missing dependency, an old alias, a user-modified invocation policy, and a simple task that should not load the umbrella. No readback should appear on an ordinary implementation task; no file should be generated for a recap; no independent decision should inherit the conversation.

Keep roots and descriptions short, and load only the selected method. If a member remains discoverable only by substantially expanding a description, split it or keep it independent. Manual metadata is not assumed absent from host context. Source review suggests B has a smaller change boundary, not that all 19 automatic skills already route perfectly.

Do not pin authored wording/headings in tests. Test discovery, installation, dependency resolution, provenance integrity, and observable routing/execution outcomes. Compare new manual groups to Compass plus existing direct skills. A group should not ship merely because it passes file/link checks.

## What is decided, recommended, and still open

**Carried user requirements:** scope is the default catalog; explicit standalone preferences win; Truss stays isolated; writing audiences stay distinct; library/tool integrations do not need umbrellas; Impeccable's full breadth matters; short discovery descriptions matter; Verify and Product Description are strongly favored; source integrity and user migration are required; additional enrichment waits.

**My recommendation for this round:** choose B, implement the five manual groups described here, retain the standalone rows without umbrella assignments, and adapt the two PE specialists. This supersedes the first capability taxonomy and its scattered candidate/deferred tables.

**Approval still needed before implementation:** accept or amend B and the proposed memberships, especially Decide's visual/clean-room modes, Context's grouping, and Mock's remaining boundary with Prototype. These are reviewable choices in this proposal, not unanswered analysis work. Working names can change without changing the architecture.

**Implementation questions that remain:** exact package layout and exclusions, supported-harness invocation behavior, new default-install selections, source/license pins, watcher and migration design, compatibility aliases, and measured routing results. No catalog, installed skills, or execution rules were changed by drafting this proposal.

## Evidence and verification of this proposal

- [Current catalog](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/packages/afk/catalog/skills.json), [profiles](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/packages/afk/catalog/profiles.json), [dependency expansion](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/packages/afk/src/manifest.ts), [categorization](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/packages/afk/src/skills/categorization.ts).
- [Compass](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/skills/afk-compass/SKILL.md), [frontend crossroads](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/skills/afk-compass/references/frontend-crossroads.md), [workflow crossroads](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/skills/afk-compass/references/workflow-crossroads.md).
- [Architect](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/skills/afk-architect/SKILL.md), [technical grill](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/skills/afk-code-grill/SKILL.md), [design grill](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/skills/afk-design-grill/SKILL.md), [review verdicts](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/skills/afk-code-review-verdicts/SKILL.md), [implementation](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/skills/afk-implement/SKILL.md).
- [Original PE/AFK research and agreed requirements](../research/pe-skills-afk-opportunities.md), [pinned PE source audit](../research/pe-skills-source-audit.md), [glossary](../references/afk-next-composition-glossary.md).

Relevant external skill bodies were inspected in the installed local skill installation snapshot, not asserted to be latest upstream. No fresh PE upstream update or execution benchmark was performed. The 52-entry mapping, invocation classifications, group counts, and local document links are mechanically checked. Behavioral comparisons above remain analytical predictions to test.
