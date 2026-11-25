# 14 — Layout and state transitions

## Standard
Animate local state with stable keys; reserve space for loading, errors and asynchronous changes.

## Implementation workflow
1. Inspect the existing layout, installed dependencies, and interaction contract.
2. Specify the static end state first, then the trigger and timing using the motion tokens.
3. Animate local state with stable keys; reserve space for loading, errors and asynchronous changes.
4. Scope the implementation to its owning component; preserve semantic markup and existing functionality.
5. Verify the fallback and record actual test results.

## Practical pattern
Use a keyed decorative badge transition or native details disclosure with no delayed access.

## Failure modes
Do not keep focus inside removed content or announce duplicate live regions.

## Acceptance criteria
- Test rapid toggling, error states and focus after removal.
- Essential content and interactions remain available without animation.
- Reduced-motion behavior is intentional; no paid dependency is introduced without approval.

## Review evidence
Record route, viewport, motion preference, observed result, and unresolved issues. See [official resources](sources.md) and [motion audit](audit.md).
