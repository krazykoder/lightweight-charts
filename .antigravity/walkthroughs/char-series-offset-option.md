# Walkthrough: CharSeries Offset Option

I have implemented a new `offset` option for the `CharSeries` type, allowing users to vertically position characters above or below the price point.

## Changes Made

### 1. Style Options
[series-options.ts](file:///Users/towshif/code/js/lightweight-charts/src/model/series-options.ts)
- Added `offset` property to `CharSeriesStyleOptions`.
- Default value is `0` (as defined in [series-options-defaults.ts](file:///Users/towshif/code/js/lightweight-charts/src/api/options/series-options-defaults.ts)).

### 2. Renderer Updates
[char-series-renderer.ts](file:///Users/towshif/code/js/lightweight-charts/src/renderers/char-series-renderer.ts)
- Updated `CharSeriesRendererData` to include the `offset` option.
- Modified `drawChar` to apply the vertical offset during rendering.
- Modified `hitTestChar` to correctly handle hit detection for offset characters.

### 3. Pane View Integration
[char-series-pane-view.ts](file:///Users/towshif/code/js/lightweight-charts/src/views/pane/char-series-pane-view.ts)
- Updated the pane view to propagate the `offset` option from the series options to the renderer.

### 4. Enhanced Examples
[char-series.html](file:///Users/towshif/code/js/lightweight-charts/examples/website/char-series.html)
- Added an **Offset (px)** interactive control to the playbook.
- Added a new hardcoded example **Example 3: Vertical Offset Positioning** demonstrating various offset values (above, below, and aligned).

## Verification Results

### Automated Build
Ran `npm run build` which successfully completed without any type errors or compilation issues.

### Manual Verification
- Verified that the `offset` slider in the interactive playbook correctly moves the characters up (positive values) and down (negative values).
- Verified that hit testing (hovering) works correctly even when characters are offset.
- Confirmed that the new hardcoded example displays correctly with multiple series at different offsets.

render_diffs(file:///Users/towshif/code/js/lightweight-charts/src/model/series-options.ts)
render_diffs(file:///Users/towshif/code/js/lightweight-charts/src/renderers/char-series-renderer.ts)
render_diffs(file:///Users/towshif/code/js/lightweight-charts/src/views/pane/char-series-pane-view.ts)
render_diffs(file:///Users/towshif/code/js/lightweight-charts/examples/website/char-series.html)
