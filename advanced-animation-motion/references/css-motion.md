# 04 — CSS transitions and keyframes

## Standard
Prefer CSS for hover, focus, pressed and simple entrance effects. Use explicit properties and reduced-motion media queries.

## Implementation workflow
1. Inspect the existing layout, installed dependencies, and interaction contract.
2. Specify the static end state first, then the trigger and timing using the motion tokens.
3. Prefer CSS for hover, focus, pressed and simple entrance effects. Use explicit properties and reduced-motion media queries.
4. Scope the implementation to its owning component; preserve semantic markup and existing functionality.
5. Verify the fallback and record actual test results.

## Practical pattern
Animate a button transform on hover and maintain a visible focus ring.

## Failure modes
Avoid transition: all, permanent will-change and hidden essential content.

## Acceptance criteria
- Test keyboard, touch and disabled states.
- Essential content and interactions remain available without animation.
- Reduced-motion behavior is intentional; no paid dependency is introduced without approval.

## Review evidence
Record route, viewport, motion preference, observed result, and unresolved issues. See [official resources](sources.md) and [motion audit](audit.md).
