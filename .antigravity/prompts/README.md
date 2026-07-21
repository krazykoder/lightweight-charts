# Antigravity Prompts

This directory contains the core System Prompts that define the roles, responsibilities, and constraints for the various AI Agents in the Antigravity workflow.

## Agent Context Payloads

To ensure each agent operates strictly within its boundaries, they must be provided with a specific set of files based on their type. 

Every agent receives the **System Prompt** (defining their role/rules) + the **Project Addendum** (defining project-specific paths, constraints, and dev commands). Beyond that, their inputs correspond strictly to the outputs of the previous phase.

---

### 1. Brainstormer (Phase 1: Concepts)
The Brainstormer takes messy human thoughts and structures them into actionable product requirements.
* **Core Instructions:** 
  * `System_Prompt_1_Brainstormer.md`
  * `Project_Addendum_Template.md`
* **Dynamic Context (Inputs):** 
  * The user's raw thoughts/notes from `.workflow/01_concepts/scratchpad/`
* **Expected Output:**
  * Concept docs in `.workflow/01_concepts/synthesis/`
  * Finalized boundaries in `.workflow/01_concepts/requirements/`

### 2. Architect (Phase 2-4: Architecture & Planning)
The Architect takes product requirements and turns them into binding technical contracts and step-by-step implementation plans.
* **Core Instructions:** 
  * `System_Prompt_2_Architect.md`
  * `Project_Addendum_Template.md`
* **Dynamic Context (Inputs):** 
  * The structured requirements from `.workflow/01_concepts/requirements/`
  * Existing `ARCHITECTURE_CONTRACT.md` and `module_map.md` (so they don't break existing invariants)
* **Expected Output:**
  * Architecture updates (`.workflow/02_architecture/`)
  * Specs (`.../03_specs/`)
  * Implementation Plans (`.workflow/04_implementation_plans/`)

### 3. Implementer (Phase 5: Code Execution)
The Implementer blindly executes the plan without making architectural decisions.
* **Core Instructions:** 
  * `System_Prompt_3_Implementer.md`
  * `Project_Addendum_Template.md`
* **Dynamic Context (Inputs):** 
  * The specific **Implementation Plan** from `.workflow/04_implementation_plans/`
  * The **Target Source Code Files** mentioned in the plan (so the agent has the actual code context before writing diffs)
* **Expected Output:**
  * Working source code changes
  * A Walkthrough Report in `.workflow/05_implementation/`

### 4. Documenter (Phase 6: Review & Sync)
The Documenter verifies what was built against what was planned and updates the single-source-of-truth docs.
* **Core Instructions:** 
  * `System_Prompt_4_Documenter.md`
  * `Project_Addendum_Template.md`
* **Dynamic Context (Inputs):** 
  * The Implementer's **Walkthrough Report** from `.workflow/05_implementation/`
  * The original **Implementation Plan** and **Architecture Contracts** (to verify compliance)
  * The current reference files: `module_map.md`, `Full_Reference.md`, `README.md`
* **Expected Output:**
  * Updated documentation files
  * Audit Report saved to `.workflow/06_reviews/`

---

### Summary Table

| Agent Type | Persistent Core | Required Dynamic Files (Inputs) |
| :--- | :--- | :--- |
| **Brainstormer** | System Prompt + Addendum | Raw Scratchpad Notes |
| **Architect** | System Prompt + Addendum | Finalized Requirements, Current Architecture Contracts |
| **Implementer** | System Prompt + Addendum | 1 Implementation Plan, Target Source Code Files |
| **Documenter** | System Prompt + Addendum | Implementation Report, Arch Contracts, Current Docs |
