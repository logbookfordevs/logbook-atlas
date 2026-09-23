# Logbook for Devs · Atlas: proposal 3.1

Status: capability-review phase complete. Agreed direction for the next source-composition refinement; no catalog migration or skill implementation yet.
Date: 2026-09-22.
Inventory: the current default-catalog manifest contains 52 entries: 33 manual and 19 automatic. “Default catalog” includes optional entries; it does not mean all are installed by default.

## Identity and development home

Formerly **AFK Next**. The formal brand is **Logbook for Devs**, the collection is **Atlas**, and its human-facing identity is **Logbook for Devs · Atlas**. `logbook` is the friendly artifact namespace, not a replacement for the formal brand.

Develop the replacement catalog in the new **`logbook-atlas` repository**, rather than an experimental folder in this repository. Keep the current `skills/` and current catalog operational and intact until a separately reviewed cutover. Port relevant fixes during parallel development. This changes the planned development home; it does not mean content has already been moved or the new catalog implemented. The proposal and accompanying research now live in this Atlas repository under docs/specs and docs/research. Historical afk-next filenames are retained for continuity. Links to reviewed AFK source files identify the original repository, not newly implemented Atlas skills.

Atlas owns the curated catalog, including skills and other catalog assets such as rules, profiles, and agent definitions. AI Field Kit remains the general-purpose CLI, capable of using other catalogs; Atlas is its intended default catalog, not a requirement for using AFK. Atlas workflow packages remain installable through the standard skills CLI without requiring AFK.

New composed workflow identifiers use `logbook-*`: `logbook-investigate`, `logbook-decide`, `logbook-plan`, `logbook-design`, `logbook-implement`, `logbook-diagnose`, `logbook-review`, `logbook-verify`, `logbook-document-behavior`, `logbook-learn`, `logbook-clarify`, and `logbook-configure`. Human-facing capability names stay plain. Existing upstream names and legacy identifiers in the migration inventory remain unchanged as provenance; independent entries are not automatically renamed.

Existing tool identities and executable names remain AFK / `afk`, Waypoint / `waypoint`, and Yggtree / `yggtree`. Publisher ownership does not require adding a prefix to those commands. Atlas replaces the earlier proposed repository names `ai-field-kit-catalog` and `logbook-skills`; the current repository name is `logbook-atlas`.

## Direction

Preserve the substantive workflow direction while refining its boundaries. Communicate is withdrawn; twelve workflow entrances remain, including the accepted manual Clarify umbrella. Separate **source ownership**, **independent entry points**, and **invocation policy**. Existing manual/automatic settings are evidence about current use, not the boundary of the new architecture.

Recommend absorbing seven currently automatic entries, retaining twelve as independent automatic capabilities, and using a mixed invocation policy for the twelve workflows: six automatic and six manual. Retire Compass's separate default-catalog entry after moving its useful routing knowledge into workflow methods and shared rulings. Also retain Writing for Humans and Handoff as independent manual skills. Keep four independent manual tool packages: AFK CLI, AFK Ask, Plannotator Guide, and Orchestrator. Fold Profile Use and Create Agent into AFK CLI as references, following Leonardo’s annotation.

Here, Leonardo's phrase “convert an automatic skill to manual” means **absorb its method and retire its separate entry point**. It does not mean installing a manual copy first. Once absorbed, the method has no independent invocation flag; the enclosing workflow's entry policy is decided separately.

Atlas owns reconciliation: where methods overlap, which one applies, which evidence counts, and how decisions survive handoffs. Agents apply authored rulings rather than rediscovering conflicts on every run. Preserved source files, traceable patches, and Atlas-authored methods all remain available techniques. Independence is still valuable for coherent external systems, shared expertise, and tool/library packages.

The [third proposal](afk-next-capabilities-round-3.md) preserves the prior membership and all-manual recommendation for comparison. Version 3.1 develops that same architecture; it does not add or remove umbrellas. These recommendations are concrete choices for review, not catalog or installation changes already made.

## Comparison with the first capability map

The first map proposed eleven work capabilities and three supporting capabilities: fourteen total. Round three reuses twelve of those names and adds Describe as an explicit workflow, now named Document Behavior. Two previous capabilities are incorporated into other workflows rather than removed as operations:

| First map | Third proposal |
|---|---|
| Specify | Spec synthesis is a method within Plan |
| Continue | Context transfer remains in independent Handoff; recovery remains with Implement, Plan as relevant |
| Existing-behavior documentation within broader communication scope | Document Behavior is now an explicit workflow, drawing on PE Product Description |

Investigate, Diagnose, Decide, Design, Plan, Implement, Review, Verify, Learn and Configure retain their names, although their boundaries and composition are revised. The first map described capabilities without committing to one skill per row; round three proposed manual workflow entries; version 3.1 chooses invocation policy independently. Thus the change is fourteen capability labels to twelve proposed workflow entries, including Clarify, not a simple rename of an already approved catalog.

## Architecture: three different responsibilities

| Responsibility | What Atlas owns | What it does not imply |
|---|---|---|
| Source composition | Selected source material, regardless of its former invocation policy, with adaptations, methods, assets, scripts, and provenance | Copying every upstream file or retaining every upstream root as a nested skill |
| Behavioral composition | Explicit use of independent capabilities, the task given to each, relevant conditions, and integration of results | Absorbing those capabilities or losing their direct invocation |
| Editorial policy | Conflict rulings, contextual priorities, output contracts, and compatibility decisions | A generic “use your judgment” instruction or a hierarchy overriding user/host instructions |

Recommend retiring Compass as a separate default entry at cutover. Its crossroads already encode valuable decisions; incorporate those into the actual workflow methods, shared rulings, and human-facing catalog documentation. Preserve the ability to explain a route without installing another general router. If testing exposes an unsolved navigation job, reconsider a focused entry then. Retirement is conditional on transferring its knowledge and updating its callers, not on assuming fewer names are automatically better.

A short workflow root can select a method while the package contains substantial functionality. Keep source ownership separate from activation: an upstream auto skill may become an internal method, and a workflow composed mostly from manual sources may be automatically selectable. User-local invocation overrides do not restructure files or source ownership.

## Invocation recommendations

**Automatic** means the agent may select the entry when the request matches its description; explicit invocation remains available where the host supports it. **Manual** means user-selected entry into that workflow. Neither means permission for unrequested actions, automatic execution of all modes, or immunity from host restrictions.

My criterion is whether entering the workflow follows naturally from the requested deliverable, or introduces a deliberate working arrangement, persistent process, or extra reporting commitment. This is an editorial recommendation, not a claim that the current model already routes reliably.

| Workflow | Default | Entry boundary and rationale |
|---|---|---|
| Investigate | **Auto** | A bounded research/evidence question warrants investigation. Ordinary reading during another task does not start a separate research engagement. |
| Decide | **Manual** | A deliberate challenge/interview process should not activate whenever a task contains a choice. Independent Grilling remains available for ordinary explicit grilling requests. |
| Plan | **Manual** | Deliberately request a specification, executable tickets, or both from agreed direction. |
| Design | **Auto** | Requests for design alternatives, prototypes, or focused interaction motion should reach the composed methods without requiring knowledge of AFK commands. Cinematic production and its gates require the corresponding user intent. |
| Implement | **Manual** | Explicit workflow entry supports direct or tracked mode. Tracking requires an explicit request or an existing tracked implementation; invoking the umbrella alone does not select it. |
| Diagnose | **Auto** | A reported failure or requested debugging should reach the preserved causal loop. Artifact depth follows the actual incident, not the existence of an umbrella. |
| Review | **Auto** | A requested technical/interface review has a clear result. Select the relevant lens; do not add all review modes or a findings-discussion gate to every code edit. |
| Verify | **Manual** | A reusable evidence/reporting run is a distinct commitment. Ordinary tests and browser checks should not automatically create the PE-style report lifecycle. |
| Document Behavior | **Auto** | Explicit requests to document existing product behavior have a distinct output. “Describe this function” is ordinary explanation, not product documentation. |
| Learn | **Auto** | Requests for teaching or visual explanation fit directly. A one-off explanation stays one-off; persistent learning starts only when that engagement is requested. |
| Clarify | **Manual** | User-selected conversational clarification; select a reference from ordinary language without requiring source names. |
| Configure | **Manual** | Optionally initialize shared project context through guided setup. Other skills still initialize missing context on demand when Configure is not invoked. |

