# Shape Series Implementation Walkthrough

The `ShapeSeries` type has been fully implemented, allowing users to display sequences of shapes at specific positions (top, bottom, or value-based) on the chart.

## Features Implemented

1.  **New Series Type**: `Shape` series added to the core library.
2.  **Flexible Positioning**:
    *   `'top'`: Fixed margin from the top of the pane.
    *   `'bottom'`: Fixed margin from the bottom of the pane.
    *   `'value'`: Positioned according to the Y-axis value provided in data.
3.  **Customization**:
    *   **Shapes**: `circle`, `square`, `arrowUp`, `arrowDown`, `triangleUp`, `triangleDown`, `diamond`, `cross`, `plus`.
    *   **Styling**: Per-point or series-default `color`, `shape`, and `size`.
4.  **API Integration**:
    *   `chart.addShapeSeries(options)` method.
    *   Strongly typed options and data interfaces.

## Verification

### Playbook
A new example has been created at [`examples/website/shape-series.html`](file:///Users/towshif/code/js/lightweight-charts/examples/website/shape-series.html).

This playbook demonstrates:
- Switching between positioning modes (`top`, `bottom`, `value`).
- Changing default shape, color, and size.
- Overriding styles for specific data points (e.g., every 5th point is a red square).

### Build Verification
The project has been successfully built with `npm run build:prod`, ensuring all new types and methods are correctly integrated and exported.

## Usage Example

```javascript
const shapeSeries = chart.addShapeSeries({
    position: 'top',
    shape: 'circle',
    color: '#2196F3',
});

shapeSeries.setData([
    { time: '2019-04-11', value: 80.01 },
    { time: '2019-04-12', value: 96.63, color: 'red', shape: 'arrowUp' },
]);
```
