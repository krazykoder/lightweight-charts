# Project Context

## Overview
Lightweight Charts is a financial charting library. This project focuses on extending the core library with new series types and features.

## Architecture
The library is structured with a core model, renderers, and views.
- **Model**: Defines the data and state of chart primitives (Series, Lines, etc.).
- **Views**: Bridges the model and the renderer (Pane Views, Axis Views).
- **Renderers**: Handles low-level Canvas API drawing.
- **API**: Public facing API for library consumers.

## Features

### Vertical Lines
**Implemented: Jan 2026**
- **Description**: Ability to add vertical lines to any series at a specific time point.
- **Key Classes**: 
    - `VerticalLine` (Model)
    - `VerticalLineRenderer` (Renderer)
    - `VerticalLinePaneView` (View)
    - `VerticalLineTimeAxisView` (Axis View)
- **API**: `series.createVerticalLine(options)`
- **Key Options**:
    - `axisLabelVisibleAtEdge`: Controls if the label sticks to the chart edge when scrolling.

### Line Types & Markers
**Implemented: Jan 2026**
- **New Line Types**:
    - `LineType.ConnectedCircles`: Dots connected by thin lines, optimized for z-order (lines behind dots).
    - `LineType.Square` / `LineType.Diamond`: New rigid shape types.
    - `LineType.Area` / `LineType.SteppedArea`: Gradient-capable area fills with per-point coloring.
- **Markers**:
    - Expanded shape support (`triangleUp`, `triangleDown`).
    - Robust interactive playbook in `examples/website/markers.html` with data persistence.

## Current Focus
- ensuring all examples are robust and visually correct.

### Shape Series
**Implemented: Jan 2026**
- **Description**: A new flexible series type for rendering shapes (icons) at specific data points. Supports sparse data, stacking (levels), and text labels.
- **Key Classes**:
    - `Series<'Shape'>` (Model)
    - `ShapeSeriesRenderer` (Renderer)
    - `SeriesShapePaneView` (View)
- **API**: `chart.addShapeSeries(options)`
- **Capabilities**:
    - **Shapes**: Supports standard markers (circle, square, arrowUp, etc.) and new shapes (diamond, cross, plus).
    - **Positioning**: `top`, `bottom` (margin-based), and `value` (price-based).
    - **Text Labels**: Auto-positioned text with configurable offsets and truncation.
    - **Stacking**: `level` and `levelSpacing` options to prevent overlap of multiple series.
    - **Sparse Data**: Handles `undefined` shapes (draws nothing) for gaps.

## Feature: CharSeries
- **Description**: Allows plotting textual characters (letters, numbers, symbols, emojis) at data points.
- **Key Classes**:
    - `CharSeriesRenderer` (renders text using Canvas API)
    - `SeriesCharPaneView` (prepares data for renderer)
    - `CharSeriesOptions` (style configuration)
- **Usage**:
    ```javascript
    const series = chart.addCharSeries({ color: 'red', size: 12 });
    series.setData([{ time: '2022-01-01', value: 10, char: 'A' }]);
    ```
- **Dependencies**: Reacts to `lineWidth` (conceptually for size), `color`.
- **Known Details**:
    - Only the first unicode character is rendered (`Array.from(char)[0]`).
    - Position is determined by the data `value` (price).
    - **Vertical Offset**: Added `offset` style option to position characters above (+) or below (-) the price point. Affects both rendering and hit testing.

## Feature: CharShapeSeries
- **Description**: Hybid series type combining `ShapeSeries` positioning flexibility with `CharSeries` character markers.
- **Key Classes**:
    - `CharShapeSeriesRenderer`
    - `SeriesCharShapePaneView`
    - `CharShapeSeriesOptions`
- **Usage**:
    ```javascript
    chart.addCharShapeSeries({ position: 'top', shape: 'rocket' });
    ```
- **Capabilities**:
    - Inherits `ShapeSeries` spacing, stacking, and positioning (`top`/`bottom`/`value`).
    - Inherits `CharSeries` text rendering (emojis, chars).

## Feature: Dynamic Data Unpacker
- **Description**: Updated the Python utility script used to transform `data.json` into a format consumable by web-based examples (`app-data.js`).
- **Script**: `examples/unpack-all-data.py`
- **Capabilities**:
    - Dynamically maps all columns defined in `data.json`'s `columns` field.
    - Derived fields: Automatically adds `value` and `color` for OHLC data.
    - Performance: Limits output to 500 data points by default.