These flags govern public workflow entry, not every use of an internal method. A requested workflow can use a declared reusable method from another package within its existing scope. On hosts that prohibit model invocation of manual skills, callers must not invoke those manual roots or read them to bypass the restriction. Package reusable methods as explicit non-entry resources with bounded contracts, accessible under the caller's authorized operation. Do not export the entire gated workflow under another name. If a supported host cannot represent that boundary, use an explicit user invocation or omit that integration on that host; never claim the flag was enforced when it was bypassed.

For example, Implement can consume Review's technical method and verification evidence without launching Verify's manual report workflow. A user who selects Verify can request the complete evidence report. A method dependency must be installed and addressable; catalog `composes` alone is not proof of this behavior.

### The overlap that most needs testing: Design and Impeccable

Keep Impeccable complete and automatic, but use an AFK-maintained discovery adapter to make their entry boundaries complementary. Design's discovery focuses on alternatives, experiments, visual commitments, and focused motion; Impeccable remains the direct specialist for interface realization, critique, audit, polish, and its named modes. A selected Design engagement may still use those full Impeccable capabilities.

This requires a concrete, narrowly scoped description/metadata adaptation and matching rulings; the current broad Impeccable description does not already provide that separation. Record the adaptation and test it. Preserve user-named Impeccable invocation and its runtime/agents. If dual automatic entry remains unreliable, my fallback is to make Design manual while retaining full automatic Impeccable, rather than gutting Impeccable or pretending the overlap disappeared.

### Why not all manual or all automatic?

All manual would put discovery of replacement diagnosis, research, and prototype methods back on the user. All automatic would risk selecting tracked delivery, persistent planning, or formal reporting when those operating arrangements were not requested. A mixed policy preserves natural discovery where the job is clear and deliberate entry where the workflow adds a larger commitment. PE's policy is useful reference evidence, not a rule that AFK must copy.

## Proposed capability surface

All twelve entries below are proposed workflows with the individual invocation defaults above. Names are working labels. Some incorporate several sources; others add an Atlas-owned method around independent capabilities. A workflow need not have several source ancestors to have useful functionality.

| Workflow | Description sketch | Functionality it owns |
|---|---|---|
| **Investigate** | Establish what is known, what conflicts, and what evidence answers a question. | Frame the question, reconcile sources, resolve evidence gaps, produce a grounded answer or investigation record |
| **Decide** | Resolve an open decision through challenge, evidence, and explicit trade-offs. | General and technical interviews, multi-session decision maps, external questionnaires, decision rationale |
| **Plan** | Turn agreed direction into specifications and executable slices. | Spec synthesis, acceptance criteria, vertical slices, and ticket dependencies |
| **Design** | Explore interface alternatives, build prototypes or focused interaction motion, and preserve selected design commitments. | Direction interviews, rough experiments, wireframes, fidelity prototypes, motion, cinematic production, design commitments |
| **Implement** | Deliver a scoped change with the tracking and evidence the work needs. | Execution ownership, recovery, dependency frontier, implementation evidence, review and acceptance state |
| **Diagnose** | Establish the cause of a failure and prove the recovery. | Incident scope, reproduction, competing explanations, causal evidence, repair handoff and recovery checks |
| **Review** | Assess a change or interface and adjudicate findings against evidence. | Technical verdicts, static findings, motion and interface critique, fidelity comparison, distinct review axes |
| **Verify** | Check specified behavior and produce an inspectable evidence report. | Check selection, execution, expected/observed results, coverage, report data and rendering |
| **Document Behavior** | Document how an existing product behaves and how that account was verified. | Outside-in behavior documentation, states, interrupts, evidence, unknowns, defect triage |
| **Learn** | Teach a requested topic through visual explanation, practice, or an ongoing learning engagement. | One-session explanation and multi-session learning, lessons, exercises, learning records |
| **Clarify** | Restore understanding of the current exchange. | Simplification, critical implications, request readback, and short recap |
| **Configure** | Proactively establish shared context expected by the selected skills. | Guided preferences, domain dictionary, relevant product/design context, agent instructions, and document validation |

This restores a broad happy-path proposal. It is not a mandatory fixed-stage pipeline. A user may enter any workflow directly, ask for several outcomes together, or invoke an independent capability. Broad coverage comes from conditional methods, not a long checklist imposed on every request.

## What each workflow contains

### Investigate

Add an Atlas-owned investigation method: define the question and evidence standard, inventory relevant sources, distinguish disagreements from missing information, investigate the material gaps, and report the answer with its limits. Incorporate Research for primary-source gathering. Use independent Domain Modeling for terminology and Truss for consequential trade-offs. Reuse Implement’s source-verification method and Decide’s adversarial method when needed, without duplicating their source or starting their manual workflows.

The output is a resolved question or a precise account of what remains unknown. Investigation may support any other workflow without forcing a separate task or report. It does not silently become an interview, an incident response, or implementation. Preserve Research’s primary-source findings and repository-aware artifact placement. Patch its unconditional background-agent requirement into a delegated mode selected when authorized and useful; a caller already running inside a research worker must not recursively spawn another researcher. The bounded direct method answers the same evidence question without mandatory delegation.

### Decide

Compose `wayfinder`, `grill-me`, `grill-with-docs`, `afk-code-grill`, `to-questionnaire`, and the selected methods of `doubt-driven-development`. Preserve the differences between ordinary challenge, domain/ADR recording, technical trade-offs, and questions for someone who holds missing knowledge. Use independent Grilling, Domain Modeling, Codebase Design, and Truss at the corresponding boundaries.

Doubt Driven Development is an in-flight decision-quality discipline that also applies during implementation; its presence in current Implement is not inherently a mistake. Decide is the proposed source owner, not its exclusive use phase. It becomes an explicit adversarial method, usable during implementation as well as planning, rather than a broad automatic trigger on every non-trivial step. Preserve fresh-context challenge, evidence-backed reconciliation, and the stronger repeated-checking posture when explicitly selected. Patch its activation, host-specific calls, and redundant approval/model-selection rituals; do not describe a single bounded challenge as the full continuous posture.

Atlas owns how evidence changes the decision, the accepted trade-off, rejected alternatives that matter, and the condition that would reopen it. Questionnaire mode collects the recipient and information gap; it does not repeat a full subject interview or send the document without authorization. Visual decisions are owned by Design, whose method can be used within an ongoing decision engagement without duplicating its source.

Wayfinder belongs in Decide: it maintains a multi-session map of unresolved decisions, a frontier, named resolutions, and continuity until the route is clear. Use this mode only when the effort needs that persistent structure. Its decision tickets are not implementation tickets. Preserve tracker adapters; adapt research and prototype calls to locally packaged Investigate and Design methods. Grilling and Domain Modeling remain independent dependencies. Keep each decision in one authoritative place.

### Plan

Compose `afk-to-spec` and `afk-to-tickets`. Turn agreed direction into a reviewable specification, executable tickets, or both; neither output requires the other. Preserve rationale, intended behavior, acceptance criteria, test seams, vertical slices, and dependency edges.

