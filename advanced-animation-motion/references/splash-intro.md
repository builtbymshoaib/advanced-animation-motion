# 07 — Splash screens and logo reveals

## Standard
Default to nonblocking decorative intros; never delay content or simulate loading. Keep logo animation short and skip for reduced motion.

## Implementation workflow
1. Inspect the existing layout, installed dependencies, and interaction contract.
2. Specify the static end state first, then the trigger and timing using the motion tokens.
3. Default to nonblocking decorative intros; never delay content or simulate loading. Keep logo animation short and skip for reduced motion.
4. Scope the implementation to its owning component; preserve semantic markup and existing functionality.
5. Verify the fallback and record actual test results.

## Practical pattern
Use an aria-hidden logo flourish alongside visible content, with pointer-events none.

## Failure modes
Avoid full-screen focus traps, scroll locks and replay on every route.

## Acceptance criteria
- Verify links work immediately and intro failure leaves content visible.
- Essential content and interactions remain available without animation.
- Reduced-motion behavior is intentional; no paid dependency is introduced without approval.

## Review evidence
Record route, viewport, motion preference, observed result, and unresolved issues. See [official resources](sources.md) and [motion audit](audit.md).
