# 16 — Motion performance and profiling

## Standard
Prefer transform and opacity, limit animated layers and keep main-thread work bounded. Lazy-load optional heavy scenes.

## Implementation workflow
1. Inspect the existing layout, installed dependencies, and interaction contract.
2. Specify the static end state first, then the trigger and timing using the motion tokens.
3. Prefer transform and opacity, limit animated layers and keep main-thread work bounded. Lazy-load optional heavy scenes.
4. Scope the implementation to its owning component; preserve semantic markup and existing functionality.
5. Verify the fallback and record actual test results.

## Practical pattern
Compare traces with animation disabled; track dropped frames and long tasks on representative mobile hardware.

## Failure modes
Avoid expensive per-frame layout reads, filter-heavy full-screen effects and global smooth-scroll wrappers.

## Acceptance criteria
- Measure LCP <=2.5s, INP <=200ms, CLS <=0.1 at p75 when field data exists; label lab results separately.
- Essential content and interactions remain available without animation.
- Reduced-motion behavior is intentional; no paid dependency is introduced without approval.

## Review evidence
Record route, viewport, motion preference, observed result, and unresolved issues. See [official resources](sources.md) and [motion audit](audit.md).
