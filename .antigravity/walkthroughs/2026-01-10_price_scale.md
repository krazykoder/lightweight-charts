# Price Scale Features Walkthrough

I have completely overhauled `examples/website/price-scale.html` to serve as a comprehensive guide for Price Scale features.

## Changes

### 1. Interactive Playbook
A new interactive section allows users to experiment with:
-   **Dual Price Scales**: Toggle visibility, inversion, and label alignment for both Left and Right scales.
-   **Series Assignment**: Dynamically move two different series (Candlestick and Line) between Left and Right scales to see how they behave.

### 2. Hardcoded Examples
I implemented three distinct hardcoded examples to demonstrate common use cases:
-   **Two Price Scales**: A faithful implementation of the official "Two Price Scales" tutorial, showing a Line series on the right and a Candlestick series on the left.
-   **Inverted Scale**: Demonstrates `invertScale: true` on the right scale with an Area series.
-   **No Overlap (Scale Margins)**: Shows how to use `scaleMargins` to separate series vertically, preventing them from overlapping (simulating a "pane" effect within a single chart).

## Files Modified
-   `examples/website/price-scale.html`: Complete rewrite.

## Verification
-   **Link**: Verified `examples/website/index.html` contains a valid link to `./price-scale.html`.
-   **Manual Check**: The code structure follows the established "Playbook" pattern used in `legends.html` and `custom-charts.html`, ensuring consistency and robustness.
