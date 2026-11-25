# 12 — SVG and logo animation

## Standard
Use trusted inline SVG, viewBox, stroke-dashoffset or transforms; provide accessible labels for meaningful graphics.

## Implementation workflow
1. Inspect the existing layout, installed dependencies, and interaction contract.
2. Specify the static end state first, then the trigger and timing using the motion tokens.
3. Use trusted inline SVG, viewBox, stroke-dashoffset or transforms; provide accessible labels for meaningful graphics.
4. Scope the implementation to its owning component; preserve semantic markup and existing functionality.
5. Verify the fallback and record actual test results.

## Practical pattern
Draw a decorative checkmark using pathLength=1 and a short CSS animation.

## Failure modes
Do not inject untrusted SVG markup or animate complex filters without profiling.

## Acceptance criteria
- Verify final state, scaling, contrast and reduced motion.
- Essential content and interactions remain available without animation.
- Reduced-motion behavior is intentional; no paid dependency is introduced without approval.

## Review evidence
Record route, viewport, motion preference, observed result, and unresolved issues. See [official resources](sources.md) and [motion audit](audit.md).
