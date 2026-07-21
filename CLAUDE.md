# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Build
```bash
npm run build          # tsc + rollup (development builds)
npm run build:prod     # tsc + rollup with minified production builds
npm run build:release  # production build tagged as release (no dev suffix in version)
npm run tsc            # TypeScript compile only (outputs to lib/prod/)
npm run tsc-verify     # Full composite typecheck including tests (checks for cyclic deps)
npm run rollup         # Bundle only (requires tsc output in lib/prod/)
npm run clean          # Remove lib/ and dist/
```

### Test & Lint
```bash
npm run test           # Run unit tests (mocha + ts-node)
npm run lint           # Run all linters in parallel (JS, TS, markdown)
npm run lint:ts        # TypeScript/TSX lint only
npm run verify         # Full CI check: clean, lint, build:prod, check-dts-docs, tsc-verify, test, size-limit
```

### Run a single test file
```bash
npx mocha tests/unittests/path/to/file.spec.ts
```

### Local debugging
```bash
cp debug.html.example debug.html   # debug.html is gitignored; modify freely
```

## Architecture

The library is a zero-dependency (except `fancy-canvas`) HTML5 canvas financial chart library written in TypeScript. The source lives entirely in `src/` and is structured in five layers:

### 1. Public API (`src/api/`)
Entry point is `src/api/create-chart.ts` → `createChart()`, which instantiates `ChartApi`. This is the only layer consumers interact with. Interfaces (prefixed `I`) define the public contract: `IChartApi`, `ISeriesApi`, `IPriceScaleApi`, `ITimeScaleApi`. Options defaults live in `src/api/options/`. `DataLayer` (`src/api/data-layer.ts`) handles converting user-supplied time-series data into internal `PlotRow` structures and managing time-point ordering.

### 2. Model (`src/model/`)
Pure data/logic layer with no DOM or canvas dependencies. Key classes:
- `ChartModel` — top-level model owning panes, price scales, time scale, crosshair, watermark
- `Pane` — a horizontal band of the chart; contains one or more `Series` and associated price scales
- `Series` — holds plot data, series options, and creates view objects
- `PriceScale` — converts price values to pixel coordinates; supports normal/log/percentage modes
- `TimeScale` — manages the horizontal time axis, tick marks, and visible range
- `PlotList` — sorted array of `PlotRow` entries backing each series

### 3. GUI / Widgets (`src/gui/`)
Manages DOM elements and canvas layout. Key classes:
- `ChartWidget` — root widget; creates and owns `PaneWidget`(s), `TimeAxisWidget`, and `PriceAxisWidget`(s)
- `PaneWidget` — renders one pane onto a canvas using views from the model
- `PriceAxisWidget` / `TimeAxisWidget` — render the axis labels

### 4. Views (`src/views/`)
Bridge between model and renderers. Each view knows how to produce renderer data from model state. Organized by axis: `src/views/pane/`, `src/views/price-axis/`, `src/views/time-axis/`.

### 5. Renderers (`src/renderers/`)
Stateless canvas drawing functions. Each renderer takes pre-computed view data and draws onto a `CanvasRenderingContext2D`. Series renderers: area, bars, baseline, candlesticks, histogram, line. Also includes crosshair, grid, watermark, and series marker renderers.

## Build Pipeline

```
src/*.ts  →(tsc)→  lib/prod/src/*.js  →(rollup)→  dist/lightweight-charts.{esm,standalone}.{development,production}.js
                                                    dist/typings.d.ts  ←(dts-bundle-generator)
```

Four output bundles: ESM (tree-shakeable, `fancy-canvas` external) and standalone IIFE (self-contained, sets `window.LightweightCharts`), each in dev and prod (minified) variants.

## Key Conventions

- **Private property mangling**: Properties prefixed `_private_` or `_internal_` are mangled by terser in production. Do not access these from outside their defining class.
- **TypeScript composite projects**: Multiple `tsconfig.composite.json` files under each `src/` subdirectory enable fast incremental builds. `tsc-verify` checks the full composite graph.
- **`DeepPartial<T>`**: Options are always accepted as deep partials at the API boundary and merged with defaults from `src/api/options/`.
- **`Nominal<T>`**: Type branding (in `src/helpers/nominal.ts`) is used for `Coordinate`, `TimePointIndex`, etc. to prevent accidental mixing of semantically different numbers.
- **Invalidation system**: Model changes propagate via `InvalidateMask` / `InvalidationLevel` rather than direct redraws. Widgets subscribe and schedule canvas repaints accordingly.
