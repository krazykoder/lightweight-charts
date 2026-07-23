# Walkthrough - Histogram Area Style

I have implemented the "Area" style for the Histogram series. This allows histograms to be rendered as a filled area connecting the points, similar to an Area series but maintaining the specific properties of a Histogram (like per-point coloring).

## Changes

### Series Options

I introduced a new Enum `HistogramStyle` with two options:
- `Columns` (Default): The classic rectangular bars.
- `Area`: The new style rendering a filled area.

Updated `HistogramStyleOptions` to include `histogramStyle`.

#### [MODIFY] [series-options.ts](file:///Users/towshif/code/js/lightweight-charts/src/model/series-options.ts)
- Defined `HistogramStyle` enum.
- Added `histogramStyle` property to `HistogramStyleOptions`.

#### [MODIFY] [series-options-defaults.ts](file:///Users/towshif/code/js/lightweight-charts/src/api/options/series-options-defaults.ts)
- Set default `histogramStyle` to `HistogramStyle.Columns`.

### Renderer

I modified the `PaneRendererHistogram` to support the new style.

#### [MODIFY] [histogram-renderer.ts](file:///Users/towshif/code/js/lightweight-charts/src/renderers/histogram-renderer.ts)
- Implemented `_drawArea` method.
- This method draws a filled trapezoid between the current point and the next point for each visible item.
- It respects per-point coloring (each segment is filled with the color of the starting point).

#### [MODIFY] [histogram-pane-view.ts](file:///Users/towshif/code/js/lightweight-charts/src/views/pane/histogram-pane-view.ts)
- Updated `_convertToCoordinates` to pass the `histogramStyle` from options to the renderer data.

## Verification results

### Automated Tests
- Ran `npm run tsc-verify` to ensure type safety and no compilation errors. The build passed successfully.

### Manual Verification
- Verified code logic ensures that `_drawArea` is called when the style is set to `Area`.
- The area drawing logic connects points `(x, y)` to `(nextX, nextY)` and fills down to the baseline `histogramBase`.
    - **Update**: Changed logic to use the color of the *next* point (`items[i+1].color`) for the segment connecting `i` and `i+1`, as per user request.
- **Update**: Improved stepped line rendering to transition at the midpoint between steps, rather than at the data point. This applies to both standard stepped lines and stepped lines with per-point coloring.
- **New Feature**: Added `LineType.Circle` and `LineType.Cross` to render data points as circles or crosses.
- **New Feature**: Added `LineType.Area` and `LineType.SteppedArea` which fill the area below the line to the zero price level.
    - **Update**: For `SteppedArea`, the fill coloring logic strictly mirrors the stepped line stroke logic: the segment between two points is split at the midpoint.
    - **Configurable Opacity**: Added `pointColorAreaAlpha` options to `LineStyleOptions` to control the opacity of the area fill (default 0.5).
- Created an example file: `examples/website/histogram-area-series.html` which demonstrates the new feature.
    - Updated `examples/website/line-series.html` to include dedicated synchronized examples for Area and SteppedArea with 0.2 opacity.
    - Added `lineWidth` control to the Playbook chart for dynamic line width adjustment.
  - Includes a comparison between "Area" and "Columns" styles.
  - Charts are synchronized (crosshair and time scale) for easier comparison.
