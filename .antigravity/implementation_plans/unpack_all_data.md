# Update unpack-all-data.py to handle dynamic columns

## Goal Description
Update `examples/unpack-all-data.py` to dynamically creating a formatted object containing all the data columns from `examples/data.json`. The script currently hardcodes `open`, `high`, `low`, `close`, but needs to be flexible for future schema changes in `data.json`.

## User Review Required
> [!NOTE]
> I will preserve the `value` and `color` fields if `open`/`close` columns exist, to ensure compatibility with existing examples that might consume `app-data.js`.

## Proposed Changes

### Examples

#### [MODIFY] [unpack-all-data.py](file:///Users/towshif/code/js/lightweight-charts/examples/unpack-all-data.py)
- Read `columns` from `data.json`.
- Inside the loop, dynamically assign key-value pairs for each column.
- Conditionally add `value` (referencing `close`) and `color` (based on `open` vs `close`) if those columns exist.

## Verification Plan

### Automated Tests
- I will run the script `python3 examples/unpack-all-data.py` and inspect the output file `app-data.js` to ensure it contains all new columns (e.g., `HA_open`, `EMA_21`, etc.) and still has `time`.
- I will create a temporary verification script to assert the JSON structure of `app-data.js`.

### Manual Verification
- None needed beyond script execution verification.
