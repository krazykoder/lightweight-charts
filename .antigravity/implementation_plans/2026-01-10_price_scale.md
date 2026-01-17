# Price Scale Examples Implementation Plan

Refactor `examples/website/price-scale.html` to become a comprehensive Playbook for Price Scale features, including Dual Scales, Inverted Scales, and Margins.

## Proposed Changes

### [Component Name] Examples Website

#### [MODIFY] [price-scale.html](file:///Users/towshif/code/js/lightweight-charts/examples/website/price-scale.html)
- **Layout Overhaul**:
    - Adopt the standard `playbook-grid` layout (Sidebar Controls + Main Chart).
    - Add section for Hardcoded Examples below.
- **Interactive Playbook**:
    - **Chart**: Two data series (e.g., Price and Indicator).
    - **Controls**:
        - **Left Scale**: Visible, AutoScale, Invert, AlignLabels.
        - **Right Scale**: Visible, AutoScale, Invert, AlignLabels.
        - **Series Assignment**: Toggle to move Series 1 or Series 2 between Left/Right scales.
- **Hardcoded Examples**:
    - **Two Price Scales**: Pure implementation of the tutorial example (Candlestick on Left, Line on Right).
    - **Inverted Scale**: A focused example showing `start`, `end` margins and `invertScale: true`.
    - **No Overlap**: Example showing how to use `scaleMargins` to prevent series from overlapping (e.g., Volume at bottom, Price at top).

#### [MODIFY] [index.html](file:///Users/towshif/code/js/lightweight-charts/examples/website/index.html)
- Ensure link to `price-scale.html` exists and is correctly labeled.

## Verification Plan
- **Manual Verification**:
    - Open `price-scale.html`.
    - Test toggling Left/Right scales in Playbook.
    - Test moving series between scales.
    - Verify Hardcoded Examples render as expected.
