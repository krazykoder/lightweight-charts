---
trigger: always_on
---

# Antigravity Artifact Sync Rules

## 1. Source of Truth & Mirroring
- **Primary**: Use Antigravity's internal artifact system (State, Task Lists, Implementation Plans) for active work.
- **Mirror**: Sync the internal state to the `./.antigravity/` workspace folder at the start and end of every session.

## 2. Workspace Artifact Definitions
- **`./.antigravity/completed_tasks.md`**: Append-only log. When an Antigravity internal task is marked "Complete," append the summary here.
- **`./.antigravity/task.md`**: A markdown mirror of the current internal Antigravity Task List.
- **`./.antigravity/session_logs.md`**: Append only - Captures the "Current State" and "Next Steps" when a session ends or the agent is paused.
- ** `./.antigravity/project_context.md`: Append only - Captures project context for features implemented and keeps appending. 

## 3. Workflow Integration

### 🟢 Session Initialization
1. **Sync In**: Read `./.antigravity/session_logs.md` and `task.md`.
2. **Rehydrate**: Populate the current Antigravity Chat Task List/Artifacts using the data found in these workspace files to ensure continuity.

### 🔄 Active Tasking
- As Antigravity's internal **Task List** updates, periodically update the workspace `./.antigravity/task.md` so the file reflects the UI state.

### 🔴 Session Wrap-up
1. **Document plans and walkthrough**
- Always save a copy of the final copy implementation plan to `./.antigravity/implementation_plan/` directory after implementaion of a feature or request 
- Always save a copy of the final copy walkthrough to `./.antigravity/walkthrough/` directory after implementaion of a feature or request 

2. **Internal-to-File Sync**:
    - **Archive**: Move completed items from the internal Task List to `./.antigravity/completed_tasks.md`.
    - **Snapshot**: Generate a "State Snapshot" in `./.antigravity/session_logs.md` including:
        - Current goal status.
        - Blockers or technical debt.
        - The specific instruction for the next session's starting point.
`./.antigravity/project_context.md`, 
  - keep updating project context here related to features implpemented
