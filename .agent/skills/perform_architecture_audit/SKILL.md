---
name: Perform Architecture Audit
description: A hardcore compliance checker that validates newly written code against architectural invariants and generates a strike report upon failure.
---

# Architecture Audit Procedure

Use this skill during Phase 6 (Reviews) or when acting as the Auditor/Documenter agent to enforce strict compliance with defined project constraints.

## 1. Discovery Phase

Before auditing, you must know what was built and what the rules are.

1.  **Identify Changes:**
    *   Read the Implementer's Walkthrough Report in `.workflow/05_implementation/`.
    *   List all `[NEW]` and `[MODIFIED]` files.
2.  **Load Constraints:**
    *   Read `ARCHITECTURE_CONTRACT.md` (for invariants and mandatory inheritance patterns).
    *   Read `.antigravity/prompts/Project_Addendum_Template.md` (for max file sizes, forbidden imports, and stack constraints).

## 2. Hard Verification (The Audit)

Execute a strict, emotionless audit of the modified source code. **Do not** look at intent; look at the text and the Abstract Syntax Tree (AST).

1.  **Enforce File Limits:**
    *   Check the line counts of all modified files. Do they exceed the limits specified in the Addendum?
2.  **Enforce Forbidden Patterns (Using Grep/AST):**
    *   Search for forbidden libraries (e.g., `import os` if restricted, or `document.querySelector` in a React component).
    *   Search for `any` types in TypeScript or untyped parameters in Python `def`.
3.  **Enforce Architectural Invariants:**
    *   If `ARCHITECTURE_CONTRACT.md` says "All Database entities must extend `BaseModel`", use `grep_search` to verify that new classes inside `models/` contain `(BaseModel)`.
    *   Ensure cross-module boundaries are not violated (e.g., presentation layer directly querying the database).

## 3. Reporting and Enforcement

The Auditor does not fix the code; they reject it.

1.  **If Passed:**
    *   Update `.workflow/06_reviews/` with an Audit Report marked `Approved`.
2.  **If Failed (Strike Report):**
    *   Create a detailed report named `YYYY-MM-DD_<phase>_Strike_Report.md` in `.workflow/06_reviews/`.
    *   List the exact file paths, line numbers, and the specific invariant violated.
    *   Provide explicit instructions to the **Implementer** on what must be rewritten before moving forward.

## Example Usage

**Scenario**: The Implementer submitted Phase 4.1. You discover `src/ui/dashboard.py` imports `src/db/connection.py` directly, violating the 3-tier architecture invariant.
**Action**: You halt the approval process. You generate a Strike Report explicitly citing the invariant ("UI cannot directly access DB Layer") and notify the user to kick it back to the Implementer.
