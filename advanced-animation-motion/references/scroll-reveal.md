# 08 — Scroll-triggered reveals

## Standard
Use intersection observers or ScrollTrigger for nonessential decoration, with native scroll preserved.

## Implementation workflow
1. Inspect the existing layout, installed dependencies, and interaction contract.
2. Specify the static end state first, then the trigger and timing using the motion tokens.
3. Use intersection observers or ScrollTrigger for nonessential decoration, with native scroll preserved.
4. Scope the implementation to its owning component; preserve semantic markup and existing functionality.
5. Verify the fallback and record actual test results.

## Practical pattern
Reveal a decorative rule once at 80% viewport; keep text visible before JavaScript.

## Failure modes
Avoid invisible server-rendered headings and dozens of independent scroll listeners.

## Acceptance criteria
- Check fast scrolling, deep links, back navigation and JavaScript disabled.
- Essential content and interactions remain available without animation.
- Reduced-motion behavior is intentional; no paid dependency is introduced without approval.

## Review evidence
Record route, viewport, motion preference, observed result, and unresolved issues. See [official resources](sources.md) and [motion audit](audit.md).
