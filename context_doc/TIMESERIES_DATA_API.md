# Timeseries Data API Documentation

## Overview

This document provides comprehensive information about timeseries data formats for all series types in lightweight-charts. It covers data structures, per-point color support, and series-specific limitations.

---

## Table of Contents

1. [All Lightweight Charts Series Types](#all-lightweight-charts-series-types)
2. [Data Format Reference](#data-format-reference)
3. [Per-Point Color Support](#per-point-color-support)
4. [Series-Specific Details](#series-specific-details)
5. [Markers Data Format](#markers-data-format)
6. [Summary Tables](#summary-tables)

---

## All Lightweight Charts Series Types

Lightweight-charts supports **6 native series types**:

1. **CandlestickSeries** - `addCandlestickSeries()`
2. **BarSeries** - `addBarSeries()`
3. **LineSeries** - `addLineSeries()`
4. **AreaSeries** - `addAreaSeries()`
5. **BaselineSeries** - `addBaselineSeries()`
6. **HistogramSeries** - `addHistogramSeries()`

---

## Data Format Reference

### 1. CandlestickSeries (`addCandlestickSeries`)

**Series Type**: `'Candlestick'`

**Data Format**:
```typescript
{
  time: string | number;  // Unix timestamp (seconds) or string - REQUIRED
  open: number;             // REQUIRED
  high: number;             // REQUIRED
  low: number;              // REQUIRED
  close: number;            // REQUIRED
  volume?: number;          // Optional
  color?: string;            // Optional - per-candle color override
}
```

**Example**:
```typescript
const candlestickData = [
  {
    time: 1609459200,  // Unix timestamp in seconds
    open: 100,
    high: 105,
    low: 98,
    close: 103,
    volume: 1000000,
    color: '#26a69a'   // Optional per-candle color
  }
];
```

**Per-Point Color**: ✅ **Supported**

---

### 2. BarSeries (`addBarSeries`)

**Series Type**: `'Bar'`

**Data Format**:
```typescript
{
  time: string | number;  // Unix timestamp (seconds) or string - REQUIRED
  open: number;             // REQUIRED
  high: number;             // REQUIRED
  low: number;              // REQUIRED
  close: number;            // REQUIRED
  volume?: number;          // Optional
  color?: string;           // Optional - per-bar color override
}
```

**Example**:
```typescript
const barData = [
  {
    time: '2021-01-01',
    open: 100,
    high: 105,
    low: 98,
    close: 103,
    color: '#ef5350'   // Optional per-bar color
  }
];
```

**Per-Point Color**: ✅ **Supported**

**Note**: BarSeries uses the same data structure as CandlestickSeries; only the visual representation differs.

---

### 3. LineSeries (`addLineSeries`)

**Series Type**: `'Line'`

**Data Format**:
```typescript
{
  time: string | number;  // Unix timestamp (seconds) or string - REQUIRED
  value: number;          // REQUIRED
  color?: string;        // Optional - per-point color override
}
```

**Example**:
```typescript
const lineData = [
  {
    time: 1609459200,
    value: 100.5,
    color: '#2196F3'   // Optional per-point color
  }
];
```

**Per-Point Color**: ✅ **Supported**

**Implementation Note**: Uses `getColoredLineBasedSeriesPlotRow()` which preserves the `color` property from input data.

---

### 4. AreaSeries (`addAreaSeries`)

**Series Type**: `'Area'`

**Data Format**:
```typescript
{
  time: string | number;  // Unix timestamp (seconds) or string - REQUIRED
  value: number;          // REQUIRED
  // Note: color property is NOT supported per-point
}
```

**Example**:
```typescript
const areaData = [
  {
    time: 1609459200,
    value: 100.5
    // No per-point color support
  }
];
```

**Per-Point Color**: ❌ **NOT Supported**

**Color Configuration**: Colors come from series options when creating the series:
```typescript
chart.addAreaSeries({
  topColor: 'rgba(46, 220, 135, 0.4)',    // Top of gradient fill
  bottomColor: 'rgba(40, 221, 100, 0)',   // Bottom of gradient fill
  lineColor: '#33D778'                    // Line stroke color
});
```

**Implementation Note**: Uses `getLineBasedSeriesPlotRow()` which does NOT preserve the `color` property. The filled area uses a gradient from `topColor` to `bottomColor`, and the line uses `lineColor` - all from series options, not per-point data.

---

### 5. BaselineSeries (`addBaselineSeries`)

**Series Type**: `'Baseline'`

**Data Format**:
```typescript
{
  time: string | number;  // Unix timestamp (seconds) or string - REQUIRED
  value: number;          // REQUIRED
  // Note: color property is NOT supported per-point
}
```

**Example**:
```typescript
const baselineData = [
  {
    time: 1609459200,
    value: 100.5
    // No per-point color support
  }
];
```

**Per-Point Color**: ❌ **NOT Supported**

**Color Configuration**: Colors come from series options:
```typescript
chart.addBaselineSeries({
  baseValue: { type: 'price', price: 0 },
  topLineColor: 'rgba(38, 166, 154, 1)',
  topFillColor1: 'rgba(38, 166, 154, 0.28)',
  topFillColor2: 'rgba(38, 166, 154, 0.05)',
  bottomLineColor: 'rgba(239, 83, 80, 1)',
  bottomFillColor1: 'rgba(239, 83, 80, 0.05)',
  bottomFillColor2: 'rgba(239, 83, 80, 0.28)',
  lineWidth: 3
});
```

**Implementation Note**: Uses `getLineBasedSeriesPlotRow()` which does NOT preserve the `color` property. BaselineSeries renders with different colors above and below the baseline reference line, all configured via series options.

---

### 6. HistogramSeries (`addHistogramSeries`)

**Series Type**: `'Histogram'`

**Data Format**:
```typescript
{
  time: string | number;  // Unix timestamp (seconds) or string - REQUIRED
  value: number;          // REQUIRED
  color?: string;         // Optional - per-bar color override
}
```

**Example**:
```typescript
const histogramData = [
  {
    time: 1609459200,
    value: 1000000,
    color: '#26a69a'   // Optional per-bar color
  }
];
```

**Per-Point Color**: ✅ **Supported**

**Series Options**:
```typescript
chart.addHistogramSeries({
  color: '#26a69a',  // Default bar color
  base: 0            // Base value from which bars extend
});
```

**Histogram Type/Shape**: 
- ❌ **No shape options available** - HistogramSeries only renders as **rectangular columns/bars**
- ❌ No support for circles, areas, or other shapes
- ✅ Only rectangular bars are supported

**Implementation Note**: Uses `getColoredLineBasedSeriesPlotRow()` which preserves the `color` property. The rendering is fixed to rectangular bars using `ctx.fillRect()` - there is no option to change the histogram type or shape.

---

## Per-Point Color Support

### Summary

| Series Type | Per-Point Color Support | Notes |
|------------|------------------------|-------|
| **CandlestickSeries** | ✅ Yes | `color` property in data |
| **BarSeries** | ✅ Yes | `color` property in data |
| **LineSeries** | ✅ Yes | `color` property in data |
| **HistogramSeries** | ✅ Yes | `color` property in data |
| **AreaSeries** | ❌ No | Colors from series options only |
| **BaselineSeries** | ❌ No | Colors from series options only |

### Technical Details

**Series that support per-point color** use `getColoredLineBasedSeriesPlotRow()` or similar functions that preserve the `color` property:
- LineSeries
- HistogramSeries
- CandlestickSeries (via `getCandlestickSeriesPlotRow()`)
- BarSeries (via `getBarSeriesPlotRow()`)

**Series that do NOT support per-point color** use `getLineBasedSeriesPlotRow()` which does NOT preserve the `color` property:
- AreaSeries
- BaselineSeries

---

## Series-Specific Details

### Time Format

All series types require a `time` property that can be:
- **Number**: Unix timestamp in seconds (e.g., `1609459200`)
- **String**: Time string in various formats (e.g., `'2021-01-01'`)

### Optional Properties

- **`volume`**: Only available for CandlestickSeries and BarSeries
- **`color`**: Available for CandlestickSeries, BarSeries, LineSeries, and HistogramSeries (per-point color support)

### Common Patterns

All series types follow this pattern:
```typescript
interface BaseTimeSeriesData {
  time: string | number;  // REQUIRED
  [key: string]: any;     // Additional properties vary by series type
}
```

---

## Markers Data Format

**Note**: Markers are NOT a series type, but annotations added to existing series using `setMarkers()`.

### Marker Data Format

```typescript
{
  time: string | number;              // Unix timestamp (seconds) or string - REQUIRED
  position?: 'aboveBar' | 'belowBar' | 'inBar' | number;  // Optional - default: 'aboveBar'
  shape?: 'circle' | 'square' | 'arrowUp' | 'arrowDown' | 'triangleUp' | 'triangleDown';  // Optional
  color?: string;                     // Optional - marker color
  text?: string;                      // Optional - marker text label
  size?: number;                      // Optional - size multiplier (default: 1, can be float like 0.5)
  borderColor?: string;                // Optional - border color
  borderWidth?: number;                // Optional - border width
  offsetY?: number;                   // Optional - vertical offset (used for stacked markers)
}
```

### Marker Position Values

- `'aboveBar'` - Position above the bar/candle
- `'belowBar'` - Position below the bar/candle
- `'inBar'` - Position inside the bar/candle
- `number` - Custom Y-coordinate price value

### Marker Shape Values

- `'circle'` - Circular marker
- `'square'` - Square marker
- `'arrowUp'` - Upward arrow
- `'arrowDown'` - Downward arrow
- `'triangleUp'` - Upward triangle
- `'triangleDown'` - Downward triangle

### Example

```typescript
const markers = [
  {
    time: 1609459200,
    position: 'aboveBar',
    shape: 'circle',
    color: '#2196F3',
    text: 'Buy Signal',
    size: 1
  }
];

series.setMarkers(markers);
```

---

## Summary Tables

### Complete Series Types List

| # | Series Type | API Method | Series Type String | Per-Point Color |
|---|------------|------------|-------------------|-----------------|
| 1 | CandlestickSeries | `addCandlestickSeries()` | `'Candlestick'` | ✅ Yes |
| 2 | BarSeries | `addBarSeries()` | `'Bar'` | ✅ Yes |
| 3 | LineSeries | `addLineSeries()` | `'Line'` | ✅ Yes |
| 4 | AreaSeries | `addAreaSeries()` | `'Area'` | ❌ No |
| 5 | BaselineSeries | `addBaselineSeries()` | `'Baseline'` | ❌ No |
| 6 | HistogramSeries | `addHistogramSeries()` | `'Histogram'` | ✅ Yes |

### Data Structure Comparison

| Series Type | Required Fields | Optional Fields | Special Notes |
|------------|----------------|-----------------|---------------|
| **CandlestickSeries** | `time, open, high, low, close` | `volume, color` | OHLC data |
| **BarSeries** | `time, open, high, low, close` | `volume, color` | Same as Candlestick |
| **LineSeries** | `time, value` | `color` | Simple line chart |
| **AreaSeries** | `time, value` | - | No per-point color |
| **BaselineSeries** | `time, value` | - | No per-point color |
| **HistogramSeries** | `time, value` | `color` | Rectangular bars only |

### Color Configuration Summary

| Series Type | Per-Point Color | Series Options Color | Notes |
|------------|----------------|---------------------|-------|
| **CandlestickSeries** | ✅ `color` in data | `upColor, downColor, borderColor, wickColor` | Both supported |
| **BarSeries** | ✅ `color` in data | `upColor, downColor, borderColor, wickColor` | Both supported |
| **LineSeries** | ✅ `color` in data | `color` | Both supported |
| **AreaSeries** | ❌ No | `topColor, bottomColor, lineColor` | Options only |
| **BaselineSeries** | ❌ No | `topLineColor, topFillColor1/2, bottomLineColor, bottomFillColor1/2` | Options only |
| **HistogramSeries** | ✅ `color` in data | `color, base` | Both supported |

---

## Implementation Notes

### Data Processing Functions

The lightweight-charts library uses different functions to process data:

1. **`getColoredLineBasedSeriesPlotRow()`** - Preserves `color` property
   - Used by: LineSeries, HistogramSeries

2. **`getLineBasedSeriesPlotRow()`** - Does NOT preserve `color` property
   - Used by: AreaSeries, BaselineSeries

3. **`getCandlestickSeriesPlotRow()`** - Preserves `color, borderColor, wickColor`
   - Used by: CandlestickSeries

4. **`getBarSeriesPlotRow()`** - Preserves `color` property
   - Used by: BarSeries

### Rendering Details

- **HistogramSeries**: Always renders as rectangular columns using `ctx.fillRect()` - no shape options available
- **AreaSeries**: Uses gradient fill from `topColor` to `bottomColor` with a line stroke using `lineColor`
- **BaselineSeries**: Renders differently above/below the baseline with separate colors for each region

---

## References

- Lightweight Charts Source: `src/lightweight-charts.standalone.development.js`
- Chart Implementation: `chartstack/src/core/Chart.ts`
- Type Definitions: `chartstack/src/types/types.ts`
- Data Utilities: `chartstack/src/data/data.ts`

---

## Version Information

- **Documentation Created**: Based on lightweight-charts v3.8.0-dev
- **Last Updated**: 2024

---

## Related Documentation

- [STYLE_OPTIONS_OVERRIDE_API.md](./STYLE_OPTIONS_OVERRIDE_API.md) - Series styling options
- [STYLE_CONFIG_API.md](./STYLE_CONFIG_API.md) - Style configuration API
- [TEMPLATEBUILDER_API.md](./TEMPLATEBUILDER_API.md) - Template builder API

