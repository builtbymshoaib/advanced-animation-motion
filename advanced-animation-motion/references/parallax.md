# 11 — Parallax and depth

## Standard
Use modest decorative displacement with reserved image geometry; disable for reduced motion and narrow screens when appropriate.

## Implementation workflow
1. Inspect the existing layout, installed dependencies, and interaction contract.
2. Specify the static end state first, then the trigger and timing using the motion tokens.
3. Use modest decorative displacement with reserved image geometry; disable for reduced motion and narrow screens when appropriate.
4. Scope the implementation to its owning component; preserve semantic markup and existing functionality.
5. Verify the fallback and record actual test results.

## Practical pattern
Use useScroll and useTransform on a decorative background layer with 24px travel.

## Failure modes
Avoid moving readable text or making essential controls track scrolling.

## Acceptance criteria
- Test low-power mobile and ensure no horizontal overflow.
- Essential content and interactions remain available without animation.
- Reduced-motion behavior is intentional; no paid dependency is introduced without approval.

## Review evidence
Record route, viewport, motion preference, observed result, and unresolved issues. See [official resources](sources.md) and [motion audit](audit.md).
