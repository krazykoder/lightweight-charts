# Implementation Plan - Shape Series

We will implement a new series type `ShapeSeries` that displays a horizontal sequence of shapes at a fixed Y location (top, bottom, or specific price). Each data point specifies the time, shape, and color.

## User Review Required

> [!IMPORTANT]
> **Positioning Logic**:
> - We propose a `position` option: `'top' | 'bottom' | 'value'`.
> - If `'top'` or `'bottom'`, the shapes render at a fixed pixel distance from the respective edge of the pane.
> - If `'value'`, the shapes render at a specific value level defined by a `fixedValue` option (default 0).
> - **Question**: Does this cover your "fixed y location" requirement?

> [!IMPORTANT]
> **Data Structure**:
> - We will use the existing `SingleValueData` structure but effectively ignore the `value` for positioning (unless arguably used for the `price` mode if per-point? But you said "entire series has a fixed y").
> - We will extend the data to allow optional `shape` and `color` per point.
> - **Question**: Do you want specific shapes *only* (no value used at all)? If so, we might need a custom data interface like `ShapeData { time, shape?, color? }`.

## Proposed Changes

### Model & Options
#### [MODIFY] [series-options.ts](file:///Users/towshif/code/js/lightweight-charts/src/model/series-options.ts)
- Add `ShapeSeriesStyleOptions`.
- Properties:
    - `position`: `'top' | 'bottom' | 'value'` (default `'top'`)
    - `fixedValue`: number (used if position is `'value'`)
    - `globalShape`: Default shape for the series.
    - `globalColor`: Default color.
    - `size`: Default size.

#### [NEW] [shape-series-renderer.ts](file:///Users/towshif/code/js/lightweight-charts/src/renderers/shape-series-renderer.ts)
- Implement `ShapeSeriesRenderer` extending `ScaledRenderer` (or similar).
- Logic to draw shapes at the calculated Y position.
- Reuse `drawCircle`, `drawSquare`, etc. from `series-markers-*.ts`.

### View Layer
#### [NEW] [shape-series-pane-view.ts](file:///Users/towshif/code/js/lightweight-charts/src/views/pane/shape-series-pane-view.ts)
- Bridge between Model and Renderer.
- Calculates the Y coordinate:
    - If `top`: `margin` pixels from top.
    - If `bottom`: `height - margin` pixels.
    - If `value`: Convert `options.fixedValue` using `priceScale.priceToCoordinate`.

### API
#### [MODIFY] [chart-api.ts](file:///Users/towshif/code/js/lightweight-charts/src/api/chart-api.ts)
- Add `addShapeSeries(options)` method.

## Verification Plan

### Automated Tests
- None planned for this visual feature unless unit tests for renderer are requested.

### Manual Verification
1.  **Playbook**: Create `examples/website/shape-series.html`.
2.  **Test Cases**:
    - **Positioning**: Switch between Top, Bottom, and Price modes.
    - **Per-point Styles**: Verify points with custom shapes/colors override defaults.
    - **Responsiveness**: Resize chart, ensure Top/Bottom shapes stay pinned.
    - **Scrolling**: Ensure 'Price' shapes move with the scale, 'Top/Bottom' shapes stay fixed? (Or should Top/Bottom also be static overlay? "Top of viewable canvas" implies static overlay).
