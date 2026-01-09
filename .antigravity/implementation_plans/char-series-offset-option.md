# Add Offset Option to CharSeries

## Overview

This implementation adds a new `offset` option to `CharSeriesStyleOptions` that controls the vertical positioning of characters relative to their data point's price value. The offset can be positive (character displays above the point) or negative (character displays below the point).

## Comparison with CharShapeSeries `labelOffset`

The existing `labelOffset` in `CharShapeSeries` controls the **spacing between the shape and its text label** (lines 124-130 in [char-shape-series-renderer.ts](file:///Users/towshif/code/js/lightweight-charts/src/renderers/char-shape-series-renderer.ts#L124-L130)):

```typescript
const margin = this._data.options.labelOffset;
if (item.labelPosition === 'above') {
    item.text.y = item.y - shapeSize - margin - item.text.height / 2 as Coordinate;
} else {
    item.text.y = item.y + shapeSize + margin + item.text.height / 2 as Coordinate;
}
```

The new `offset` option for `CharSeries` is similar in concept but **different in purpose**: it controls the vertical position of the character itself relative to the price coordinate, not label-to-shape spacing.

## Proposed Changes

### Core Implementation

#### [MODIFY] [series-options.ts](file:///Users/towshif/code/js/lightweight-charts/src/model/series-options.ts)

Add `offset` property to `CharSeriesStyleOptions` interface (around line 552-566):

```typescript
export interface CharSeriesStyleOptions {
    color: string;
    size: number;
    
    /**
     * Vertical offset in pixels to position the character above (+) or below (-) the data point.
     *
     * @defaultValue `0`
     */
    offset: number;
}
```

---

#### [MODIFY] [series-options-defaults.ts](file:///Users/towshif/code/js/lightweight-charts/src/api/options/series-options-defaults.ts)

Add default value for `offset` in `charSeriesStyleDefaults` (around line 120-123):

```typescript
export const charSeriesStyleDefaults: CharSeriesStyleOptions = {
    color: '#FF0000',
    size: 12,
    offset: 0,
};
```

---

#### [MODIFY] [char-series-renderer.ts](file:///Users/towshif/code/js/lightweight-charts/src/renderers/char-series-renderer.ts)

Update `CharSeriesRendererData` interface to include `offset` option (around line 17-24):

```typescript
export interface CharSeriesRendererData {
    items: CharSeriesRendererDataItem[];
    visibleRange: SeriesItemsIndexesRange | null;
    options: {
        color: string;
        size: number;
        offset: number; // NEW
    };
}
```

Update `drawChar` function to apply the offset when rendering (around line 81):

```typescript
function drawChar(item: CharSeriesRendererDataItem, options: CharSeriesRendererData['options'], ctx: CanvasRenderingContext2D): void {
    const color = item.color || options.color;
    const size = item.size || options.size;
    const char = item.char;

    if (!char) {
        return;
    }

    ctx.font = `${size}px "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`;
    ctx.fillStyle = color;
    const firstChar = Array.from(char)[0];
    
    // Apply offset: positive moves char up (smaller y), negative moves down (larger y)
    const yPosition = item.y - options.offset as Coordinate;
    ctx.fillText(firstChar, item.x, yPosition);
}
```

Update `hitTestChar` function to account for offset in hit testing (around line 84-94):

```typescript
function hitTestChar(item: CharSeriesRendererDataItem, options: CharSeriesRendererData['options'], x: Coordinate, y: Coordinate): boolean {
    const size = item.size || options.size;
    if (!item.char) {
        return false;
    }

    // Apply offset to hit test area
    const yPosition = item.y - options.offset;
    const halfSize = size / 2;
    return x >= item.x - halfSize && x <= item.x + halfSize &&
        y >= yPosition - halfSize && y <= yPosition + halfSize;
}
```

---

#### [MODIFY] [char-series-pane-view.ts](file:///Users/towshif/code/js/lightweight-charts/src/views/pane/char-series-pane-view.ts)

Update the constructor to include `offset` in the data options (around line 25-37):

```typescript
public constructor(series: Series<'Char'>, model: ChartModel) {
    this._series = series;
    this._model = model;
    const options = series.options() as CharSeriesOptions;
    this._data = {
        items: [],
        visibleRange: null,
        options: {
            color: options.color,
            size: options.size,
            offset: options.offset, // NEW
        },
    };
}
```

Update the `renderer` method to sync the `offset` option (around line 46-62):

```typescript
public renderer(height: number, width: number): IPaneRenderer | null {
    if (!this._series.visible()) {
        return null;
    }

    if (this._invalidated) {
        this._makeValid();
    }

    const options = this._series.options() as CharSeriesOptions;
    this._data.options.color = options.color;
    this._data.options.size = options.size;
    this._data.options.offset = options.offset; // NEW

    this._renderer.setData(this._data);

    return this._renderer;
}
```

### Example Enhancement

#### [MODIFY] [char-series.html](file:///Users/towshif/code/js/lightweight-charts/examples/website/char-series.html)

Add an offset control to the interactive playbook section:

1. Add offset input in the controls panel (after line 179):
```html
<label>
    Offset (px)
    <input type="number" id="offsetInput" value="0" min="-50" max="50" step="1" />
</label>
```

2. Update the `createCharSeries` function to include offset (around line 269-277):
```javascript
function createCharSeries() {
    if (charSeries) chart.removeSeries(charSeries);

    charSeries = chart.addCharSeries({
        color: colorInput.value,
        size: parseInt(sizeInput.value, 10),
        offset: parseInt(offsetInput.value, 10), // NEW
    });
    updateData();
}
```

3. Add event listener for offset changes (after line 332):
```javascript
offsetInput.addEventListener('input', () => charSeries.applyOptions({ offset: parseInt(offsetInput.value, 10) }));
```

4. Add a new hardcoded example demonstrating offset usage (before the closing `</main>` tag):
```html
<!-- Example 3: Offset Positioning -->
<div class="container">
    <div class="code-container">
        <h3>Vertical Offset Positioning</h3>
        <p>Use positive offset to position characters above the price point, negative to position below.</p>
        <pre>
const series = chart.addCharSeries({
    size: 20,
    offset: 15, // Characters appear 15px above the price
});
series.setData([
    { time: '2019-04-11', value: 80, char: '▲' },
    { time: '2019-04-12', value: 82, char: '▼', offset: -15 }, // Override: 15px below
    { time: '2019-04-13', value: 85, char: '■' },
]);
        </pre>
    </div>
    <div class="chart-container" id="chart-container-offset"></div>
</div>
```

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure no compilation errors
- Verify TypeScript types are correct and properly exported

### Manual Verification
1. Open `examples/website/char-series.html` in the browser
2. Test the offset control in the interactive playbook:
   - Set offset to `20` → characters should appear above price points
   - Set offset to `-20` → characters should appear below price points
   - Set offset to `0` → characters should align with price points
3. Verify the new hardcoded example displays correctly
4. Test hit detection by hovering over characters at different offsets
5. Test per-point offset overrides (if we add that capability to the data item interface)
