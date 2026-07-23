# Disable All Pre-commit Verifications

The user wants to completely disable all automated checks (linting, git conflict checks, etc.) that run before every Git commit.

## Proposed Changes

### Build Scripts

#### [MODIFY] [lint.js](file:///Users/towshif/code/js/lightweight-charts/scripts/githooks/pre-commit/lint.js)

I will modify the `main` function in `scripts/githooks/pre-commit/lint.js` to exit early without performing any checks. This is the simplest and most robust way to disable all verifications while keeping the hook infrastructure intact if it needs to be re-enabled later.

```javascript
function main() {
    // Disable all pre-commit checks by exiting early
    process.exit(0);

    // ... existing code ...
}
```

## Verification Plan

### Manual Verification
1.  Stage changes in various file types (JS, TS, MD).
2.  Attempt to commit.
3.  Observe that the commit proceeds instantly without any "Running githooks" or linting output.
