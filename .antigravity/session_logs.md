# Session Logs: Shape Series Advanced Features

## Current State
Successfully extended `ShapeSeries` with advanced visualization capabilities:
1.  **Sparse Shapes**: Data points can now exist without drawing a shape, useful for gaps or specific emphasis.
2.  **Anti-Overlap**: Implemented a `level` system to stack overlapping shape series vertically.
3.  **Text Labels**: Added support for text labels on data points with automatic positioning and configurable offsets (`labelOffset`).
4.  **Documentation**: Created `examples/FEATURES.md` to document these changes.

## Next Steps
-   **Performance**: If text labels are used heavily, consider caching measurements more aggressively or adding a global toggle to disable them.
-   **Styling**: Add per-item text styling (currently uses global layout font) if users request more granular control.
-   **Vertical Lines**: The vertical line implementation is stable but could be enhanced with more interaction options if needed.