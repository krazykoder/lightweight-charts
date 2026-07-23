# Walkthrough: Custom Charts Example

## Overview
Created `custom-charts.html` for experimentation and demonstration of custom chart configurations, focusing on overlay techniques and multi-scale layouts.

## What Was Built

### Interactive Playbook
An interactive playbook allowing real-time experimentation with price-volume overlay charts:
- **Series Type Selection**: Area, Line, or Candlestick
- **Volume Toggle**: Show/hide volume histogram
- **Style Controls**: Colors, opacity, line width
- **Scale Margin Adjustment**: Fine-tune vertical positioning of both series

### Example 1: Classic Price-Volume Chart
[custom-charts.html](file:///Users/towshif/code/js/lightweight-charts/examples/website/custom-charts.html#L244-L277)

Demonstrates combining an area series with volume histogram using separate price scales.

**Key Technique:**
```javascript
const volumeSeries = chart.addHistogramSeries({
    priceScaleId: '', // Unset price scale
});

chart.priceScale('').applyOptions({
    scaleMargins: { top: 0.8, bottom: 0 },
});
```

### Example 2: Candlestick with Volume
[custom-charts.html](file:///Users/towshif/code/js/lightweight-charts/examples/website/custom-charts.html#L279-L296)

Standard candlestick chart with volume histogram at the bottom on a separate scale.

### Example 3: Line Chart with Volume
[custom-charts.html](file:///Users/towshif/code/js/lightweight-charts/examples/website/custom-charts.html#L298-L315)

Simple line chart overlaid with volume bars, demonstrating the versatility of the overlay technique.

### Example 4: Candlestick with Squeeze Histogram
[custom-charts.html](file:///Users/towshif/code/js/lightweight-charts/examples/website/custom-charts.html#L317-L346)

Candlestick chart with color-coded squeeze indicator histogram overlaid at the bottom.

**Key Feature:** Uses squeeze data columns (`SQZ_Hist` and `SQZ_HistC`) with color mapping:
- Green (#26a69a) for value 1
- Red (#ef5350) for value 2
- Blue (#64b5f6) for value 3
- Yellow (#ffc107) for value 4

### Example 5: Candlestick with Volume and Squeeze Data ⭐
[custom-charts.html](file:///Users/towshif/code/js/lightweight-charts/examples/website/custom-charts.html#L348-L383)

**Advanced three-scale layout** demonstrating the full power of price scale configuration:

1. **Candlesticks (Middle)** - Right price scale
   - `scaleMargins: { top: 0.25, bottom: 0.35 }`
   
2. **Volume (Bottom)** - Custom `'volume'` price scale
   - `priceScaleId: 'volume'`
   - `scaleMargins: { top: 0.9, bottom: 0 }`
   
3. **Squeeze Histogram (Top)** - Empty `''` price scale
   - `priceScaleId: ''`
   - `scaleMargins: { top: 0, bottom: 0.75 }`

**Key Technique:**
```javascript
// Three independent price scales in one chart
const candlestickSeries = chart.addCandlestickSeries(); // Uses 'right'
const volumeSeries = chart.addHistogramSeries({ priceScaleId: 'volume' });
const sqzHistogram = chart.addHistogramSeries({ priceScaleId: '' });

// Configure each scale's vertical position
chart.priceScale('volume').applyOptions({ scaleMargins: { top: 0.9, bottom: 0 } });
chart.priceScale('').applyOptions({ scaleMargins: { top: 0, bottom: 0.75 } });
```

## Technical Highlights

### Price Scale ID Mechanism
- **Default (`'right'`)**: Main price scale for primary series
- **Empty (`''`)**: Alternative scale for overlay data
- **Custom IDs (`'volume'`)**: Additional scales for complex layouts

### Scale Margins
Control vertical positioning by adjusting `top` and `bottom` margins:
- `top: 0.8` = data uses bottom 20% of chart
- `top: 0.3, bottom: 0.25` = data uses middle region
- `top: 0, bottom: 0.75` = data uses top 25% of chart

## Files Modified

- [custom-charts.html](file:///Users/towshif/code/js/lightweight-charts/examples/website/custom-charts.html) - Created new example file with 5 demonstrations

## Verification

To test the examples:
1. Navigate to the examples directory
2. Run `./start-simple-website` to start the local server
3. Open http://localhost:8000/custom-charts.html in a browser
4. Test the interactive playbook controls
5. Scroll through all five hardcoded examples
