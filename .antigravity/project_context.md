# Project Context

## Features Implemented

### Overlapping Markers Demo (2026-01-10)
- Created experimental demo exploring marker overlap behavior at same time points
- Based on GitHub Issue #1459
- Two versions created:
  - `overlapping-markers.html` - Basic demo with 5 hardcoded examples
  - `overlapping-markers-enhanced.html` - Enhanced with interactive playbook
- Interactive controls:
  - Series type selector (Candlestick, Bar, Line)
  - Marker shape, position, color, size
  - Overlap frequency and markers per point
  - Randomization options
- Uses app-data.js with random 300-point windows
- All markers properly sorted in ascending time order