Keep the name Plan. Its boundary is preparation of concrete work from sufficiently settled direction; Decide owns discovery and Wayfinder decision maps. Surface gaps without silently settling consequential choices. Use Decide’s bounded method when a substantial open decision blocks the requested artifact. Preserve Domain Modeling for shared terminology. Planning does not authorize execution.

### Design

Compose `afk-design-grill`, `html-wireframe`, `html-prototype`, `apple-design`, `animate-text`, `prototype`, and `animate`. Independent Animated Driven Frontend supplies the distinct cinematic workflow when deliberately selected. Carry useful scripts, effect specifications, assets, and mode references as needed, with source provenance; do not reduce those packages to summarized prose.

Design owns the brief, fixed application shell, variable surface, approved reference, must-preserve details, motion intent, and what each artifact can establish. It selects and executes a fitting method, then carries its decisions into realization or handoff. Its functionality includes visible alternatives, recorded visual commitments, bounded interactive artifacts, and cinematic production continuity.

Use **full independent Impeccable** for its relevant shape, craft, implementation, iteration, audit, polish, and other supported modes. Use incorporated **Prototype** material for question-first rough or real-app experiments and **Animate** material for bounded animation construction, with independent **Design Artifact** for HTML craft. AFK supplies the task, fidelity contract, and relevant rulings; it loads the selected method and only the relevant independent capabilities.

Proposed rulings:

- Rough experiments answer structural or behavioral questions; they do not approve visual fidelity. File format and production framework do not decide the route.
- Wireframes compare structure. Fidelity prototypes establish the selected surface or bounded flow at the required states and viewports.
- The selected visual reference governs subsequent realization. An inherited preference for roughness cannot erase that commitment.
- Surface motion direction precedes component construction when direction is unresolved. A named component animation does not require a whole-surface redesign.
- Apple-derived interaction guidance informs gestures and continuity; it does not impose Apple's visual identity on every project. Animate Text's portable contracts do not authorize copying showcase chrome or demo copy.
- Keep ADF independent and manual, renamed `logbook-animated-driven-frontend` (Animated Driven Frontend; ADF). Design may identify a fitting cinematic engagement and offer this route. Begin it only when explicitly selected or already authorized; preserve its co-direction, binder, creative gates, and Workprint exception. Do not silently load its full workflow during ordinary Design work. This is conditional behavioral composition, subject to host invocation restrictions, not source absorption.

Impeccable remains directly usable in full. Design provides AFK's engagement and cross-method continuity around it. Where a maintained dependency's instructions genuinely conflict with the selected contract, use a tested supported mode, narrow adapter, or separately traceable compatibility patch. Do not pretend a caller sentence reliably cancels every instruction inside an unchanged dependency.

Prototype and Animate are recommended for absorption now. Their direct entries retire only after both their original operation coverage and migrated callers work. Logic/state experiments remain first-class even when they produce no conventional visual-design deliverable. Preserve Animate’s purpose, interruption, exit, and reduced-motion behavior. A tiny transition loads the motion method, not a full design interview.

### Implement

Accepted mode selection: an explicit tracking request or resumption of an existing tracked implementation selects tracked mode. A bounded implementation request without a tracking commitment selects direct mode. Invoking `logbook-implement` alone does not imply adoption of a tracking lifecycle. Both modes require appropriate implementation quality and verification; tracked mode adds durable continuity and its acceptance contract.

Evolve `afk-implement` into this workflow, retaining its source identity where useful. Preserve its durable implementation record, interruption recovery, tracking ownership, acceptance contract, and exact review basis. Add clear integration with the revised Plan, Design, Review and Verify contracts rather than creating a second tracking system.

Incorporate Source Driven Development as the source-backed implementation method. Use independent TDD, Codebase Design, Code Simplification, and relevant frontend capabilities conditionally; consume Review’s technical method instead of the retired Code Review entry. Reuse Decide’s adversarial method for a selected execution posture. Preserve version checks, primary-source evidence, and applicable citations, while patching blanket per-decision browsing and repeated routine-choice questions into evidence-sensitive reads. Track source verification and coding decisions separately so another workflow can reuse evidence without launching implementation. Keep tracked mode's intentional gates intact. Proposed direct mode supports a bounded implementation without durable tracking; it is an explicit adaptation, not an unnoticed weakening of the existing tracked workflow. Ordinary implementation outside the manual workflow remains available.

Design governs an approved visual commitment; Implement owns engineering completion and the execution record when it is the active delivery owner. A cinematic production retains its creative gates. Passing tests does not constitute creative approval, and a design selection does not establish implementation correctness.

Implement conditionally uses Review’s locally packaged finding-resolution method after confirmed fixes when material uncertainty remains; see Review’s bounded re-check contract. Routine fixes with decisive validation do not automatically trigger it.

### Diagnose

Incorporate `diagnosing-bugs` as Diagnose’s core causal method, then add the AFK investigation-to-recovery contract. It owns incident context, impact and scope, evidence that distinguishes causes, the boundary between diagnosis and authorized repair, and a reproducible recovery check.

Use Investigate’s research or Implement’s source-verification method where external behavior matters, Truss for consequential repair choices, and Verify for a requested reusable evidence report. A diagnosis-only request ends with evidence and a repair proposal; an authorized fix continues through repair and relevant checks. The automatic Diagnose entry replaces the direct debugging trigger. Preserve the tight pass/fail feedback loop and hypothesis testing. Use those without incident paperwork for a focused bug; add durable incident evidence when the task needs it.

### Review

Compose `afk-code-review`, `afk-code-review-verdicts`, `afk-static-review`, and `review-animations`, with selected PE interface, hostile-state, and fidelity material. Preserve incorporated AFK Code Review’s Standards and Spec method; use Impeccable's relevant review capabilities and Truss where appropriate.

Own the scope, evidence collection, per-finding adjudication, and distinction between technical correctness, fulfillment of intent, interface craft, and fidelity. Preserve the verdicts method's complete original review output and distinguish finding verification from discovering additional issues. A motion finding requested during Design uses this shared review method rather than a second diverging copy.

Review-only work does not silently change product code. An authorized fix request may continue into implementation. Scratch harnesses must have an appropriate permitted surface; adapting PE requires resolving its conflicting source instructions, not carrying both forward.

#### Accepted method: verify finding resolution

Review owns a bounded method for re-checking fixes to previously adjudicated findings. Implement owns the decision to request it after fixing confirmed issues and running relevant checks. It applies to both direct and tracked implementation and can also be explicitly requested through Review.

Use it when another reviewer pass resolves material uncertainty: subtle correctness issues, disputed interpretations, cross-component fixes, or a risk that the new regression test misses the original failure. Straightforward corrections with decisive validation do not require another reviewer pass. Do not restart a full review after every edit or repeatedly seek reassurance without new evidence.

Provide the original finding, the fix delta/current revision, and validation evidence. The reviewer inspects the updated code, checks the original failure mode, and examines nearby regressions introduced by the fix. Return resolved, still present, or insufficient evidence with the supporting observations. Distinguish code/test verification from visual or live-system checks. Broaden scope only when the fix materially expands the affected behavior.

Prefer the original reviewer for targeted closure when available: it retains useful context. This is continuity, not a fresh independent opinion; use a fresh reviewer when unresolved disagreement or risk calls for another perspective. Stop once findings are resolved with adequate evidence. If evidence remains insufficient, report the gap rather than loop until a reviewer approves. This is an accepted conditional method, not a mandatory second full review or a claim of proven token savings.

### Verify

Naming decision: retain Verify and its current evidence-and-checking scope. Broad exploratory QA is not added by this naming discussion.

Leonardo endorsed bringing PE Verify into this manual workflow and expects to enrich it later. Adapt it with named checks, source revision and target, expected/observed results, execution evidence, explicit skipped/not-run states, and reusable report data/rendering. Integrate existing checks and browser capabilities instead of forcing one capture stack or viewport.

