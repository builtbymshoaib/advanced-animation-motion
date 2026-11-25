# 13 — Interactive effects and gestures

## Standard
Use native controls; add hover effects only for fine pointers and provide equivalent focus/pressed feedback.

## Implementation workflow
1. Inspect the existing layout, installed dependencies, and interaction contract.
2. Specify the static end state first, then the trigger and timing using the motion tokens.
3. Use native controls; add hover effects only for fine pointers and provide equivalent focus/pressed feedback.
4. Scope the implementation to its owning component; preserve semantic markup and existing functionality.
5. Verify the fallback and record actual test results.

## Practical pattern
Use CSS tilt-free hover lift and an optional motion tap scale for a button.

## Failure modes
Avoid custom cursor replacement, magnetic targets that evade clicks and drag-only interactions.

## Acceptance criteria
- Test keyboard, coarse pointer, touch and screen reader behavior.
- Essential content and interactions remain available without animation.
- Reduced-motion behavior is intentional; no paid dependency is introduced without approval.

## Review evidence
Record route, viewport, motion preference, observed result, and unresolved issues. See [official resources](sources.md) and [motion audit](audit.md).
