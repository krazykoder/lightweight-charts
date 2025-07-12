# ITimeScaleApi

Interface for the time scale API.

## Methods

### setVisibleRange(range)
Sets the visible range of the time scale.

### setVisibleLogicalRange(range)
Sets the visible logical range of the time scale.

### subscribeVisibleTimeRangeChange(callback)
Subscribes to visible time range changes.

### subscribeVisibleLogicalRangeChange(callback)
Subscribes to visible logical range changes.

## Example

```typescript
const timeScale = chart.timeScale();

// Set visible range
timeScale.setVisibleRange({
  from: '2023-01-01',
  to: '2023-12-31'
});

// Subscribe to changes
timeScale.subscribeVisibleTimeRangeChange((range) => {
  console.log('Visible range changed:', range);
});
``` 