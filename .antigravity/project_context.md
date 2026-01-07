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
