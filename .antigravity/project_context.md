# Project Context

*This file captures the high-level context, architecture decisions, and current state of the project. It should be updated synchronously as new features and major components are added.*

## Phase 1: Foundation
- Pre-built library: TradingView Lightweight Charts v3.8.0-local
- Source fully present in `src/`; no implementation work required
- Architecture documentation captured in `.workflow/02_architecture/`

## Current State
- Architecture documentation complete (2026-03-24)
- No active implementation tasks
- Build, lint, and test commands documented in `CLAUDE.md`

## Architecture Notes
- Five-layer stack: API → GUI → Model → Views → Renderers
- Single runtime dependency: `fancy-canvas@0.2.2`
- Invalidation-based deferred repaint via `InvalidateMask`
- Nominal types (`Coordinate`, `TimePointIndex`, `UTCTimestamp`) enforce type safety
- Full reference: `.workflow/02_architecture/Full_Reference.md`
- Module inventory: `.workflow/02_architecture/module_map.md`
- Frozen invariants: `.workflow/02_architecture/ARCHITECTURE_CONTRACT.md`