Verification supplies evidence to Implement, Diagnose, Document Behavior, and Review. None must run the full reporting workflow when ordinary checks already meet the request. Schema validity is not execution evidence; source inspection is not a browser run. Existing reports are reused when their revision, target, and coverage remain applicable.

#### Accepted Verify modes

- **Check now:** execute checks against a defined scope and report expected versus observed behavior with supporting evidence. Reuse suitable existing tests. Live agent-driven interaction is one execution technique, not a required browser stack.
- **Make repeatable:** create or adapt bounded executable tests or scripts for the requested verification, provide rerun instructions and prerequisites, and validate them where possible. Report separately what was authored, executed, passed, failed, or could not be run.

The modes may be combined: inspect a flow interactively, then encode stable assertions for later regression checks. A request for a current check does not automatically require creating a permanent suite. Authoring a script does not establish that it ran and does not schedule future execution. Manual invocation still governs entry into this workflow; routine verification within other work need not launch its full reporting process.

#### Tool selection and composition

Verify owns scope, expected outcomes, evidence requirements, coverage gaps, and reporting. Execution tools supply observations, browser interaction, test execution, screenshots, traces, or other relevant evidence. Tool-specific skills remain independent; excluding them from source absorption does not exclude their use by workflows.

1. Honor explicit user choices and repository tooling preferences within host constraints.
2. Reuse suitable existing tests and available tools rather than require a new stack.
3. When a selected tool has an applicable independent skill, use it through behavioral composition. Examples include Agent Browser and Playwright CLI guidance; these are selectable alternatives, not mandatory simultaneous dependencies or newly adopted catalog entries.
4. Direct use of available browser/MCP tools is tool use, not inherently skill composition. A separate skill is optional when tool instructions already supply adequate guidance.
5. Check that the selected mechanism can establish the required evidence. Disclose missing capabilities or blocked checks; do not silently substitute weaker evidence or assume uninstalled tools are available. Tool installation and environment redesign are not implicit in choosing Verify.

Do not vendor browser-tool instruction packages into Verify by default. Atlas authors the selection and evidence policy; independently maintained tool skills retain their instructions and direct entry points. Users can choose alternatives. Keep this dependency set conditional and open to future tooling, rather than hard-code a fixed browser provider. The earlier empty independent-skills list was an incomplete dependency account, not a requirement that Verify avoid tooling.

