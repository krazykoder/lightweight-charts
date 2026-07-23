# Walkthrough - Dynamic Data Unpacking

I have updated `examples/unpack-all-data.py` to dynamically handle columns from `examples/data.json`.

## Changes

### `examples/unpack-all-data.py`

- The script now reads the `columns` list from `data.json`.
- It iterates over these columns to populate the data object dynamically.
- `value` and `color` fields are added conditionally if `close` and `open` columns exist, ensuring backward compatibility.

## Verification Results

### Automated Verification
- Ran the script `python3 unpack-all-data.py` in the `examples` directory.
- Checked the output `app-data.js` and confirmed it contains new columns like `HA_open` (visible in the truncated output as `HA_o`).

```javascript
const data = [{"time": 1564560000, "open": 30.68, "high": 31.05, "low": 30.46, "close": 31.03, "HA_o...
```
