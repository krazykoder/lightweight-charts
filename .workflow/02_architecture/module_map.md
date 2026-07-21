# Module Map
**Project:** lightweight-charts v3.8.0-local
**Last updated:** 2026-03-24

One line per file. Responsibility = what this file owns.

---

## Entry Points

| File | Responsibility |
|---|---|
| `src/index.ts` | Public ESM entry — re-exports all public API symbols |
| `src/standalone.ts` | Standalone IIFE entry — wraps ESM exports into `window.LightweightCharts` |

---

## Layer 1 — API (`src/api/`)

| File | Responsibility |
|---|---|
| `create-chart.ts` | `createChart()` factory — resolves container element, returns `IChartApi` |
| `chart-api.ts` | `ChartApi` — implements `IChartApi`; owns `ChartWidget` and `DataLayer` |
| `series-api.ts` | `SeriesApi` — implements `ISeriesApi`; wraps internal `Series` model |
| `candlestick-series-api.ts` | `CandlestickSeriesApi` — extends `SeriesApi` with candlestick-specific option migration |
| `time-scale-api.ts` | `TimeScaleApi` — implements `ITimeScaleApi`; wraps `TimeScale` model |
| `price-scale-api.ts` | `PriceScaleApi` — implements `IPriceScaleApi`; wraps `PriceScale` model |
| `price-line-api.ts` | `PriceLineApi` — implements `IPriceLine`; wraps `CustomPriceLine` model |
| `data-layer.ts` | `DataLayer` — normalizes user time-series input into internal `SeriesPlotRow` / `TimeScalePoint` structures |
| `data-consumer.ts` | `isBusinessDay()`, `isUTCTimestamp()` type guards; `Time` / `SeriesDataItemTypeMap` types |
| `data-validators.ts` | Runtime validation of user-supplied series data items |
| `get-series-plot-row-creator.ts` | Factory: returns the correct `PlotRow` creator function per `SeriesType` |
| `time-scale-point-weight-generator.ts` | Assigns tick-mark weights to `TimeScalePoint[]` for label density decisions |
| `ichart-api.ts` | `IChartApi` interface definition |
| `iseries-api.ts` | `ISeriesApi` interface definition |
| `itime-scale-api.ts` | `ITimeScaleApi` interface definition |
| `iprice-scale-api.ts` | `IPriceScaleApi` interface definition |
| `iprice-line.ts` | `IPriceLine` interface definition |
| `options/chart-options-defaults.ts` | Default values for `ChartOptions` |
| `options/series-options-defaults.ts` | Default values for all `SeriesOptions` variants |
| `options/crosshair-options-defaults.ts` | Default values for `CrosshairOptions` |
| `options/grid-options-defaults.ts` | Default values for `GridOptions` |
| `options/layout-options-defaults.ts` | Default values for `LayoutOptions` |
| `options/price-line-options-defaults.ts` | Default values for `PriceLineOptions` |
| `options/price-scale-options-defaults.ts` | Default values for `PriceScaleOptions` |
| `options/time-scale-options-defaults.ts` | Default values for `TimeScaleOptions` |
| `options/watermark-options-defaults.ts` | Default values for `WatermarkOptions` |

---

## Layer 2 — GUI (`src/gui/`)

| File | Responsibility |
|---|---|
| `chart-widget.ts` | `ChartWidget` — root DOM/canvas manager; owns pane widgets, time-axis widget; schedules RAF redraws |
| `pane-widget.ts` | `PaneWidget` — manages one pane canvas; iterates views and calls renderers |
| `price-axis-widget.ts` | `PriceAxisWidget` — renders price axis labels onto its own canvas |
| `price-axis-stub.ts` | `PriceAxisStub` — placeholder element when price axis is hidden |
| `time-axis-widget.ts` | `TimeAxisWidget` — renders time axis tick labels |
| `pane-separator.ts` | `PaneSeparator` — draggable divider between panes (currently disabled in widget) |
| `mouse-event-handler.ts` | `MouseEventHandler` — unifies mouse and touch events into internal pointer events |
| `kinetic-animation.ts` | `KineticAnimation` — momentum scrolling after touch fling |
| `canvas-utils.ts` | Canvas creation helpers; DPR detection; `getContext2D`, `Size` |
| `labels-image-cache.ts` | `LabelsImageCache` — caches rendered axis label bitmaps to avoid re-drawing text |

