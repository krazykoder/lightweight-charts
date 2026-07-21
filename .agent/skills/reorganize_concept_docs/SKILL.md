---
name: Reorganize Concept Documentation
description: A guided procedure for efficiently and accurately restructuring conceptual documentation ("mental flows") into a cohesive, organized format.
---

# Concept Documentation Reorganization Procedure

Use this skill when you need to revamp, consolidate, or structure "mental model" or concept documentation (e.g., `.workflow/01_concepts/mental_flow/`). This process ensures checking for gaps, maintaining a clear reading order, and preserving valuable insights while removing clutter.

> [!CAUTION]
> **Restricted Files**: Any file prefixed with an underscore (e.g., `_mental_model.md`) is considered a **Human-Only** master directive. Agents MUST NOT edit, move, or delete these files.


## 1. Analysis Phase (Discovery)

Before moving any files, understand the current state.

1.  **Explore content**:
    *   Run `list_dir` on the target directory and subdirectories.
    *   Read key files (`README.md`, `Phase_*.md`, or equivalent) to grasp the "Mental Model".
    *   *Goal*: Identify the core themes (e.g., Roadmap, Pipeline, Entities, Simulation, Validation).

2.  **Identify the Drift**:
    *   Compare the docs against the current codebase state (using `ARCHITECTURE.md` as a reference).
    *   Note which concepts are "Implemented", "In Progress", or "Future Vision".

## 2. Strategy Phase (Planning)

Do not start renaming files immediately. Create a plan.

1.  **Create `implementation_plan.md`**:
    *   Map **Old Files** -> **New Topics**.
    *   Proposed a numbered file structure for reading order (e.g., `00_Roadmap.md`, `01_Concepts.md`).
    *   Define the scope of consolidation (e.g., "Merge `pipeline/` docs into `01_Pipeline_Core.md`").

2.  **Get User Approval**:
    *   Present the plan. Explain *why* the new structure is better (e.g., "Topic-based is better than chronological Phase-based").

## 3. Execution Phase (Consolidation)

Once approved, execute the restructuring.

1.  **Synthesize Content (Creativity Required)**:
    *   **Do not just copy-paste**. Read the source files and rewrite them into the new structure.
    *   **Fill Gaps**: If the old docs are vague, use your knowledge of the codebase to add accurate technical details (e.g., "The pipeline uses 5 stages...").
    *   **Clarify Status**: Explicitly mark sections as "Future Vision" or "Concept" if they aren't implemented yet.

2.  **Create New Files**:
    *   Write the new markdown files (`00_...`, `01_...`) with consolidated content.

3.  **Archive Old Files**:
    *   Create an `_archive/` directory.
    *   Move the original files there. *Never delete* unless explicitly told to.

## 4. Navigation & Polish

Make the documentation navigable and professional.

1.  **Add Navigation Headers**:
    *   Add a standard header to **every** concept file:
        ```markdown
        > [!NOTE]
        > **Navigation**: [< Prev: Title](./Prev.md) | [📂 Table of Contents](./README.md) | [Next: Title >](./Next.md)
        ```

2.  **Create Index**:
    *   Update `README.md` to serve as a Table of Contents, linking to all new files with brief descriptions.

3.  **Update References**:
    *   Check `module_map.md` or `ARCHITECTURE.md` for links to the old docs and update them to point to the new location.

## Practical Usage Scenario

**Scenario**: The user wants to clean up a scatter of notes in `docs/ideas/` that contains mix of "Database designs" and "UI mockups".

1.  **Analyze**: You see `db_v1.md`, `db_new.md`, `ui_rough.png`, `ui_notes.txt`.
2.  **Plan**: specificy new structure: `01_Database_Design.md` and `02_UI_UX_Concepts.md`.
3.  **Execute**:
    *   Read `db_v1` and `db_new`. Synthesize them into `01_Database_Design.md`, highlighting the final decision.
    *   Read `ui_notes.txt`. Summarize it into `02_UI_UX_Concepts.md`.
    *   Move old files to `docs/ideas/_archive/`.
4.  **Polish**: Add "Prev/Next" links between `01` and `02`. Update `docs/ideas/README.md`.
