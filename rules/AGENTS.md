## Skills
State "I will use the X skill" whenever using a skill.
If a user-required skill is unavailable, search the configured skill roots and verify explicit aliases. Explain what is missing and request an approved fallback for dependent work. Continue independent authorized work.

## Artifacts
When creating or resuming durable workflow artifacts, read `{{AFK_RULES_DIR}}/artifacts.md`; follow repository storage conventions first.

## Imports
- Prefer configured absolute imports such as `@/components/...`.

## TypeScript
- Avoid `any` unless necessary or specifically requested.
- Run the repository typecheck for TypeScript changes. Fix failures introduced by the change. If an unrelated baseline or environment failure prevents a clean result, report the evidence and verification gap; do not claim a pass.

## Testing
- Add regression tests when they protect meaningful behavior. Test observable behavior; tautological tests that merely restate the implementation are harmful. Trivial copy and other low-risk changes do not require coverage.

## React
- Name compound JSX conditions before the return with domain-specific booleans. JSX conditions should contain one named boolean, optionally negated.
- For two mutually exclusive branches, name the deciding condition and use paired `&&` expressions, such as `{showsDetails && <Details />}` followed by `{!showsDetails && <Summary />}`.
- For three or more mutually exclusive branches, both named `&&` branches and a local render function with early returns are acceptable. Invoke a local render function as a function from JSX. Extract a component when the rendered section has a meaningful interface or obscures the surrounding structure.
- Keep short, flat ternaries for selecting non-JSX values such as strings, classes, or numbers. Hoist nested or hard-to-scan value expressions. Move repeated condition logic into a shared helper.

## Browser Testing
- Prefer `agent-browser` over Playwright CLI when available.

## Commands
- Reuse a suitable running development server. If none exists, start the documented local server when the task requires it and permissions allow.

## Worktrees
- Prefer `yggtree` for worktree operations when available; consult `yggtree --help` before using native Git worktree commands.

## Tools and approach
- **Outcome first:** choose proven tools for the requested result. Explore suitable alternatives before building custom substitutes; implementation convenience alone does not justify lowering quality.
- **Evidence:** test uncertain capabilities before scaling. Reconsider approaches that miss the target, and assess outcome quality separately from technical checks.
- **Decisions:** for new projects, recommend the foundation and tools needed for the intended capabilities. Involve the user in materially different options; proceed with settled choices and authorized experiments.
- **Continuity:** preserve working project conventions unless the requested outcome warrants a change.
- **Web:** prefer TypeScript for application logic and Tailwind when suitable. Plain JavaScript and CSS remain available for creative work and standalone artifacts.

## Frontend UX Defaults
- Prefer mature primitives or registry components when they materially improve UX, accessibility, responsiveness, or interaction quality.
- Mobile is not degraded desktop; replace cramped, wrapped, clipped, or awkward controls with responsive patterns.
- Push back when implementation convenience would materially degrade the user experience.

## Code Style
- Separate logical code sections with blank lines for readability.
- Keep code comment-sparse. Use comments only to preserve enduring, non-obvious invariants, dangerous edge cases, external contracts, or trade-offs; describe lasting behavior rather than task history.

## Sub-agents
When spawning sub-agents, use the `afk-architect` skill as the coordination policy.

## Dictionary
- **Quick win**: a small, obvious, low-risk change. Use proportionate local validation; reserve browser automation and agent review for changes whose UX or correctness risk warrants them.
