# Version 3.0 New Features

This document highlights the new features and improvements introduced in Lightweight Charts v3.0.

## New Line Types

### LineType.WithGaps

A new line type that allows lines to visually break at gaps in the data. This is particularly useful for handling missing data points or discontinuous time series.

**Usage:**

```js
const series = chart.addLineSeries({
    lineType: LightweightCharts.LineType.WithGaps,
});

series.setData([
    { time: '2020-01-01', value: 10 },
    { time: '2020-01-02', value: null }, // Creates a gap
    { time: '2020-01-03', value: 15 },
    { time: '2020-01-04', value: undefined }, // Also creates a gap
    { time: '2020-01-05', value: 20 },
]);
```

**Supported Series:**

- Line series
- Area series

## New Marker Shapes

### Triangle Markers

Two new triangle marker shapes have been added to complement the existing marker options:

- `triangleUp` - An upward-pointing triangle
- `triangleDown` - A downward-pointing triangle

**Usage:**

```js
series.setMarkers([
    {
        time: '2020-01-01',
        position: 'aboveBar',
        color: 'blue',
        shape: 'triangleUp',
        text: 'Buy Signal',
    },
    {
        time: '2020-01-02',
        position: 'belowBar',
        color: 'red',
        shape: 'triangleDown',
        text: 'Sell Signal',
    },
]);
```

**Available Marker Shapes:**

- `circle`
- `square`
- `arrowUp`
- `arrowDown`
- `triangleUp` (new)
- `triangleDown` (new)

## Enhanced Price Scale API

The price scale API has been significantly improved to support multiple price scales and better customization options.

### Multiple Price Scales

Charts now support both left and right price scales simultaneously:

```js
const chart = LightweightCharts.createChart(container, {
    leftPriceScale: {
        visible: true,
        scaleMargins: {
            top: 0.1,
            bottom: 0.1,
        },
    },
    rightPriceScale: {
        visible: true,
        scaleMargins: {
            top: 0.1,
            bottom: 0.1,
        },
    },
});

// Bind series to specific price scales
const leftSeries = chart.addLineSeries({
    priceScaleId: 'left',
});

const rightSeries = chart.addLineSeries({
    priceScaleId: 'right',
});
```

### Overlay Series

Create overlay series that share the same price scale:

```js
const overlaySeries1 = chart.addLineSeries({
    priceScaleId: 'overlay-1',
});

const overlaySeries2 = chart.addLineSeries({
    priceScaleId: 'overlay-1', // Same ID for overlay
});
```

## Improved Time Scale API

The time scale API has been reorganized for better consistency and functionality.

### Time Scale Methods

Time scale methods are now accessed through the time scale object:

```js
// Old API (deprecated)
chart.subscribeVisibleTimeRangeChange(callback);

// New API
chart.timeScale().subscribeVisibleTimeRangeChange(callback);
```

### New Logical Range Methods

New methods for working with logical ranges:

```js
// Subscribe to logical range changes
chart.timeScale().subscribeVisibleLogicalRangeChange(callback);

// Get visible logical range
const logicalRange = chart.timeScale().getVisibleLogicalRange();

// Set visible logical range
chart.timeScale().setVisibleLogicalRange({
    from: 0,
    to: 100,
});
```

## Enhanced Series API

### seriesType() Method

A new method to identify the type of a series:

```js
const lineSeries = chart.addLineSeries();
console.log(lineSeries.seriesType()); // "Line"

const areaSeries = chart.addAreaSeries();
console.log(areaSeries.seriesType()); // "Area"
```

### Improved Data Handling

Better support for whitespace data and gaps:

```js
// Whitespace data for gaps
series.setData([
    { time: '2020-01-01', value: 10 },
    { time: '2020-01-02' }, // Whitespace - no value
    { time: '2020-01-03', value: 15 },
]);
```

## Migration Guide

For detailed migration instructions from v2 to v3, see [From v2 to v3](./from-v2-to-v3.md).

For breaking changes, see [3.0 Breaking Changes](./3.0-breaking-changes.md).
