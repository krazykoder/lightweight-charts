# Walkthrough - Disable All Pre-commit Verifications

I have completely disabled all automated checks that previously ran before every Git commit.

## Changes

### Build Scripts

#### [lint.js](file:///Users/towshif/code/js/lightweight-charts/scripts/githooks/pre-commit/lint.js)

I updated the `main` function to exit immediately with a success code. This skips git conflict checks, TypeScript verification, ESLint, and Markdown linting during the commit process.

render_diffs(file:///Users/towshif/code/js/lightweight-charts/scripts/githooks/pre-commit/lint.js)

## Verification Results

### Automated Tests
- Ran `node scripts/githooks/pre-commit/lint.js` manually.
- **Result**: The script exited immediately with status `0` and no output, confirming that all checks are bypassed.