WebMCP site-provided operations and browser interaction are distinct evidence surfaces. Successful execution of a structured site operation alone does not prove that its visible form, keyboard interaction, or layout works. Tool choice must follow the behavior being verified. See [Chrome’s WebMCP explanation](https://developer.chrome.com/docs/ai/agents).

#### Repeatability and implementation boundary

Support reusable checks with meaningful assertions, documented setup and invocation, and appropriate control of test data, initial state, environment, and cleanup. Prefer the repository’s existing test framework and conventions. Playwright tests are one possible implementation, not a requirement; see [Playwright test authoring](https://playwright.dev/docs/writing-tests). An agent may author a test that later runs without an agent. CLI versus library versus MCP does not by itself determine whether a check is repeatable.

Use “repeatable automated checks” rather than guarantee determinism merely because execution uses scripts. Record the target environment and source revision when available, evidence from the actual run, and remaining coverage or reproducibility limits. A valid report or generated script is not execution evidence; a passing operation without the relevant assertions is not proof of the requested behavior.

Verify may author a bounded test or harness needed for the requested verification. Building a substantial testing platform, changing broad infrastructure, or fixing product behavior belongs to implementation work with the appropriate scope and authorization. Report discovered defects without silently broadening a verification request into product repair. These modes preserve the agreed Verify scope; they do not add unrestricted exploratory QA.

### Document Behavior

Naming history: formerly **Describe**. The rename is a discoverability choice, not a scope change; retain the previous name as an option if naming is reconsidered.

Keep this entrance separate from Investigate for human discoverability. Investigate resolves a question with evidence; Document Behavior captures a defined existing product surface with coverage of its flows, states, and exceptions. Learn serves the learner’s understanding. Shared evidence-gathering methods do not require merging these public entrances. The name replaces Describe without changing membership or invocation policy.

Leonardo marked this source-composition direction as looking good. Adapt PE Product Description into an automatically selectable workflow for existing product or feature behavior. Preserve outside-in flows, states, interrupts, terminology, source references, uncertainty, verification status, and suspected-defect triage. Support the repository's documentation location and bounded features.

Use Investigate’s research method and independent Domain Modeling plus independent Writing for Humans when explicitly selected and supported by host invocation policy, and the relevant verification methods when observation is required. Enter the manual Verify reporting workflow only when the user selects it. Keep intended behavior from Plan separate from observed or source-inferred behavior. Remove document-length targets and compulsory separate-repository scaffolding through recorded adaptations.

### Clarify: accepted conversational umbrella

Withdraw the Communicate umbrella. Keep Writing for Humans independent and manual, Writing for Agents independent with its existing automatic policy, and Handoff independent and manual. Neither writing skill is absorbed. Handoff prepares transferable working context; do not force it into another umbrella without a coherent family of sibling operations. Future sources may justify a new umbrella for that purpose.

Compose Bro, Facts, Readback, and Recap as references inside **Clarify** (`logbook-clarify`), a manual entrance. Retire their separate default-catalog entries at the reviewed migration, preserving exact-operation mappings. Description: “Clarify the current exchange: simplify an explanation, surface key implications, restate your request, or recap where we are.”

The accepted rationale is human discoverability: users may struggle to distinguish the four source skills. They can state their need naturally and let Clarify select the appropriate reference. The small authored layer preserves the correct context target and scope; reducing entry count alone is not the justification.

- Bro simplifies the last explanation without changing its meaning.
- Facts briefs the discussed effort’s critical facts and implications; it is not a broad fact-finding exercise.
- Readback restates the user’s request for confirmation without beginning work. Its confirmation pause stays local to that requested operation.
- Recap restores orientation with a short account of recent work and current state, without a mandatory file.

Accept ordinary language rather than require a menu, source names, or explicit mode syntax. Select proportionately; ask a clarifying question only when ambiguity materially changes the answer. Do not turn every invocation into an interview, load every reference, invent facts, or launch research. Clarify does not own general writing or transferable handoffs. Adapt the source skills’ old explicit-name triggers deliberately to the user-selected umbrella; preserve their scoped behavior. Manual entry remains the default, so ordinary conversation does not automatically launch Clarify.

Keeping all four independent was considered and not selected for this iteration. Reassess the name or grouping if real use shows that Facts or Recap cannot be discovered naturally through the concise description.

Across this proposal, the user's word “mode” is shorthand for incorporated reference material. It does not require explicit mode commands, selectors, or one mode per source. Choose conditional references or explicit modes according to the actual behavior; do not impose a mode system merely because the term appeared in discussion.

### Learn

Accepted as proposed in the workflow review.

Compose `teach` and `show-me`. Own the difference between a focused visual explanation and a stateful learning engagement, then add a coherent progression from explanation to practice and retained learning when requested. Preserve Teach's learning mission, lessons, resources, retrieval practice, and records without making them mandatory for “show me how this works.”

Use Investigate’s research method for source grounding and Design Artifact for useful HTML teaching material. A brief explanation remains brief. Other operations may reuse a bounded visual-explanation reference without launching a curriculum.

### Coordinate dropped; Architect and Clean Room independent

Drop Coordinate from the current proposal. A future unmet coordination need may justify a new proposal. Keep Clean Room independent and manual. Retain Architect independently with its automatic policy, renaming `afk-architect` to **`logbook-architect`** at migration. Preserve the existing identifier in source inventory and naming history; update applicable callers and rules at cutover. This is a proposed entry rename, not a live installation change.

Architect owns delegation policy at actual spawning boundaries; Clean Room provides an isolated independent judgment. Workflows can use these independent capabilities when appropriate without launching a broader coordination lifecycle. Reconsider an umbrella if future sibling operations establish a coherent additional job.

### Configure

An Atlas-authored, manually invoked workflow for optional guided initialization or updating of the shared project context that other skills expect. It establishes relevant preferences, vocabulary, product context, design context, and agent instructions proactively. It is not a required onboarding gate, a general environment provisioning workflow, or an adoption of Matt’s setup skill.

Inspect existing project documents and the expectations of the selected skills first. Reuse settled information and preserve user edits. Guide the user through missing decisions in a dependency-aware sequence, creating or updating only the relevant documents:

- `PRODUCT.md`: product audience, purpose, priorities, and boundaries, where expected.
- `CONTEXT.md`: domain vocabulary, concepts, and relationships, where expected.
- `DESIGN.md`: visual and interaction context grounded in the product, where expected.
- `AGENTS.md`: working preferences, repository conventions, and agent-facing instructions.

These filenames are candidate shared surfaces, not a mandatory four-file template or a universal fixed order. Follow project conventions and the selected skills’ actual document contracts. Configure must not invent a parallel set of templates or requirements. Keep each decision in its authoritative document and reference it elsewhere instead of duplicating instructions.

Use independent Writing for Agents for instruction/document craft, Domain Modeling for the dictionary and conceptual model, and the relevant design capability when design context is needed. Wizard applies only to necessary steps a human must perform; ordinary guided questions do not require a wizard. Other independent capabilities are selected only when they serve the initialization. Preserve their invocation restrictions. Substantial unresolved product or design choices may need the appropriate discovery method rather than fabricated defaults to fill a document.

Without Configure, every consuming skill retains its normal on-demand initialization behavior. Missing documents must not force the user to run Configure. With Configure, gather related context coherently, avoid repeated questions, and validate that the relevant documents meet the same expectations those skills would apply individually. Summarize what was established and what remains unresolved; do not claim complete setup for documents or integrations that were not checked.

The implementation should keep the root small and use conditional references as needed. Tool-specific packages remain independent; direct installation or CLI requests use their own capabilities. Configure does not implicitly install tools, redesign the environment, or require extra files unrelated to the selected work.

## Source ownership: every current manual operation

“Incorporate” means preserve the useful operation in Atlas-owned methods with source provenance, not necessarily copy its original root verbatim. This is a proposal, not an installation change.

| Current manual entry | Proposed treatment |
|---|---|
| `afk-cli` | Independent tool package; no umbrella membership |
| `afk-animated-driven-frontend` | Retain independently, manual; rename to `logbook-animated-driven-frontend` |
| `afk-ask` | Independent tool package; no umbrella membership |
| `afk-code-grill` | Incorporate into Decide |
| `afk-design-grill` | Incorporate into Design |
| `afk-create-agent` | Incorporate as a reference/method inside independent `afk-cli`; no umbrella membership |
| `afk-to-spec` | Incorporate into Plan |
| `afk-to-tickets` | Incorporate into Plan |
| `writing-for-humans` | Retain independently, manual |
| `afk-implement` | Incorporate into Implement |
| `afk-compass` | Retire separate entry at cutover; incorporate routing knowledge into methods/rulings and catalog documentation |
| `afk-profile-use` | Incorporate as a reference/method inside independent `afk-cli`; no umbrella membership |
| `plannotator-guide` | Independent tool package; no umbrella membership |
| `orchestrator` | Independent tool package; no umbrella membership |
| `bro` | Incorporate into Clarify |
| `facts` | Incorporate into Clarify |
| `readback` | Incorporate into Clarify |
| `recap` | Incorporate into Clarify |
| `clean-room` | Retain independently, manual |
| `show-me` | Incorporate into Learn |
| `html-wireframe` | Incorporate into Design |
| `html-prototype` | Incorporate into Design |
| `review-animations` | Incorporate into Review |
| `apple-design` | Incorporate into Design |
| `animate-text` | Incorporate into Design |
| `to-questionnaire` | Incorporate into Decide |
| `teach` | Incorporate into Learn |
| `grill-with-docs` | Incorporate into Decide |
| `grill-me` | Incorporate into Decide |
| `handoff` | Retain independently, manual |
| `wayfinder` | Incorporate into Decide |
| `afk-code-review-verdicts` | Incorporate into Review |
| `afk-static-review` | Incorporate into Review |

## Reconsidering all nineteen current automatic entries

Recommend **seven absorptions and twelve retained independent entries**. “Absorb” retires the separate entry in AFK’s revised default catalog; the method survives under the stated owner. It does not install a new manual standalone. “Retain” keeps the independent automatic entry and its useful behavioral composition. This is not a rule that every cross-cutting method must stay independent: the judgment includes overlap, maintained-system value, caller costs, and usefulness outside an AFK workflow.

| Current automatic entry | Recommendation | Rationale and resulting use |
|---|---|---|
| `prototype` | **Absorb → Design** | Reconcile rough logic/UI experiments with wireframes and fidelity prototypes in one owner. Decide uses the bounded experiment contract. |
| `animate` | **Absorb → Design** | Combine construction with gesture and text-motion sources; one policy governs purpose, timing, interruption, and reduced motion. Review reuses that policy. |
| `diagnosing-bugs` | **Absorb → Diagnose** | Its direct job nearly matches the umbrella. Preserve its causal loop behind the new automatic entry instead of keeping competing debugging roots. |
| `research` | **Absorb → Investigate** | Its evidence gathering and findings artifact are the central investigation method. Replace unconditional nested delegation with explicit direct/delegated modes. |
| `afk-code-review` | **Absorb → Review** | One technical review owner can contain Standards/Spec and the existing verdicts/static methods. Migrate tracked implementation’s fixed-base call precisely. |
| `source-driven-development` | **Absorb → Implement** | AFK should own when source verification affects implementation, rather than inherit broad framework triggers and routine questioning. Export a bounded evidence method for other workflows. |
| `doubt-driven-development` | **Absorb → Decide** | Make adversarial challenge an explicit reusable method/posture. Avoid a competing global trigger that imposes recurring review on almost all substantive work. |
| `impeccable` | **Retain auto** | Full maintained system, runtime, modes, and agents retain independent value. Use a narrow discovery adapter for coexistence with Design; preserve direct named use. |
| `afk-architect` | **Retain auto; rename to `logbook-architect`** | Small coordination policy needed at actual spawning boundaries. Preserve rules/callers that require it before delegation. |
| `truss-evaluation` | **Retain auto** | Independent research-backed evaluation framework and explicit user preference. Behavioral use across decisions, reviews, and investigations remains. |
| `shadcn` | **Retain auto** | Library-specific integration with its own interface and updates; no umbrella membership. Preserve host-specific direct-command visibility semantics rather than assuming auto implies a slash command. |
| `design-artifact` | **Retain auto** | HTML craft serves reports, lessons, decks, and tools outside product Design. Reusing it is preferable to duplicating it or launching Design for every HTML artifact. |
| `tdd` | **Retain auto** | A named development method useful in ordinary untracked work. Users should reach test-first behavior without entering manual Implement; preserve its Codebase Design dependency. |
| `code-simplification` | **Retain auto** | A focused behavior-preserving refactor remains useful outside tracked delivery. It should not require entering Implement or be reduced to a review lens. |
| `writing-for-agents` | **Retain auto** | Precise audience/authoring trigger protects routine skill and instruction edits without entering an umbrella. Keep distinct from human writing. |
| `wizard` | **Retain auto** | Human-only setup steps can arise anywhere. Its method should remain reachable without initiating a full configuration engagement. |
| `grilling` | **Retain auto** | Small reusable challenge primitive; direct grilling remains available while the richer Decide workflow stays manual. Existing manual wrappers are still absorbed. |
| `domain-modeling` | **Retain auto** | Cross-workflow glossary/ADR expertise with direct editing value. It has no single workflow owner that improves access without broadening entry. |
| `codebase-design` | **Retain auto** | Shared module/test-seam vocabulary used during design, debugging, review, and TDD. Preserve one independently accessible reference. |

Prototype, diagnosis, research, and code review are the strongest absorption cases because the new workflow otherwise duplicates their direct job. Animate adds coherent source ownership across the motion material already being incorporated. Source Driven Development and Doubt Driven Development are more editorial: absorption makes their useful methods available while correcting overbroad activation. Their activation and process patches require especially careful behavior review.

TDD and Code Simplification are the closest retained cases. They could live inside Implement, but doing so would remove focused automatic paths into ordinary untracked work while Implement remains manual. Keep them independently for this revision. Impeccable is the opposite maintenance case: its size is not an argument to absorb it; preserving its maintained system avoids becoming responsible for a wholesale fork.

Retaining an entry does not certify its current prompt. For example, TDD’s seam-confirmation behavior may still need a scoped compatibility decision where the user already settled the seam. Invocation review and prompt-debt review are separate; no global rewrite of retained skills is proposed.

## Dependency adaptation: more than changing a name

A source dependency is an implementation choice we can patch. Preserve the caller’s purpose, required inputs, result, and authority boundary when changing the callee. These are concrete proposed adaptations, not already working host integrations.

| Existing path | Proposed path | Contract to preserve |
|---|---|---|
| Wayfinder prototype ticket → `prototype` | Decide decision ticket → Design’s experiment method | Question, context/shell, fidelity needed, artifact, findings, and unresolved decision; no automatic full Design engagement |
| Wayfinder research ticket → `research` | Decide → Investigate’s research method | Primary-source evidence and a findings artifact; a research worker does not recursively spawn another researcher |
| Tracked Implement → `afk-code-review` | Implement → Review’s technical method | Fixed `review_base`, Standards/Spec, finding reconciliation, existing rerun and acceptance contract |
| Implement source-backed bundle → `source-driven-development` | Implement’s source-verification method | Relevant versions, primary sources, resulting implementation decisions and explicit gaps |
| Implement adversarial bundle → `doubt-driven-development` | Decide’s reusable adversarial method/posture | Fresh-context challenge and reconciled findings; distinguish a bounded review from intentionally continuous adversarial work |
| Design/other callers → `animate` | Design’s motion method | Bounded construction, selected direction, interruption and exit behavior; no new design interview |
| Compass recommendations → old entry names | Workflow docs/methods plus exact migration mappings | Same user outcome and intended operation, not a generic root that changes scope |

For the Prototype example, the call carries “test this state model in this shell and return evidence for this decision.” Design selects the rough experiment method and returns those results to Decide. The route preserves behavior even though both original entry points are gone. A fidelity artifact is selected only when the decision actually needs fidelity. Merely replacing `prototype` with `afk-design` without this bounded contract is insufficient.

### Concrete reference packaging recommendation

Ship self-contained installed packages compatible with standard Vercel `skills` CLI installation and updates. Do not require AFK’s CLI to install these workflows. Maintain reusable methods once in the authoring source, then generate the needed reference copies into consuming packages. The initial design has no external shared runtime directory and no separate shared-storage distribution format. Editorial ownership does not require a runtime call to the owner's public skill, a sibling installation, or a fragile relative path between independently installed skills.

Illustrative installed layout, not implemented paths:

```text
logbook-implement/
├── SKILL.md
└── references/
    ├── adversarial-review.md
    └── upstream/
        └── doubt-driven.md
```

Implement's selected adversarial operation points to `references/adversarial-review.md`. That Atlas adapter defines the bounded method and points to relevant preserved source material. It does not load `logbook-decide/SKILL.md`. Atlas maintains the adversarial method as a shared source consumed by Decide and Implement; its association with Decide does not imply exclusive source ownership. Each consumer carries and uses its generated copy. Both copies come from one maintained source, with provenance and generation checks detecting independent edits and drift. This duplicates installed bytes, not authoring responsibility; references load only when relevant.

Keep verbatim upstream material intact where possible, including original frontmatter. Atlas owns entry metadata and scoped adapters separately. Ensure carried references are not accidentally discovered as additional skill entries. Human-only entry restrictions still apply; an internal reference must describe the deliberately reusable operation rather than disguise an entire restricted workflow.

Reading a locally packaged method is source reuse, not invocation of another workflow. Reserve behavioral composition for using an independently addressable skill, such as Implement using TDD. Source composition may be many-to-many: one maintained source can feed several workflow packages. Reusable methods need stable local resource addresses and dependency packaging; a method reference is not a nested auto/manual skill. Keep one maintained source of each method and resolve installation paths deterministically. Version compatibility, partial installation, and host restrictions must be validated before retiring old callers. Do not add every dependency to every installed workflow merely because it appears somewhere in this proposal.

## Conflict rulings are an authored part of the product

Use a maintained ruling reference for each relevant domain, with a small shared index. Put the runtime decision near its method and keep source history and maintenance details out of the hot path. A giant global conflicts document loaded for every invocation would recreate prompt debt.

Each ruling records the overlapping methods or contradictory guidance, the conditions selecting a method, the priority for those conditions, the preserved invariant, the source revisions involved, and what would reopen the decision. The maintained record and runtime instruction must agree. One ruling can govern multiple workflow callers; they must not grow independent contradictory copies.

Initial cross-workflow rulings proposed for this revision:

| Overlap | AFK ruling |
|---|---|
| Investigate / Decide / Plan | Establish evidence; resolve a choice; organize a destination. A task may cross these outcomes without repeating its intake. |
| Plan map / execution tracking | Decision tickets resolve uncertainty; implementation tickets deliver settled work. Convergence is explicit; planning does not implicitly authorize delivery. |
| Design / Impeccable | Design owns the selected AFK engagement and cross-artifact commitments. Impeccable performs its supported specialist work intact. Direct Impeccable use remains available. |
| Rough prototype / wireframe / fidelity prototype | Select by the uncertainty and review job. Preserve real-app context when material. No artifact approves more than it demonstrates. |
| Design / Implement | The approved design contract persists. Engineering delivery and creative acceptance are distinct; one active record owns each decision. |
| Review / Verify | Review judges; Verify establishes scoped evidence. Reuse applicable evidence, but do not turn a passing check into proof of all review axes. |
| Document Behavior / Plan | Document Behavior records actual or source-inferred behavior with evidence labels. Plan records intended behavior. Neither silently overwrites the other. |
| Human / agent writing | Select by actual reader and use. Separate reference loading; mixed deliverables may use different methods for separate artifacts. |
| Configure / tool skills | Configure owns optional shared-context initialization and validation. Tool packages remain independent authorities for their interfaces, with direct invocation available. |

Known conflicts must be decided during authoring. A genuinely new conflict may require judgment or user input, but the workflow should surface the unresolved case and feed a maintenance ruling rather than pretending existing policy covers it. No catalog ruling overrides the user's instructions or the host's instruction hierarchy.

## PE's contribution

PE remains both architectural inspiration and a possible source. Use the existing [pinned source audit](../research/pe-skills-source-audit.md), rather than treating PE as a monolithic dependency.

| PE material | Proposed AFK use |
|---|---|
| Design | Selective source contribution to Design: method organization, approval identity/state, and useful artifact methods after conflict reconciliation |
| Build | Selective references in Design/Implement for demonstrated craft gaps; reconcile with Impeccable and current AFK methods rather than adding a parallel production owner |
| Review | Interface, fidelity, and hostile-state methods inside Review, with normalized paths and scratch-harness behavior |
| Verify | Principal external source for Verify's evidence data and reporting functionality, adapted to AFK's tools and artifact conventions |
| Product Description | Principal external source for Document Behavior, adapted to bounded features and existing documentation |
| Brand Assets | Optional Design asset method for later enrichment; no current AFK operation is excluded while waiting for it |
| Product Engineering router | Architectural reference for navigation; retire Compass’s separate entry after transferring its knowledge |

This is broader than round two's PE selection, but not approval to copy all PE files. Distinguish PE-authored methods from the upstream material PE inherited. Upstream licenses, notices, scripts, and dependencies must be inspected per selected material before implementation. This round uses the already audited PE snapshot; it does not assert a fresh upstream audit.

### PE invocation evidence and its limits

The source check during this discussion inspected all seven PE roots at commit `0642a58496d4dfa1de9688a82c29dfa34d24370a`: Design, Build, Review, Verify, Product Description, Brand Assets, and Product Engineering. None carries a manual-only restriction in root frontmatter. They are eligible for automatic selection under compatible host defaults. Some incorporated reference files retain original manual-only frontmatter; that source metadata does not set the enclosing workflow’s invocation policy. [Pinned PE source](https://github.com/backnotprop/product-engineering/tree/0642a58496d4dfa1de9688a82c29dfa34d24370a/skills).

PE’s receipts document pinned preserved material, modifications, and explicit rulings. This supports adopting their maintenance approach while choosing different AFK activation policies. [Emil receipts](https://peskills.dev/people/emil-kowalski/).

Invocation semantics are host-specific. Claude Code documents `disable-model-invocation: true` as user-only invocation, not merely a suggestion to avoid spontaneous discovery. Its documentation also distinguishes standard fields from host extensions. AFK must verify each supported adapter’s actual discovery, direct invocation, and method-loading behavior; do not infer that one frontmatter field is portable enforcement. [Claude Code invocation control](https://code.claude.com/docs/en/skills#control-who-invokes-a-skill).

Generated package outputs are not editing surfaces. Repository agent guidance must direct maintainers to the canonical sources and regeneration command. The build must reproduce the distributed references, and a regeneration/diff check must detect stale or hand-edited output. Source changes should regenerate and validate every affected consumer together; installed users receive those changes through normal package updates. These are implementation requirements, not tooling already present.

### Accepted PE contribution direction and next refinement

Selected PE Design methods, PE Build craft material, PE Review interface/stress/fidelity material, and PE Verify material are accepted in principle as contributions to Design, Implement, Review, and Verify respectively. Exact methods, patches, and source selection remain open. After the whole-proposal review, a follow-up refinement will determine whether each contribution comes from PE’s authored synthesis, its original upstream sources, or a combination, preserving attribution for each. Acceptance of this direction is not wholesale adoption or completed implementation.

PE Brand Assets is deferred to possible future enrichment; it is not a committed addition for this iteration. The separate `afk-code-review-verdicts` entry retires at migration, while its adjudication/discussion method remains inside Review with its human judgment boundary preserved.

Existing `afk-code-review`, `afk-to-spec`, and `afk-to-tickets` are already patched Matt Pocock upstream sources. Atlas formalizes their direct upstream-to-patched-reference maintenance; it does not add an artificial AFK fork layer. Preserve existing adaptations, verify upstream revisions and diffs, and track any further deliberate changes in that same patch lineage. Legacy AFK names remain migration history.

## Packaging, provenance, and migration

Keep the current canonical system and `skills/` intact while developing Atlas in the separate `logbook-atlas` repository. This replaces the earlier in-repository experimental-tree plan. Port relevant current fixes deliberately so the replacement does not drift. Proposed layout for each workflow: a short root, selected methods, relevant policy references, necessary scripts/assets, and a source manifest. Final directory names and publication exclusions remain implementation decisions.

Record upstream repository and path, immutable commit, source checksum, carried-content checksum, classification (verbatim, patched, derived, or Atlas-authored), pristine source plus patch or derivation record, and license/notice information. Track each source in multi-source methods. Maintain dependency compatibility information separately for independent capabilities. Existing catalog `composes` supports dependency selection; it does not establish source lineage or prove runtime invocation.

A later watcher can compare pinned inputs and create deduplicated reviewable issues or proposed updates. It must show which methods and rulings are affected. Humans validate adoption; accepted content and provenance change together. Hashes establish byte integrity, not semantic correctness. Build these records from the first incorporated source even if watching starts manually.

Ship a user-runnable migration tool with the eventual switch. It must identify AFK-managed installations, show mappings, preserve local modifications and recoverability, update relevant callers/profiles/rules, and be safe to rerun. Compatibility aliases target exact old operations, not ambiguous bare workflows. Never delete unrelated same-named skills or overwrite user-owned catalog choices. Retirement targets are the explicitly mapped absorbed entries and Compass, not everything that predates AFK Next.

The agreed mapping absorbs 22 manual and seven automatic entries into workflows, folds two further manual entries into AFK CLI, retains twenty independent entries (twelve automatic and eight manual), and retires Compass. All 52 original entries are accounted for: 31 absorbed + 20 retained + 1 retired. Twelve workflows plus twenty independent entries yield **32 proposed logical entrances**, with eighteen automatic and fourteen manual entries. These counts describe the agreed proposal, not installed or shipped packages; future refinement may deliberately revise them.

This count is conditional on completed migration, not a target or default-install count. Transitional aliases, profiles, optional original-source installations, and user catalogs can change actual discovery. An alias for a retired automatic entry must not accidentally invoke an entire manual lifecycle. Original upstream skills remain users’ own install choices; AFK does not remove independently managed copies.

Profile-only packages and uncataloged authored skills are outside the 52-entry inventory, not deletion candidates. Reconcile HTML profile packages and the uncataloged `afk-structured-debugging` before old-tree cleanup. Update every retired caller, invocation override, profile reference, and source record as one reviewed cutover. Library/tool packages stay independent.

## Prompt design and evaluation

The supplied Astra article supports a small root with conditional references; it does not require a small ambition or a package with no substantive methods. Descriptions identify the user's outcome. Detailed operation selection, artifact contracts, source adaptations, and relevant rulings live behind that entry. Do not expand a description into an inventory of all source skill names.

Keep instructions that preserve actual behavior: ADF's creative contract, clean-room isolation, review axes, evidence distinctions, and source fidelity. Remove redundant intake, arbitrary volume targets, repeated permission loops, and procedure that only compensates for older model behavior when evidence supports that adaptation. Manual invocation is not a reason to ignore instruction cost.

Validate both structural and behavioral composition before migration:

- Account for every old operation with an observable output/behavior case and, where retained, a direct-invocation case.
- Exercise the ambiguous pairs in the ruling table and confirm the selected method, loaded sources, dependency invocation, and result.
- Test Design with full Impeccable, rough versus fidelity prototypes, component versus cinematic motion, and an approved source carried into implementation.
- Test Plan from both open decision graphs and already settled specs; distinguish decision tickets from implementation slices.
- Test delegation entered through Plan or Implement and direct Architect/Clean Room entry; observe Architect use before spawning and clean-room context isolation.
- Test human versus agent writing, recap versus handoff, one visual explanation versus an ongoing learning engagement.
- Check aliases, missing dependencies, user invocation overrides, profile installation, source hashes, patch replay, and update impact reporting.
- Compare outcomes, unnecessary questions, references loaded, time, and measured token costs against current direct skills plus Compass. Test negative cases such as a typo that needs no elaborate workflow.

Do not test authored wording, headings, or example order. Deterministic checks cover schemas, paths, discovery, installation, provenance, and runtime behavior. Human evaluation judges artifact quality and decision fidelity. File validation of this proposal is not evidence that the future workflows work.

### Observable entry cases for 3.1

| Request or situation | Expected result |
|---|---|
| “Prototype this state machine so we can test transitions.” | Auto Design selects the incorporated logic experiment; no visual-direction interview. |
| Decide’s decision ticket needs a rough UI experiment. | Its adapted call reaches Design’s experiment method and returns evidence to that ticket. |
| “Animate this drawer.” | Auto Design selects bounded motion; no cinematic production process. |
| “Polish this existing dashboard,” or explicit Impeccable request. | Independent Impeccable handles the relevant mode; Design’s automatic entry does not compete for a settled craft task. |
| “Why does this request fail intermittently?” | Auto Diagnose reaches the preserved causal feedback loop. |
| “Research which API supports this requirement.” | Auto Investigate gathers evidence directly or with authorized delegation; no mandatory second worker inside an existing research worker. |
| “Review this branch against the spec.” | Auto Review selects Standards/Spec and the fixed comparison range; no automatic UI review or adversarial posture. |
| “Implement this small settled change.” | Ordinary implementation unless tracked workflow selection is explicit; retained TDD or simplification remains reachable when relevant. |
| User explicitly selects Implement with source-backed or adversarial execution. | Load the selected incorporated method; do not silently run every execution posture. |
| “Give me a recap.” | Within explicitly selected Clarify, use the recap reference; no mandatory file. |
| “Update this SKILL.md.” | Independent Writing for Agents; no generic human-writing method or full environment setup. |
| “Explain how this works visually.” | Auto Learn selects a bounded explanation; no learning workspace or curriculum unless requested. |
| “Document this product’s checkout behavior.” | Auto Document Behavior records scope and evidence status; no arbitrary documentation volume or new repo. |
| Existing workflow performs routine tests. | Run relevant tests without launching manual Verify’s full report lifecycle. |
| A user selects a manual-only entry by name. | Host-supported explicit invocation reaches it; ordinary keyword mention does not silently start the workflow. |

The trade-off is explicit: standalone automatic SDD/DDD activation is removed. Outside a selected workflow, ordinary agents still follow their normal source and verification obligations, but are not promised those specialized postures automatically. Users wanting the full method can select it through the owning workflow or preserve an upstream standalone in their own catalog. This deliberate change is why those two absorptions need stronger evaluation than the near-identical job replacements.

For every new auto entry, test both a positive request and a neighboring request it must leave alone. Measure discovery, selected methods, dependency availability, preserved behavior, and unrequested process separately. If a short accurate description cannot support its boundary, change the proposed default or membership before shipping. Do not solve an entry problem by listing every source name in metadata.

## Annotation discussion: open membership questions

The discussion distinguishes behavioral composition (calling an independent skill) from source reuse (reading a bounded method packaged locally). “References maintained elsewhere” identifies the maintained source, not a runtime call or an installation dependency on another umbrella. Selected methods are generated into each consuming package from one canonical source. This is a concrete proposed packaging contract, not evidence that a universal cross-host method invocation API already exists.

**Impeccable:** accepted as independent, preserving its full system and direct invocation. Design uses it through behavioral composition. Full source absorption was considered and is not selected for this iteration. Keep explicit entry-boundary and conflict guidance; independence does not resolve overlapping instructions by itself.

**Animated Driven Frontend:** accepted as an independent manual workflow named `logbook-animated-driven-frontend`. Retain the former `afk-animated-driven-frontend` name in migration history and source receipts. Update callers during implementation; current installed skills are not changed by this proposal. Sharing a bounded method later would require an explicit evaluation, not automatic extraction from its creative lifecycle.

**TDD and Code Simplification:** the reason for retention is focused automatic use outside manually selected Implement, not a claim that either is structurally indivisible. TDD is the closer call: a stable independently reachable test-first method could be packaged under Implement if discovery and method access were solved. Code Simplification also provides a useful direct “refactor without behavior change” entry. Leonardo confirmed retaining both independently for now; revisit only during the later workflow-by-workflow discussion.

**Design Artifact:** automatic Design makes absorption more plausible than the prior manual-only architecture did. My revised inclination is to absorb it into a shared artifact-craft method maintained by Design, provided reports, lessons, plans, decks, and small tools retain a direct, low-ceremony route and other workflows reuse that method without a product-design engagement. This is an open recommendation for discussion; the current mapping/count still retains it. Absorption also requires one concise, coherent discovery description that still reaches reports, lessons, decks, plans, and tools. If that needs an inventory of unrelated triggers, retain Design Artifact. Internal references cannot repair failure to discover the enclosing workflow. Apply this test to every absorption candidate, not only this one.

**Review verdicts:** retire the separate verdicts wrapper through source composition as proposed. Review owns evidence-based adjudication; the selected discuss-verdicts method retains its human judgment boundary. Do not make the entire automatic Review entry stop for discussion by default.

**AFK CLI consolidation:** Leonardo explicitly selected Profile Use and Create Agent as references inside independent AFK CLI. Reflect that target in this proposal and visualization, but leave the actual source merge to its implementation work. No CLI or installed skill was changed by recording it.

## Recommendation and next refinement

I prefer proposal 3.1: keep the twelve agreed workflow outcomes, including manual Clarify, absorb the seven automatic entries identified above, preserve twelve independent automatic capabilities, retire Compass at cutover, and choose six auto/six manual workflow defaults. This preserves the direction the user liked while removing the artificial connection between historical invocation policy and future source ownership.

This capability-review phase is complete. The next refinement selects concrete PE contributions or their upstream sources, pins revisions, identifies patches and conflict rulings, and specifies packaging and dependency contracts. Preserve this agreed capability map unless that evidence warrants a deliberate revision. Design, Plan, and Implement show the strongest current foundation. Investigate and Diagnose now have incorporated core methods; Configure still needs an authored method that delivers its added responsibility; Coordinate is dropped from this iteration. We can later merge, split, or retain direct entry points where experience suggests it, without treating an entry count as a quota.

Only proposal documents changed in this round. No catalog entries, invocation policies, installed skills, or execution rules were changed. The next implementation decision remains separate from reviewing this proposal.

## Evidence

- [Current catalog](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/packages/afk/catalog/skills.json) and [profiles](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/packages/afk/catalog/profiles.json).
- [Workflow crossroads](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/skills/afk-compass/references/workflow-crossroads.md) and [frontend crossroads](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/skills/afk-compass/references/frontend-crossroads.md): existing AFK interpretations that this proposal promotes into owned methods and rulings.
- [AFK design grill](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/skills/afk-design-grill/SKILL.md), [ADF](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/skills/afk-animated-driven-frontend/SKILL.md), and [Implement](https://github.com/logbookfordevs/ai-field-kit/blob/6ed15517f414077b95e95891b7cb15477d101eb5/skills/afk-implement/SKILL.md): substantive current contracts to preserve.
- [Original research](../research/pe-skills-afk-opportunities.md) and [pinned PE audit](../research/pe-skills-source-audit.md): source evidence, not current membership decisions.
- External current-operation evidence: installed skill files under local skill installation, read as local snapshots rather than asserted latest upstream versions.
- Astra guidance: user-supplied article at the user-supplied Astra article attachment (not bundled in this repository).

## Additive catalog sync after capability review

The 52-entry capability-review inventory above remains the historical planning baseline. Current catalog synchronization adds independent entries without reopening umbrella composition. Stop Slop and Hand Drawn Canvas Animation remain isolated; AFK is authoritative for synchronization, including deletions. Removed Atlas-only Plannotator Compound, Setup Goal, and Visual Explainer entries because they were deleted upstream. Authored AFK skill, rule, hook, agent, and catalog updates are refreshed while retaining Atlas source URLs. Current installable catalog size is 54 entries; this is distinct from the proposed post-migration entrance count. No proposed umbrella absorption or rename is executed by this synchronization.
