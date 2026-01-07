---
trigger: manual
---

# Project Status & Tasks

## Completed High-Level Tasks

### 1. Histogram Series Enhancements
- **Goal**: Allow Histogram series to be rendered as an area-like visualization.
- **Implementation**:
    - Added \`HistogramStyle.Area\` option.
    - Created \`examples/website/histogram-area-series.html\` to demonstrate the new style and compare it with the default \`Columns\` style.

### 2. Line Series Enhancements
- **Goal**: Introduce \`Area\` and \`SteppedArea\` line types with advanced styling capabilities.
- **Implementation**:
    - **New Line Types**: \`LineType.Area\` and \`LineType.SteppedArea\`.
    - **Per-Point Coloring**: Supported for both fill and stroke. \`SteppedArea\` fill transitions at the midpoint of the step to match the stroke behavior.
    - **Configurable Transparency**: Added \`pointColorAreaAlpha\` to \`LineStyleOptions\` (default \`0.5\`) to control area fill opacity.
    - **Playbook**: Updated \`examples/website/line-series.html\` with a comprehensive interactive playbook and synchronized examples for the new types.

## Architecture Changes

### Line Renderer (\`src/renderers/line-renderer.ts\`)
- **Base Level Support**: Extended \`PaneRendererLineDataBase\` to include optional \`baseLevelCoordinate\` for area filling.
- **Alpha Support**: Updated \`_drawLine\` to accept and apply \`pointColorAreaAlpha\` via \`applyAlpha\` helper.
- **Fill Logic**: Implemented polygon filling for \`Area\` and \`SteppedArea\` that respects per-point coloring.

### Series Options (\`src/model/series-options.ts\`)
- **New Option**: Added \`pointColorAreaAlpha\` to \`LineStyleOptions\`.
- **Defaults**: Updated \`series-options-defaults.ts\` with default \`pointColorAreaAlpha: 0.5\`.

### View Layer (\`src/views/pane/line-pane-view.ts\`)
- **Coordinate Calculation**: Overridden \`_convertToCoordinates\` to calculate \`baseLevelCoordinate\` (coordinate of price 0) and pass it to the renderer.

## Current Focus
- ensuring all examples are robust and visually correct." > .agent/rules/current-tasks.md