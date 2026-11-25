# 09 — Scroll storytelling and pinning

## Standard
Use pinning only for short optional desktop storytelling; provide linear mobile and reduced-motion layouts.

## Implementation workflow
1. Inspect the existing layout, installed dependencies, and interaction contract.
2. Specify the static end state first, then the trigger and timing using the motion tokens.
3. Use pinning only for short optional desktop storytelling; provide linear mobile and reduced-motion layouts.
4. Scope the implementation to its owning component; preserve semantic markup and existing functionality.
5. Verify the fallback and record actual test results.

## Practical pattern
Pin a product image beside three content steps; reserve its dimensions and keep reading order natural.

## Failure modes
Avoid scroll hijacking, nested pinning and pinning interactive forms.

## Acceptance criteria
- Test resizing, orientation, font loading, anchor links and keyboard scroll.
- Essential content and interactions remain available without animation.
- Reduced-motion behavior is intentional; no paid dependency is introduced without approval.

## Review evidence
Record route, viewport, motion preference, observed result, and unresolved issues. See [official resources](sources.md) and [motion audit](audit.md).
