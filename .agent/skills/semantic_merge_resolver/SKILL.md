---
name: Semantic Merge Resolver
description: A strict procedure for safely resolving Git merge conflicts by analyzing logical intent rather than blindly executing raw text merges.
---

# Semantic Merge Resolver Procedure

Use this skill when you encounter `<<<<<<< HEAD` merge conflict markers in source code files. Never blindly pick "Accept Current" or "Accept Incoming" without analyzing the surrounding logic.

## 1. Conflict Discovery

Find exactly what is broken.

1.  **Identify Conflicted Files:**
    *   Run `git status` or search the codebase for `<<<<<<< HEAD`.
    *   List the files currently in an unmerged state.

## 2. Context Gathering (The "Why")

Before editing any code, you must understand why the conflict occurred.

1.  **Analyze Both Sides:**
    *   Identify the block of code inside the `=======` separator.
    *   **HEAD (Our changes):** What is the core intent of this block? (e.g., "We added a new configuration parameter `timeout=30`").
    *   **Incoming (Their changes):** What is the core intent of their block? (e.g., "They renamed the function from `connect()` to `establish_connection()`").
2.  **Check Commit History (Optional but Recommended):**
    *   If the code snippet is too vague, run `git log -n 5` on the file to read the commit messages and understand the broader feature goal.

## 3. Semantic Synthesis

Merge the *logic*, not the lines of text.

1.  **Synthesize the Intent:**
    *   Combine the concepts. Following the example above, the correct resolution is `establish_connection(timeout=30)`. Neither raw HEAD nor raw Incoming contains this exact string.
2.  **Draft the Unified Block:**
    *   Mentally (or in a scratchpad) construct the synthesized code block that completely replaces the entire `<<<<<<< ... >>>>>>>` section.

## 4. Execution & Verification

1.  **Surgical Replacement:**
    *   Use exact file modification tools (`multi_replace_file_content`) to completely replace the conflicted region (including the conflict markers) with the synthesized unified code.
2.  **Verify AST/Syntax Validation:**
    *   Running a text replacement is dangerous. Immediately run a syntax check:
        *   TypeScript: `npx tsc --noEmit`
        *   Python: `python -m py_compile <file>`
3.  **Run Tests:**
    *   Run the specific unit tests covering that file to ensure the semantic merge didn't introduce logic regressions.
    *   Once passing, mark the conflict as resolved using `git add <file>`.
