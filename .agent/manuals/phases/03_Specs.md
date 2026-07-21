# Phase 3: Specs (Behavior)

[**🏠 Home**](../README.md) | [**📚 Full Reference**](../Full_Reference.md)

**Phases:** [1. Concepts](./01_Concepts.md) | [2. Architecture](./02_Architecture.md) | [3. Specs](./03_Specs.md) | [4. Plans](./04_Implementation_Plans.md) | [5. Impl](./05_Implementation.md) | [6. Reviews](./06_Reviews.md)

---

**Purpose:** Define what "correct" means independently of implementation, in the `03_specs/` directory.

**Key Definition:**
Specs define behavior, inputs, outputs, and edge cases. They must obey the Architecture Contract.

## Ownership
- **Owner:** Architect (Claude Opus 4.x)
- **Output:** Behavioral Specifications
- **Input:** Architecture Contracts & Concepts


## Key Output (`/.workflow/03_specs/`)
```text
/.workflow/03_specs/          <– all spec artifacts for Phase 3
```

## What Specs Mean Now
- Specs define what "correct" means independently of implementation details.
- They cover contracts, schemas, expected behavior, inputs, outputs, edge cases, and failure modes.
- They live together inside `03_specs/`; no further directory split is required.
- They must obey the Architecture Contract and elaborate it rather than replacing it.

## Rules
- Specs can evolve if contracts remain intact.
- Specs must be written in `/.workflow/03_specs/` before Implementation Plans are created.

