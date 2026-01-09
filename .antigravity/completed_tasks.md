# Completed Tasks

## 2026-01-06 - Vertical Line Implementation
- [x] Analyze `vertical-line` plugin implementation
- [x] Create Implementation Plan
- [x] Integrate `VerticalLine` into `src`
    - [x] Create data structures/model `vertical-line-options.ts`, `vertical-line.ts`
    - [x] Implement renderer `vertical-line-renderer.ts`
    - [x] Implement pane view `vertical-line-pane-view.ts`
    - [x] Implement time axis view `vertical-line-time-axis-view.ts`
    - [x] Modify `series.ts` to integrate
    - [x] Expose in API `index.ts`
- [x] Create Example in `examples`
- [x] Verify Implementation
    - [x] Build and Deploy to `examples`
    - [x] Refine Example with Real Data
    - [x] Fix: Axis label not visible (missing `dataSources` in `ChartModel`).
    - [x] Feature: Add `axisLabelVisibleAtEdge` option (Sticky labels).
    - [x] Default: Set `axisLabelVisibleAtEdge` to `false`.
    - [x] Example: Update `vertical-line.html` with Line and Histogram examples.
    - [x] Example: Add link to `index.html`.

## 2026-01-07 - Line Types & Markers
### Line Types Enhancements
- [x] **Implement Shape Line Types**
    - [x] Add `Square` to `LineType` enum and renderer
    - [x] Add `Diamond` to `LineType` enum and renderer
    - [x] Fix `Diamond` notch artifact (path closing)
    - [x] Fix "black dot" artifact in shapes (fill initialization)
- [x] **Implement ConnectedCircles Line Type**
    - [x] Add `ConnectedCircles` to `LineType` enum
    - [x] Implement rendering logic (lines + circles)
    - [x] Fix duplicate `ctx.fill()` bug
    - [x] Fix circle sizing (use `stroke` to match `LineType.Circle` size)
    - [x] Fix z-ordering (lines drawn behind circles)

### Markers Playbook
- [x] **Create Interactive Playground** (`examples/website/markers.html`)
    - [x] Implement Series Type switching (Line, Bar, Candlestick, Histogram)
    - [x] Implement Marker controls (Position, Shape, Color, Size, Text)
    - [x] Add missing shapes (`triangleUp`, `triangleDown`) to UI
    - [x] Stabilize data and markers (persistence across edits)
    - [x] Add "Regenerate" functionality

## 2026-01-07 - Shape Series & Plus Line Type
### Shape Series Enhancements
- [x] **Shape Series Implementation**
    - [x] Fix "Unknown chart style" error (Add Shape to `SeriesBarColorer`)
    - [x] Update playbook to verify Shape Series features
    - [x] Debug and fix Shape Series build/type errors
    - [x] Fix live updates for Shape Series defaults
    - [x] Enable per-point size support for Shape Series
- [x] **AddShapeSeries API**
    - [x] Implement `addShapeSeries` method in `ChartApi` class
    - [x] Integrate with `ShapeSeriesPartialOptions`

### Additional Shapes
- [x] **New Shapes Support**
    - [x] Add `Diamond` shape (filled polygon)
    - [x] Add `Cross` shape (stroked lines)
    - [x] Add `Plus` shape (stroked lines)
    - [x] Implement shared renderer logic in `src/renderers/series-markers-*.ts`
    - [x] Integrate new shapes into `ShapeSeriesRenderer`
    - [x] Integrate new shapes into `SeriesMarkersRenderer`
- [x] **Plus Line Type**
    - [x] Add `Plus` to `LineType` enum
    - [x] Implement `Plus` line renderer using shared `drawPlus` logic
- [x] **Playbook Updates**
    - [x] Update `shape-series.html` with new shapes
    - [x] Update `line-series.html` with `Plus` line type example

