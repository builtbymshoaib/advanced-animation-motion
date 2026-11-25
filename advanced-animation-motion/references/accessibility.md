# 15 — Reduced motion and accessibility

## Standard
Honor prefers-reduced-motion in CSS and JS; disable parallax, large transforms and autoplay when requested. Provide pause/stop controls for qualifying persistent motion.

## Implementation workflow
1. Inspect the existing layout, installed dependencies, and interaction contract.
2. Specify the static end state first, then the trigger and timing using the motion tokens.
3. Honor prefers-reduced-motion in CSS and JS; disable parallax, large transforms and autoplay when requested. Provide pause/stop controls for qualifying persistent motion.
4. Scope the implementation to its owning component; preserve semantic markup and existing functionality.
5. Verify the fallback and record actual test results.

## Practical pattern
Use MotionConfig reducedMotion=user plus explicit hook checks for scroll-linked effects.

## Failure modes
Avoid flashing content, focus obstruction and animation-only information.

## Acceptance criteria
- Test OS preference changes at runtime, keyboard and screen reader; target WCAG 2.2 AA.
- Essential content and interactions remain available without animation.
- Reduced-motion behavior is intentional; no paid dependency is introduced without approval.

## Review evidence
Record route, viewport, motion preference, observed result, and unresolved issues. See [official resources](sources.md) and [motion audit](audit.md).
