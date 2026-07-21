# Phase 1 — Concepts: Onboarding & Workflow

[**🏠 Home**](../README.md) | [**📚 Full Reference**](../Full_Reference.md)

**Phases:** [1. Concepts](./01_Concepts.md) | [2. Architecture](./02_Architecture.md) | [3. Specs](./03_Specs.md) | [4. Plans](./04_Implementation_Plans.md) | [5. Impl](./05_Implementation.md) | [6. Reviews](./06_Reviews.md)

---

## Purpose of Phase 1 (Concepts)

Phase 1 exists to **externalize and refine thinking before decisions are made**.

This phase captures:
- How the system is imagined end-to-end
- Conceptual stages and responsibilities
- Assumptions, risks, and unknowns
- Progressive refinements of ideas

Phase 1 is **not about choosing the right design**.  
It is about **making thinking explicit, structured, and evolvable**.

All outputs from this phase are **inputs to architecture**, not constraints on it.

---

## What Concept Documents Are

### Layman meaning
- Structured thinking notes
- Written versions of “what’s in my head”
- Clarified intuition

### Technical meaning
- Exploratory, non-binding design artifacts
- Pre-architecture inputs
- Intentionally incomplete and revisable

Concept documents:
- May evolve rapidly
- May contain uncertainty
- May be refined multiple times
- May later be discarded

---

## What Concept Documents Are NOT

Concept documents are NOT:
- Architecture
- Contracts
- Specs
- Implementation plans
- Execution workflows
- APIs, schemas, or data models

If a document defines:
- invariants
- execution order
- interfaces
- module boundaries

…it does **not** belong in Phase 1.

---

## Ownership & Models

**Primary owner:** Strategist  
**Primary model:** Agent (Gemini) Pro Thinking  

Agent (Gemini’s) role in Phase 1:
- Read existing concepts
- Refine and expand thinking
- Surface gaps, risks, and assumptions
- Generate *new* conceptual artifacts

Agent (Gemini) is **not** an editor of canonical files.

---

## Directory Structure (Canonical for Phase 1)

All Phase 1 artifacts live under:
/.workflow/01_concepts/

### Reference structure
```text
01_concepts/
├── (See .agent/manuals/phases/01_Concepts.md)
├── scratchpad/               <– User's raw thinking/braindump (Read-Only for Agent)
│   ├── README.md               <– big-picture conceptual story
│   └── <feature_name>/         <-- focused conceptual notes
│       └── <document>.md
├── synthesis/                <– Agent's structured conceptual models (replaces ideas/risks/constraints)
│   └── <feature>_concept.md    <– Unified document exploring the idea, risks, and constraints
├── requirements/             <– finalized problem statement and requirements
│   ├── README.md               <– scope, goals, and acceptance framing
│   └── <feature_or_domain>.md  <– concrete requirements for the system
```

This structure is intentional and enforced.

---

## Scratchpad (The Anchor)

`scratchpad/` represents the **single, evolving narrative** of how the system
is conceptually imagined from start to finish. This is purely the User's domain.

It answers questions like:
- What stages exist conceptually?
- What kind of thinking happens at each stage?
- How information *might* move or loop?

It does **not** define:
- execution order
- runtime behavior
- system boundaries

Think of the scratchpad as **a story, not a pipeline**. The Agent should only READ from this directory, never write to it.

---

## Synthesis Directory (IMPORTANT REDEFINITION)

`synthesis/` is where the Agent **distills the scratchpad into structured concepts**. 

Instead of scattering ideas, risks, and constraints into separate folders, `synthesis/` produces unified documents that encapsulate the entire conceptual lens. 

Think of `synthesis/` as:
> “The Agent taking the User's messy brain-dump and organizing it into a professional concept pitch.”

Typical contents:
- Refined conceptual patterns (`<feature>_concept.md`)
- A "Risks" section inside the concept doc
- A "Constraints" section inside the concept doc

A synthesis document:
- Is more mature than the raw scratchpad
- Is still non-binding Architecture-wise
- Forms the basis for the final `requirements/`

---

## How Agent (Gemini) Is Expected to Work in Phase 1

Agent (Gemini) should follow this pattern:

1. **Read** the current narrative in the `scratchpad/`
2. **Identify** gaps, tensions, or unclear areas
3. **Generate** a structured document in `synthesis/` that translates the narrative into a cohesive concept.
4. **Finalize** the output by extracting hard properties into `requirements/` once exploration is done.

### Agent (Gemini) must NOT:
- Modify files in place
- Rename or version documents
- Declare any document “final”
- Collapse exploration prematurely

Agent (Gemini) outputs are **suggestions or artifacts**, not canon.

---

## How Canonical Documents Are Updated

You (or the Architect later) decide what becomes canonical.

Typical promotion flow:
- Agent (Gemini) generates a refinement
- You review it
- If accepted:
  - It becomes a new file
  - Or replaces the current file (with versioning)
- If rejected:
  - It is marked as rejected or ignored

Agent (Gemini) never promotes content by itself.

---

## Status Markers (Recommended)

> Status: Active
> Last updated: YYYY-MM-DD
> Notes: Optional context on recent changes

Minimal Version Control (Intentional & Lightweight)

Each concept area maintains exactly one active document.

Active Document Rule
	•	The current document has no version suffix
	•	It reflects best-known thinking at that time

Historical Versioning Rule

When meaningfully revised:
	1.	Rename the old document with a version suffix
	2.	Create a new document with no suffix

Version format:
<name>_v10.md
<name>_v11.md

Rules:
	•	Versions increase monotonically
	•	Old versions are never edited
	•	History preserves reasoning, not polish
How Phase 1 Ends (Handoff to Architecture)

Phase 1 is considered complete when:
	•	The mental flow feels coherent
	•	Key mental modules are articulated
	•	Refined ideas are captured
	•	Major risks and constraints are explicit

At this point, all Phase 1 artifacts are handed to the Architect
as raw but structured input.

The Architect will:
	•	Read skeptically
	•	Synthesize selectively
	•	Decide what becomes real

⸻

One-Line Rule (Memorize This)

Phase 1 organizes thinking.
Phase 2 commits to reality.
