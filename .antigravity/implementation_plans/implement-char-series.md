# Char Series Implementation Plan

The goal is to implement a new series type, `CharSeries`, which displays UTF characters or emojis at specific data points.

## User Review Required
> [!IMPORTANT]
> - New API method `addCharSeries` will be added to `ChartApi`.
> - Data points will use a new `char` property.
> - If `char` is missing or empty, nothing will be drawn for that point.
> - Only the first character of the string will be displayed.

## Proposed Changes

### Model & Options
#### [MODIFY] [series-options.ts](file:///Users/towshif/code/js/lightweight-charts/src/model/series-options.ts)
- Add `CharSeriesStyleOptions`:
    - `color`: string (default `'#FF0000'`)
    - `size`: number (default `12`) -> Text font size
- Register `Char` in `SeriesOptionsMap`.

#### [MODIFY] [series-options-defaults.ts](file:///Users/towshif/code/js/lightweight-charts/src/api/options/series-options-defaults.ts)
- Add `charSeriesStyleDefaults`.

#### [MODIFY] [data-consumer.ts](file:///Users/towshif/code/js/lightweight-charts/src/api/data-consumer.ts)
- Create `CharSeriesData` extending `SingleValueData`:
    - `char?: string`
    - `color?: string`
    - `size?: number`
- Add `Char` to `SeriesDataItemTypeMap`.

#### [MODIFY] [series-data.ts](file:///Users/towshif/code/js/lightweight-charts/src/model/series-data.ts)
- Add `CharSeriesPlotRow` with `char?: string`.
- Add `Char` to `SeriesPlotRowTypeAtTypeMap`.

### API
#### [MODIFY] [chart-api.ts](file:///Users/towshif/code/js/lightweight-charts/src/api/chart-api.ts)
- Add `addCharSeries(options?: CharSeriesPartialOptions): ISeriesApi<'Char'>`.

#### [MODIFY] [series.ts](file:///Users/towshif/code/js/lightweight-charts/src/model/series.ts)
- Update `_recreatePaneViews` to handle `seriesType === 'Char'`.

#### [MODIFY] [get-series-plot-row-creator.ts](file:///Users/towshif/code/js/lightweight-charts/src/api/get-series-plot-row-creator.ts)
- [Completed] Implement `getCharSeriesPlotRow` to copy `char` to plot row.

### Renderer & Views
#### [NEW] [char-series-renderer.ts](file:///Users/towshif/code/js/lightweight-charts/src/renderers/char-series-renderer.ts)
- [Completed] Implement `CharSeriesRenderer`.
    - Handles text baseline and alignment.
    - [Fixed] Use `Array.from(char)[0]` to support surrogate pairs (emojis).
- `drawImpl`:
    - Check for `item.char`.
    - Set `ctx.font` based on `item.size`.
    - `ctx.fillText` centered at `item.x, item.y`.
    - Ensure only 1 char is drawn (`char[0]`).

#### [NEW] [char-series-pane-view.ts](file:///Users/towshif/code/js/lightweight-charts/src/views/pane/char-series-pane-view.ts)
- Create `SeriesCharPaneView` to instantiate `CharSeriesRenderer`.
- Map `CharSeriesPlotRow` to `CharSeriesRendererDataItem`.

### Validation
#### [MODIFY] [data-validators.ts](file:///Users/towshif/code/js/lightweight-charts/src/api/data-validators.ts)
- Add `Char` validation case.

## Verification Plan

### Manual Verification
- Create `examples/website/char-series.html`.
- Display a sine wave of chars/emojis.
- Verify scaling, color, and conditional rendering (missing chars).
