# Phase 1: Concepts (Exploration)

[**🏠 Home**](../README.md) | [**📚 Full Reference**](../Full_Reference.md)

**Phases:** [1. Concepts](./01_Concepts.md) | [2. Architecture](./02_Architecture.md) | [3. Specs](./03_Specs.md) | [4. Plans](./04_Implementation_Plans.md) | [5. Impl](./05_Implementation.md) | [6. Reviews](./06_Reviews.md)

---

**Purpose:** Capture how the problem is understood before committing to structure, and converge that understanding into a final requirements set for Architecture.

For full details, see: [01_Concepts_Details.md](./01_Concepts_Details.md)

## Key Rules
- **Non-binding:** Concepts can be incomplete or contradictory.
- **No Execution:** Concepts do not imply execution order or pipelines.
- **Goal:** Externalize thinking, then refine it into final requirements that inform Phase 2.
- **Requirements live here:** Product and user-facing requirements belong in `requirements/`, not in Architecture.

## Directory Structure
```text
01_concepts/
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

## What Goes Here
- Use `scratchpad/` (User) and `synthesis/` (Brainstormer Agent) to explore and pressure-test understanding. The `synthesis/` documents should encapsulate any ideas, risks, and constraints rather than scattering them across folders.
- Use `requirements/` to write the final requirement set once the exploration has converged.
- Requirements should describe outcomes, user-visible behavior, constraints, and acceptance criteria without locking implementation details.

## Ownership
- **Owner:** Strategist (Gemini Pro Thinking)
- **Output:** Concept artifacts and finalized requirements (inputs for Architecture).