---

## Layer 3 — Model (`src/model/`)

| File | Responsibility |
|---|---|
| `chart-model.ts` | `ChartModel` — root model; owns panes, price scales, time scale, crosshair, watermark |
| `pane.ts` | `Pane` — one horizontal band; owns its `Series` list and price scales |
| `series.ts` | `Series` — holds `PlotList`, series options, creates all view objects for this series |
| `series-data.ts` | `SeriesPlotList` type alias; `createSeriesPlotList()`; `SeriesPlotRow` shape per series type |
| `series-options.ts` | All series option types (`AreaSeriesOptions`, `CandlestickSeriesOptions`, etc.) and `SeriesType` enum |
| `series-markers.ts` | `SeriesMarker` / `InternalSeriesMarker` types and marker sort logic |
| `series-bar-colorer.ts` | `SeriesBarColorer` — computes fill/border/wick colors per bar from series options |
| `price-scale.ts` | `PriceScale` — price↔coordinate conversion; supports normal / log / percentage modes |
| `price-scale-conversions.ts` | Pure math functions for price scale mode conversions |
| `price-tick-mark-builder.ts` | Computes price tick mark positions for axis labels |
| `price-tick-span-calculator.ts` | Determines the span between price ticks |
| `price-data-source.ts` | `PriceDataSource` abstract base — implemented by `Series` and `CustomPriceLine` |
| `price-range-impl.ts` | `PriceRangeImpl` — mutable price range (min/max) |
| `price-formatter-fn.ts` | Wraps a price formatter function as an `IPriceFormatter` |
| `price-line-options.ts` | `PriceLineOptions` type |
| `custom-price-line.ts` | `CustomPriceLine` — user-created horizontal price lines |
| `time-scale.ts` | `TimeScale` — time↔coordinate conversion; tick mark management; visible range |
| `time-data.ts` | Core time types: `TimePoint`, `TimePointIndex`, `UTCTimestamp`, `BusinessDay`, `TimeScalePoint`, `LogicalRange` |
| `time-scale-visible-range.ts` | `TimeScaleVisibleRange` — current visible logical range |
| `tick-marks.ts` | `TickMarks` — stores and queries time axis tick marks |
| `plot-list.ts` | `PlotList` — sorted array of `PlotRow` with binary-search access |
| `plot-data.ts` | `PlotRow` shape; `PlotRowValueIndex` enum (open/high/low/close/value) |
| `crosshair.ts` | `Crosshair` — tracks pointer position and emits crosshair pane/axis views |
| `magnet.ts` | `Magnet` — snaps crosshair to nearest series data point |
| `grid.ts` | `Grid` — grid line data source |
| `watermark.ts` | `Watermark` — chart watermark text options and data source |
| `invalidate-mask.ts` | `InvalidateMask` / `InvalidationLevel` — deferred repaint signaling |
| `autoscale-info-impl.ts` | `AutoscaleInfoImpl` — price range info used by price scale auto-scaling |
| `bar.ts` | `BarPrice`, `BarPrices` types |
| `coordinate.ts` | `Coordinate` nominal type |
| `point.ts` | `Point` — `{x, y}` pixel coordinate pair |
| `data-source.ts` | `DataSource` abstract base for all chart objects that have pane views |
| `idata-source.ts` | `IDataSource` interface |
| `iprice-data-source.ts` | `IPriceDataSource` interface |
| `default-price-scale.ts` | `DefaultPriceScaleId` enum (`left`, `right`) and `isDefaultPriceScale()` guard |
| `default-tick-mark-formatter.ts` | Default time axis label formatter |
| `formatted-labels-cache.ts` | `FormattedLabelsCache` — memoizes formatted label strings |
| `layout-options.ts` | `LayoutOptions`, `ColorType` enum |
| `localization-options.ts` | `LocalizationOptions` — date/price locale settings |
| `range-impl.ts` | `RangeImpl<T>` — generic min/max range |
| `sort-sources.ts` | `sortSources()` — z-order sorting for data sources within a pane |
| `text-width-cache.ts` | `TextWidthCache` — memoizes `measureText()` results |