## 2026-01-07 - Session Verification
- [x] Verify Builds (npm run build:prod)
- [x] Explore examples/website/shape-series.html
- [x] Add Shape Series link to `index.html`

## 2026-01-07 - Shape Series Advanced Features
### Core Support
- [x] **Sparse Shape Support**
    - [x] Make `shape` optional in options and data
    - [x] Handle undefined shapes in renderer (draw nothing)
    - [x] Update `shape-series.html` to demonstrate sparse data

### Anti-Overlap (Levels)
- [x] **Stacked Levels Support**
    - [x] Add `level` and `levelSpacing` to `ShapeSeriesOptions`
    - [x] Implement offset logic in `ShapeSeriesPaneView`
    - [x] Create `multi-shape-series.html` playbook to demonstrate stacking

### Text Labels
- [x] **Label Support**
    - [x] Add `text` property to `ShapeSeriesRendererDataItem`
    - [x] Implement text rendering in `ShapeSeriesRenderer`
    - [x] Implement auto-positioning logic (above/below shape)
    - [x] Implement text truncation (20 chars)
    - [x] Add `labelOffset` option for configurable spacing
    - [x] Update examples to demonstrate labels

### Documentation
- [x] Create `examples/FEATURES.md` documenting new capabilities

## 2026-01-07 - Shape Series Final Polish
### Randomization & Null Handling
- [x] **Improved Randomization**
    - [x] Implement "contiguous gaps" (streaks of undefined shapes) in examples.
    - [x] Ensure `undefined` (no shape) is a first-class citizen in randomization.

### Playbook Refactoring
- [x] **Format Standardization**
    - [x] Refactor `shape-series.html` and `multi-shape-series.html` to mimic `line-series.html`.
    - [x] Add Interactive "Playbook" section with "Randomize" toggle.
    - [x] Add standalone "Hardcoded Examples" for clear usage demonstration.
- [x] **Visibility Fixes**
    - [x] Convert invalid `aboveBar`/`belowBar` positions to `top`/`bottom`.
    - [x] Ensure `value` property is present in all Shape Series data points (required by model even if unused by position).
- [x] **Example Accuracy**
    - [x] Sync "Shapes on Price Levels" snippet with implementation.
    - [x] Add text labels to price level examples.

## [2026-01-08] Implement CharSeries API
- Implemented `CharSeries` for displaying UTF characters and emojis on charts.
- Added `addCharSeries` to `ChartApi`.
- Created `CharSeriesRenderer` with support for surrogate pairs (emojis) using `Array.from(char)[0]`.
- Added `SeriesCharPaneView` for data-to-renderer mapping.
- [x] Integrate into `SeriesOptionsMap`, `SeriesBarColorer`, and data validators.
- [x] Create interactive playbook `examples/website/char-series.html`.

## 2026-01-08 - CharShapeSeries Implementation
- [x] Implement `CharShapeSeries` API
    - [x] Create `CharShapeSeriesRenderer` and `SeriesCharShapePaneView`
    - [x] Define options interfaces (`CharShapeSeriesOptions`, `CharShapeSeriesStyleOptions`)
    - [x] Integrate `CharShapeSeries` into `ChartApi` (`addCharShapeSeries`)
    - [x] Update `Series` model and factories (`series.ts`, `series-bar-colorer.ts`, `get-series-plot-row-creator.ts`)
    - [x] Fix `SeriesBarColorer` to handle `CharShape` type (resolving "Unknown chart style" error)
- [x] Create Verification Example
    - [x] Create `examples/website/char-shape-series.html` with interactive controls
    - [x] Verify rendering of chars, emojis, and labels
    - [x] Update `examples/website/index.html` with links
- [x] Verification
    - [x] Validated with automated browser test (no console errors, correct visual updates)

## 2026-01-09 - Dynamic Data Unpacker
- [x] Update `examples/unpack-all-data.py` to dynamically handle columns from `examples/data.json`.
- [x] Verify script execution and output in `examples/app-data.js`.
