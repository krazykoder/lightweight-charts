# Walkthrough - Vertical Line Feature

I have successfully integrated the `VerticalLine` feature into the core `lightweight-charts` library. This allows users to add vertical lines to any series, attached to a specific time point, with customizable options.

## Features Implemented

1.  **Public API**:
    *   `series.createVerticalLine(options)`: Creates a new vertical line on a series.
    *   `series.removeVerticalLine(line)`: Removes a vertical line.
2.  **Configuration Options**:
    *   `time`: The time point for the line.
    *   `color`, `lineWidth`, `lineStyle`: Visual styling.
    *   `title`: Text label for the axis.
    *   `axisLabelVisible`: Toggle label visibility.
    *   `axisLabelVisibleAtEdge`: **New!**
        *   `true`: Label "sticks" to the chart edge when scrolling.
        *   `false` (Default): Label moves with the line and disappears when out of view.
3.  **Example Page**:
    *   Created `examples/website/vertical-line.html`.
    *   Added sticky vs. non-sticky label demo.
    *   Added Histogram + Vertical Line demo.

## Verification

To verify the changes:

1.  Build the project:
    ```bash
    npm run build
    ```
2.  Start the example server:
    ```bash
    ./examples/start-simple-website
    ```
3.  Open `http://localhost:1234/vertical-line.html` (or the corresponding port).
4.  **Test 1 (Line Series)**:
    *   Observe the "Event A" line (Red). Scroll it off-screen. The label should disappear (Non-sticky).
    *   Observe the "Start" line (Green). Scroll it off-screen. The label should stick to the edge (Sticky).
5.  **Test 2 (Histogram Series)**:
    *   Observe the vertical lines on the histogram chart below.

## Recent Fixes

*   **Axis Labels**: Fixed an issue where labels weren't rendering by implementing `ChartModel.dataSources()` and correctly propagating the `TimeScale` width to the `VerticalLineTimeAxisView`.
*   **Sticky Logic**: Refined `TimeAxisViewRenderer` to respect the `visibleAtEdge` flag.
