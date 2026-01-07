# New Features Documentation

## Shape Series Enhancements

The `ShapeSeries` has been significantly enhanced with new capabilities for complex visualization needs.

### 1. Sparse Shape Support
Data points in a `ShapeSeries` can now optionally omit the `shape` property.
- If `shape` is undefined on a data point, it falls back to the series-level `shape` option.
- If the series-level `shape` is also undefined or set to a hidden value, nothing is drawn.
- **Example**: `examples/website/shape-series.html` demonstrates points with and without shapes in the same series.

### 2. Stacked Levels (Anti-Overlap)
To prevent shapes from overlapping when they occur at the same time, you can now assign a `level` to a series.
- **Option**: `level` (default `0`) - The stacking tier.
- **Option**: `levelSpacing` (default `5`) - The vertical spacing between levels in pixels.
- **Behavior**:
  - `position: 'top'`: Levels stack upwards ($y = margin + level * (size + spacing)$).
  - `position: 'bottom'`: Levels stack downwards.
- **Example**: `examples/website/multi-shape-series.html`.

### 3. Text Labels
You can now add text labels to `ShapeSeries` data points.
- **Data Property**: `text?: string`
- **Positioning**: Automatically positioned above or below the shape based on the series `position`.
- **Truncation**: Text is currently truncated to 20 characters.
- **Example**: `examples/website/multi-shape-series.html` (Labels like "L0 #0", "B1").

### 4. Configurable Label Offset
Control the spacing between the shape and its text label.
- **Option**: `labelOffset` (default `2`).
- **Usage**: `series.applyOptions({ labelOffset: 5 })`.

## Vertical Line Enhancements

### 1. Example & Default Behavior
- **Default**: The `axisLabelVisibleAtEdge` option for vertical lines (if applicable via plugins or custom implementations demonstrated) has been refined.
- **Example**: `examples/website/vertical-line.html` demonstrates vertical lines. (Note: Ensure this matches the specific work done in the Vertical Lines session).
