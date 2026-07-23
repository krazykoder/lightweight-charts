# Implementation Plan - Histogram Area Style

The goal is to implement a new "Area" style for the Histogram series, similar to how Line series has different styles/types. This new style should support per-point coloring, meaning the area color can change for each data point.

## User Review Required

> [!IMPORTANT]
> I am introducing a new enum `HistogramStyle` in `src/model/series-options.ts`. The default behavior (Columns) will remain unchanged.

## Proposed Changes

### Model

#### [MODIFY] [series-options.ts](file:///Users/towshif/code/js/lightweight-charts/src/model/series-options.ts)
- Define `HistogramStyle` enum:
  - `Columns` (Default)
  - `Area`
- Update `HistogramStyleOptions` interface to include `histogramStyle: HistogramStyle`.

### Renderers

#### [MODIFY] [histogram-renderer.ts](file:///Users/towshif/code/js/lightweight-charts/src/renderers/histogram-renderer.ts)
- Update `PaneRendererHistogramData` to accept `histogramStyle`.
- Update `PaneRendererHistogram` class:
  - In `_fillPrecalculatedCache`, ensure we have center points (already there).
  - In `draw`, switch based on `histogramStyle`:
    - **Columns**: Existing logic (fillRect).
    - **Area**: New logic to draw connected shapes.
      - Iterate through visible items.
      - For each item `i`, connect `(x[i], y[i])` to `(x[i+1], y[i+1])`.
      - Fill the trapezoid formed by these points and the baseline with `item[i].color`.
      - Handle the last item (or just stop at N-1). *Refinement*: Line series draws N-1 segments. Histogram usually treats N items as N bars. For Area, point N needs to be connected?
        - If we treat it as "Area Chart", it usually ends at the last point.
        - To allow full coverage of the time range, maybe we just draw segments between points.
        - I will follow `PaneRendererLine` logic: iterate indices and draw segments.

### Options Defaults

#### [MODIFY] [series-options-defaults.ts](file:///Users/towshif/code/js/lightweight-charts/src/api/options/series-options-defaults.ts)
- Set default `histogramStyle` to `HistogramStyle.Columns`.

## Verification Plan

### Manual Verification
- I will create a reproduction/demo script (or modify a test) to render a Histogram with `histogramStyle: HistogramStyle.Area`.
- Verify that colors change at each point (per-point coloring).

# Implementation Plan - Stepped Line Midpoint

The goal is to improve the rendering of stepped lines. Instead of stepping at the next data point, the step should occur at the midpoint between the current and next data points.

## Proposed Changes

### Renderers

#### [MODIFY] [line-renderer.ts](file:///Users/towshif/code/js/lightweight-charts/src/renderers/line-renderer.ts)
- Update `_drawLine` logic for `LineType.WithSteps`:
  - Calculate `midX = (currItem.x + prevItem.x) / 2`.
  - Draw horizontal line from `prevItem.x` to `midX` at `prevItem.y`.
  - Handle color change if needed.
  - Draw vertical line at `midX` from `prevItem.y` to `currItem.y`.
  - Draw horizontal line from `midX` to `currItem.x` at `currItem.y`.

#### [MODIFY] [walk-line.ts](file:///Users/towshif/code/js/lightweight-charts/src/renderers/walk-line.ts)
- Update `walkLine` logic for `LineType.WithSteps` to match the midpoint logic (without color handling since `walkLine` is for single-color paths).

## Verification Plan

### Manual Verification
- Check `examples/website/line-series.html`:
  - **Chart 2 (Stepped Line)**: Verify steps occur at midpoints.
  - **Chart 6 (Stepped Per-Point Coloring)**: Verify steps occur at midpoints and colors switch correctly at the vertical step.