---

## Layer 4 — Views (`src/views/`)

### Pane Views (`src/views/pane/`)

| File | Responsibility |
|---|---|
| `ipane-view.ts` | `IPaneView` interface |
| `iupdatable-pane-view.ts` | `IUpdatablePaneView` — adds `update()` lifecycle |
| `series-pane-view-base.ts` | Abstract base for all series pane views |
| `line-pane-view-base.ts` | Abstract base for line-based series (line, area, baseline) |
| `area-pane-view.ts` | `SeriesAreaPaneView` — prepares area renderer data |
| `line-pane-view.ts` | `SeriesLinePaneView` — prepares line renderer data |
| `baseline-pane-view.ts` | `SeriesBaselinePaneView` — prepares baseline renderer data |
| `bars-pane-view-base.ts` | Abstract base for bar-based series (bars, candlesticks) |
| `bars-pane-view.ts` | `SeriesBarsPaneView` — prepares bars renderer data |
| `candlesticks-pane-view.ts` | `SeriesCandlesticksPaneView` — prepares candlestick renderer data |
| `histogram-pane-view.ts` | `SeriesHistogramPaneView` — prepares histogram renderer data |
| `crosshair-pane-view.ts` | `CrosshairPaneView` — crosshair lines across the pane |
| `crosshair-marks-pane-view.ts` | `CrosshairMarksPaneView` — crosshair dot on series |
| `grid-pane-view.ts` | `GridPaneView` — grid lines |
| `watermark-pane-view.ts` | `WatermarkPaneView` — watermark text |
| `series-price-line-pane-view.ts` | Last-price line drawn across pane |
| `series-horizontal-line-pane-view.ts` | Generic horizontal line base |
| `series-horizontal-base-line-pane-view.ts` | Baseline series zero-line |
| `custom-price-line-pane-view.ts` | User-created price line in pane |
| `series-last-price-animation-pane-view.ts` | Animated dot on last price |
| `series-markers-pane-view.ts` | Series marker shapes (arrow, circle, square, triangle) |
| `pane-price-axis-view.ts` | `PanePriceAxisView` — price label rendered within the pane area |

### Price-Axis Views (`src/views/price-axis/`)

| File | Responsibility |
|---|---|
| `iprice-axis-view.ts` | `IPriceAxisView` interface |
| `price-axis-view.ts` | `PriceAxisView` — base; renders a label on the price axis widget |
| `series-price-axis-view.ts` | Current price label on price axis |
| `crosshair-price-axis-view.ts` | Crosshair label on price axis |
| `custom-price-line-price-axis-view.ts` | Custom price line label on price axis |

### Time-Axis Views (`src/views/time-axis/`)

| File | Responsibility |
|---|---|
| `itime-axis-view.ts` | `ITimeAxisView` interface |
| `crosshair-time-axis-view.ts` | Crosshair label on time axis |

---

## Layer 5 — Renderers (`src/renderers/`)

