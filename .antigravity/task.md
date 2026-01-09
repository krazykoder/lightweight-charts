## CharSeries Offset Option Implementation

### Planning
- [x] Review existing CharSeries implementation
- [x] Examine CharShapeSeries labelOffset pattern
- [x] Identify differences between labelOffset and offset
- [x] Create implementation plan

### Implementation
- [x] Update `CharSeriesStyleOptions` interface
- [x] Add default value in `charSeriesStyleDefaults`
- [x] Update `CharSeriesRendererData` interface
- [x] Modify `drawChar` function to apply offset
- [x] Modify `hitTestChar` function to account for offset
- [x] Update `SeriesCharPaneView` constructor
- [x] Update `SeriesCharPaneView` renderer method

### Example Enhancement
- [x] Add offset control to interactive playbook
- [x] Update createCharSeries function
- [x] Add offset input event listener
- [x] Create hardcoded example demonstrating offset

### Verification
- [x] Run build and verify no compilation errors
- [x] Test offset control in interactive playbook
- [x] Verify positive offset (above)
- [x] Verify negative offset (below)
- [x] Verify zero offset (aligned)
- [x] Test hit detection at different offsets
