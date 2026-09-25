---
name: logbook-investigate
description: Resolve a bounded question with evidence. Use for research, conflicting sources, or verifying an uncertain technical claim.
disable-model-invocation: false
---

# Investigate

Establish what the evidence supports, what conflicts, and what remains unknown. Keep the scope tied to the user's question; ordinary reading within another task can use a reference directly without opening a separate investigation.

Frame the question and the evidence that would settle it from the request and available context. Ask only when a missing choice materially changes the investigation. Follow the material gaps until the question is answered or the remaining uncertainty has a concrete cause and next check.

## Select the needed methods

- For evidence gathering, read [Research](references/research.md). Work directly by default; delegate a bounded reading task only when useful and authorized. A research worker returns findings to its caller rather than spawning another researcher.
- When the answer depends on an API, version, environment, or conflicting technical documentation, read [Source verification](references/source-verification.md).
- When a consequential conclusion still rests on a contestable assumption, read [Adversarial challenge](references/adversarial-challenge.md). Select this deliberately; it is a bounded check, not a continuous posture for every decision.
- Use independent `domain-modeling`, when available, when the requested investigation includes sharpening the project’s domain model; resolve ordinary vocabulary questions from existing context. Use independent `truss-evaluation`, when available, for a consequential software-quality trade-off. These are conditional skill calls, not prerequisites for research. If missing, continue the investigation with explicit terms and evidence; report the limitation only when the named method itself was requested.

## Deliver the answer

Lead with the answer. Cite the evidence that supports material claims, distinguish observation from inference, and explain conflicts or limits that could change the conclusion. Scale the detail to the question. When a record is requested or needed for continuing work, save one concise Markdown note using the repository's existing convention; otherwise answer in the conversation.

Completion means the evidence answers the question, or the unresolved claims are identified with the missing evidence and a useful next step. A retrieved page or a completed report alone is not completion.

## Boundaries

For a broken system, diagnosis owns reproduction and cause; Investigate can supply a bounded evidence question. Document Behavior owns a defined product surface's flows and states; Learn owns teaching. Respect an explicitly selected scope without forcing a handoff. Investigation does not itself authorize product edits, interviews, tracking, or a broader workflow.

Linked references are local methods; reading them does not invoke Decide or Implement. Source ownership, adaptations, and integrity records are in [SOURCE-MANIFEST.json](SOURCE-MANIFEST.json).