| File | Responsibility |
|---|---|
| `ipane-renderer.ts` | `IPaneRenderer` interface |
| `iprice-axis-view-renderer.ts` | `IPriceAxisViewRenderer` interface |
| `itime-axis-view-renderer.ts` | `ITimeAxisViewRenderer` interface |
| `area-renderer.ts` | Draws area series (filled polygon + line) |
| `line-renderer.ts` | Draws line series |
| `baseline-renderer.ts` | Draws baseline series (two-color fill) |
| `bars-renderer.ts` | Draws OHLC bar series |
| `candlesticks-renderer.ts` | Draws candlestick series |
| `histogram-renderer.ts` | Draws histogram series |
| `crosshair-renderer.ts` | Draws crosshair lines |
| `grid-renderer.ts` | Draws grid lines |
| `watermark-renderer.ts` | Draws watermark text |
| `horizontal-line-renderer.ts` | Draws a single horizontal line (price lines) |
| `marks-renderer.ts` | Draws circular crosshair marks on series |
| `series-markers-renderer.ts` | Orchestrates marker shape renderers |
| `series-markers-arrow.ts` | Arrow marker shape |
| `series-markers-circle.ts` | Circle marker shape |
| `series-markers-square.ts` | Square marker shape |
| `series-markers-triangle.ts` | Triangle marker shape |
| `series-markers-text.ts` | Text label for markers |
| `series-markers-utils.ts` | Shared marker geometry utilities |
| `series-last-price-animation-renderer.ts` | Animated pulsing dot |
| `composite-renderer.ts` | `CompositeRenderer` — wraps multiple renderers into one |
| `scaled-renderer.ts` | `ScaledRenderer` — applies canvas scale transform around a child renderer |
| `draw-line.ts` | `LineStyle`, `LineType` enums; `drawLine()` primitive |
| `walk-line.ts` | `walkLine()` — iterates line points handling gaps |
| `optimal-bar-width.ts` | Calculates optimal bar width from bar spacing |
| `price-axis-view-renderer.ts` | Renders price axis label box + text |
| `price-axis-renderer-options-provider.ts` | Provides shared rendering options to axis renderers |
| `time-axis-view-renderer.ts` | Renders time axis tick label |

---

## Shared Utilities

### Formatters (`src/formatters/`)

| File | Responsibility |
|---|---|
| `iprice-formatter.ts` | `IPriceFormatter` interface |
| `price-formatter.ts` | `PriceFormatter` — formats price as decimal string |
| `percentage-formatter.ts` | `PercentageFormatter` — formats price as percentage |
| `volume-formatter.ts` | `VolumeFormatter` — formats large numbers with K/M suffixes |
| `date-formatter.ts` | `DateFormatter` — formats `BusinessDay` as locale date string |
| `date-time-formatter.ts` | `DateTimeFormatter` — formats UTC timestamp as date+time string |
| `time-formatter.ts` | `TimeFormatter` — formats UTC timestamp as time-only string |
| `format-date.ts` | `formatDate()` — low-level date part extraction |

### Helpers (`src/helpers/`)

| File | Responsibility |
|---|---|
| `nominal.ts` | `Nominal<T, Name>` — type branding utility |
| `strict-type-checks.ts` | `DeepPartial<T>`, `isString()`, `isBoolean()`, `merge()`, etc. |
| `assertions.ts` | `assert()`, `ensureDefined()`, `ensureNotNull()` |
| `delegate.ts` | `Delegate<T>` — typed event emitter / subscription |
| `isubscription.ts` | `ISubscription` interface |
| `idestroyable.ts` | `IDestroyable` interface |
| `algorithms.ts` | `lowerbound()`, `upperbound()` — binary search on sorted arrays |
| `mathex.ts` | `clamp()`, `log2()`, etc. |
| `color.ts` | Color parsing and manipulation utilities |
| `canvas-helpers.ts` | `drawScaled()` — DPR-aware canvas drawing helper |
| `make-font.ts` | `makeFont()` — CSS font string builder |
| `browsers.ts` | Browser detection (mobile, touch) |
| `events.ts` | DOM event helpers |
| `is-running-on-client-side.ts` | SSR guard — checks `typeof window` |
| `logger.ts` | `warn()` — console warning wrapper |
| `text-width-cache.ts` | (re-exported from model) |

---

## Build & Config Files

| File | Responsibility |
|---|---|
| `rollup.config.js` | Rollup bundle configuration — 4 output variants |
| `tsconfig.prod.json` | Production TSC config — outputs to `lib/prod/` |
| `tsconfig.options.json` | Shared compiler options base |
| `tsconfig.composite.json` | Full composite project graph (source + tests) |
| `tsconfig.composite.base.json` | Base for composite sub-projects |
| `dts-config.js` | `dts-bundle-generator` config — bundles typings to `dist/typings.d.ts` |
| `.mocharc.js` | Mocha unit test runner config |
| `.eslintrc.js` | Root ESLint config |
| `.size-limit.js` | Bundle size budget config |
| `scripts/clean-package-json.js` | Strips dev fields from `package.json` for release |
| `scripts/githooks/pre-commit/lint.js` | Pre-commit lint hook |
