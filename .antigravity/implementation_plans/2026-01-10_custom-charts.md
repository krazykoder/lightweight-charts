# Implementation Plan: Custom Charts Example

Create a new HTML example file that demonstrates various custom chart configurations for experimentation and demo purposes.

## Proposed Changes

### [NEW] [custom-charts.html](file:///Users/towshif/code/js/lightweight-charts/examples/website/custom-charts.html)

Create a comprehensive custom charts example that demonstrates:

1. **Price-Volume Overlay Chart**
   - Combine volume histogram and price area series in the same chart
   - Use `priceScaleId: ''` to create a separate price scale for volume
   - Apply different margin configurations to visually separate the data
   - Color volume bars based on price direction (green for up, red for down)

2. **Interactive Playbook**
   - Volume bar opacity control
   - Price series type selection (Area, Line, Candlestick)
   - Volume visibility toggle
   - Color customization for both series
   - Scale margin adjustments

3. **Multiple Hardcoded Examples**
   - Example 1: Classic Price-Volume Chart (Area + Histogram)
   - Example 2: Candlestick with Volume
   - Example 3: Line Chart with Volume Bars
   - Example 4: Histogram with Squeeze Data (using `SQZ_Hist` and `SQZ_HistC` columns with color coding)

The HTML structure will follow the pattern from `char-shape-series.html`:
- Responsive playbook grid layout with controls panel and chart preview
- Modern CSS styling with the same design system
- Clean separation between interactive playbook and hardcoded examples
- Use existing `app-data.js` for sample data

## Verification Plan

### Manual Verification
- Open the HTML file in a browser via the simple web server
- Verify all interactive controls work correctly
- Check that volume and price scales are properly separated
- Ensure all hardcoded examples render as expected
