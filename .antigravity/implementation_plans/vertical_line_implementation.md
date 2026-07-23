# Implementation Plan - Vertical Line Integration (Implemented)

## Goal
Integrate the `VerticalLine` plugin functionality into the `lightweight-charts` core library as a native feature, enabling users to add vertical lines to series similar to how `PriceLine` works. **(Status: Completed)**

## User Review Required
> [!NOTE]
> This feature has been fully implemented and verified.

> [!IMPORTANT]
> The implementation will follow the `CustomPriceLine` pattern but adapted for the Time Axis.
> Vertical Lines will be attached to a `Series` instance but will interact with the `TimeScale` for positioning.
> A new API `series.createVerticalLine(options)` will be added.

## Data Formats & Parameters

### VerticalLineOptions
We will adopt a structure similar to `PriceLineOptions` but adapted for the time axis.

```typescript
export interface VerticalLineOptions {
    /**
     * Vertical line's time value.
     */
    time: Time;
    /**
     * Vertical line's color.
     * @defaultValue `''` (fallback to default or black)
     */
    color: string;
    /**
     * Vertical line's width in pixels.
     * @defaultValue `1`
     */
    lineWidth: LineWidth;
    /**
     * Vertical line's style.
     * @defaultValue `LineStyle.Solid`
     */
    lineStyle: LineStyle;
    /**
     * Display line.
     * @defaultValue `true`
     */
    lineVisible: boolean;
    /**
     * Display the label on the time axis.
     * @defaultValue `true`
     */
    axisLabelVisible: boolean;
    /**
     * Vertical line's label text.
     * @defaultValue `''`
     */
    title: string;
    
    // Additional label customization specific to Vertical Lines (from plugin inspiration)
    /**
     * Label background color.
     * @defaultValue `''` (fallback to line color)
     */
    labelBackgroundColor: string;
    /**
     * Label text color.
     * @defaultValue `''` (fallback to contrast color)
     */
    labelTextColor: string;
}
```

## Proposed Changes

### Core Model
#### [NEW] [vertical-line-options.ts](file:///Users/towshif/code/js/lightweight-charts/src/model/vertical-line-options.ts)
- Define `VerticalLineOptions` interface as above.

#### [NEW] [vertical-line.ts](file:///Users/towshif/code/js/lightweight-charts/src/model/vertical-line.ts)
- Create `VerticalLine` class.
- Manage `VerticalLinePaneView` and `VerticalLineTimeAxisView`.
- Handle options application and updates.

#### [MODIFY] [series.ts](file:///Users/towshif/code/js/lightweight-charts/src/model/series.ts)
- Add `_customVerticalLines` array.
- Add `createVerticalLine(options)` method.
- Add `removeVerticalLine(line)` method.
- Update `paneViews()` to include vertical line views.
- Update `timeAxisViews()` (need to check if `series.timeAxisViews()` exists or needs to be added) to include vertical line axis views.
    - *Note:* I will implement `timeAxisViews` on `IDataSource` if not already present, or ensure `Series` exposes it for the `TimeScale` to consume.

### Renderers
#### [NEW] [vertical-line-renderer.ts](file:///Users/towshif/code/js/lightweight-charts/src/renderers/vertical-line-renderer.ts)
- Implement `VerticalLineRenderer` to draw the vertical line on the pane.

### Views
#### [NEW] [vertical-line-pane-view.ts](file:///Users/towshif/code/js/lightweight-charts/src/views/pane/vertical-line-pane-view.ts)
- Implement `VerticalLinePaneView` to bridge Model and Renderer.

#### [NEW] [vertical-line-time-axis-view.ts](file:///Users/towshif/code/js/lightweight-charts/src/views/time-axis/vertical-line-time-axis-view.ts)
- Implement `VerticalLineTimeAxisView` to provide the label on the time axis.
- Will likely reuse `TimeAxisViewRenderer`.

### API
#### [MODIFY] [index.ts](file:///Users/towshif/code/js/lightweight-charts/src/index.ts)
- Export `VerticalLineOptions` interface.

## Verification Plan

### Automated Tests
- Run `npm run build:prod` to verify compilation.

### Manual Verification
- Create `examples/website/vertical-line.html` demonstrating:
    - Creating a vertical line.
    - Updating options (color, width, label).
    - Removing a vertical line.
    - Multiple vertical lines.
- Run the example locally and verify visual correctness.
