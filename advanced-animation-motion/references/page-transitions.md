# 10 — App Router page transitions

## Standard
Use template.tsx for entry animations only where remounting is desired. Preserve shared layouts and built-in navigation.

## Implementation workflow
1. Inspect the existing layout, installed dependencies, and interaction contract.
2. Specify the static end state first, then the trigger and timing using the motion tokens.
3. Use template.tsx for entry animations only where remounting is desired. Preserve shared layouts and built-in navigation.
4. Scope the implementation to its owning component; preserve semantic markup and existing functionality.
5. Verify the fallback and record actual test results.

## Practical pattern
Apply a short CSS animation to a route accent; use loading.tsx for actual pending content.

## Failure modes
Do not promise generic exit animations across App Router segment changes or freeze router internals.

## Acceptance criteria
- Test back/forward, dynamic segments, loading, errors and focus restoration.
- Essential content and interactions remain available without animation.
- Reduced-motion behavior is intentional; no paid dependency is introduced without approval.

## Review evidence
Record route, viewport, motion preference, observed result, and unresolved issues. See [official resources](sources.md) and [motion audit](audit.md).
