# 02 — Timing, easing and choreography

## Standard
Use 120–180ms for feedback, 200–350ms for transitions, 400–700ms for editorial scenes; stagger 40–80ms with a total cap.

## Implementation workflow
1. Inspect the existing layout, installed dependencies, and interaction contract.
2. Specify the static end state first, then the trigger and timing using the motion tokens.
3. Use 120–180ms for feedback, 200–350ms for transitions, 400–700ms for editorial scenes; stagger 40–80ms with a total cap.
4. Scope the implementation to its owning component; preserve semantic markup and existing functionality.
5. Verify the fallback and record actual test results.

## Practical pattern
Use ease-out for entry, ease-in for exit, and a restrained spring for direct manipulation.

## Failure modes
Avoid long cascades that delay reading or interaction.

## Acceptance criteria
- Document exceptions and verify durations on slow devices.
- Essential content and interactions remain available without animation.
- Reduced-motion behavior is intentional; no paid dependency is introduced without approval.

## Review evidence
Record route, viewport, motion preference, observed result, and unresolved issues. See [official resources](sources.md) and [motion audit](audit.md).
