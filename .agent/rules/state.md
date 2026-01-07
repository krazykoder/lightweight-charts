---
trigger: manual
---

# Project State Manifest: Line Series Enhancements

## Current Goal
Implement advanced line rendering types ([Area](cci:2://file:///Users/towshif/code/js/lightweight-charts/src/model/series-options.ts:222:0-301:29), `SteppedArea`) with per-point coloring, configurable transparency, and robust interactive examples to demonstrate these capabilities in the `lightweight-charts` library.

## Completed Milestones
- [x] **New Line Types**: Added `LineType.Area` and `LineType.SteppedArea` to the core renderer.
- [x] **Per-Point Coloring**: Implemented segment-based coloring for both new area types.
    - `SteppedArea` correctly transitions color at the horizontal midpoint (`midX`), strictly mirroring the stroke logic.
- [x] **Configurable Transparency**: Added `pointColorAreaAlpha` option (default `0.5`) to [LineStyleOptions](cci:2://file:///Users/towshif/code/js/lightweight-charts/src/model/series-options.ts:152:0-217:29).
- [x] **Base Level Logic**: Implemented area filling down to the coordinate corresponding to price `0`.
- [x] **Interactive Playbook**: Updated [examples/website/line-series.html](cci:7://file:///Users/towshif/code/js/lightweight-charts/examples/website/line-series.html:0:0-0:0) with a "Mix & Match" chart controlling:
    - Line Type (`Simple` to `SteppedArea`)
    - Line Style (`Solid`, `Dotted`, etc.)
    - Per-Point Coloring (toggle)
    - Area Opacity (0.0 - 1.0)
    - Line Width (1 - 10px)
- [x] **Synchronized Examples**: Added dedicated, crosshair-synchronized examples for [Area](cci:2://file:///Users/towshif/code/js/lightweight-charts/src/model/series-options.ts:222:0-301:29) and `SteppedArea` (at 0.2 opacity) to [examples/website/line-series.html](cci:7://file:///Users/towshif/code/js/lightweight-charts/examples/website/line-series.html:0:0-0:0).

## Source of Truth
*   **Enum Definition**: [src/renderers/draw-line.ts](cci:7://file:///Users/towshif/code/js/lightweight-charts/src/renderers/draw-line.ts:0:0-0:0) (added [Area](cci:2://file:///Users/towshif/code/js/lightweight-charts/src/model/series-options.ts:222:0-301:29), `SteppedArea`).
*   **Rendering Logic**: [src/renderers/line-renderer.ts](cci:7://file:///Users/towshif/code/js/lightweight-charts/src/renderers/line-renderer.ts:0:0-0:0)
    *   [_drawLine](cci:1://file:///Users/towshif/code/js/lightweight-charts/src/renderers/line-renderer.ts:78:1-337:2): Handles `LineType.Area` and `LineType.SteppedArea`.
    *   Key Logic: `SteppedArea` splits the fill polygon at [(prevX + currX) / 2](cci:1://file:///Users/towshif/code/js/lightweight-charts/src/renderers/line-renderer.ts:30:1-32:2).
*   **Options Interface**: [src/model/series-options.ts](cci:7://file:///Users/towshif/code/js/lightweight-charts/src/model/series-options.ts:0:0-0:0) (`pointColorAreaAlpha`).
*   **View Logic**: [src/views/pane/line-pane-view.ts](cci:7://file:///Users/towshif/code/js/lightweight-charts/src/views/pane/line-pane-view.ts:0:0-0:0) ([_convertToCoordinates](cci:1://file:///Users/towshif/code/js/lightweight-charts/src/views/pane/line-pane-view.ts:46:1-50:2) calculates `_baseLevelCoordinate` at price 0).
*   **Validation**: [examples/website/line-series.html](cci:7://file:///Users/towshif/code/js/lightweight-charts/examples/website/line-series.html:0:0-0:0) (Playbook and Chart 9/Chart 10 sync logic).

## Resolved Blockers & Critical Fixes
1.  **Stepped Area Coloring**: Do **not** revert the fill logic for `SteppedArea`. It MUST split at `midX` to match the stepped line stroke. Left half = `prevColor`, Right half = `currColor`.
2.  **Crosshair Synchronization**: The example code in [line-series.html](cci:7://file:///Users/towshif/code/js/lightweight-charts/examples/website/line-series.html:0:0-0:0) MUST use explicit mutex flags (`isSyncing9`, `isSyncing10`, etc.) to prevent infinite recursion events. Do not use simple `forEach` loops for sync.
3.  **Variable Declaration**: Ensure [line-series.html](cci:7://file:///Users/towshif/code/js/lightweight-charts/examples/website/line-series.html:0:0-0:0) script does not redeclare variables (`lineWidthInput`, `perPointColorCheckbox`) when setting up listeners.

## Known Technical Debt
*   **Hardcoded Base Level**: The area base level is currently hardcoded to `price: 0` in [line-pane-view.ts](cci:7://file:///Users/towshif/code/js/lightweight-charts/src/views/pane/line-pane-view.ts:0:0-0:0). This is not exposed as a user option yet.
*   **HTML Structure**: [examples/website/line-series.html](cci:7://file:///Users/towshif/code/js/lightweight-charts/examples/website/line-series.html:0:0-0:0) has grown significantly. Future work might benefit from splitting strict automated tests from this interactive playbook.

## Immediate Next Step
1.  Validate that `npm run build:prod` passes in the fresh environment.
2.  If further customization is required (e.g., changing the base level from 0), extend [LineStyleOptions](cci:2://file:///Users/towshif/code/js/lightweight-charts/src/model/series-options.ts:152:0-217:29).