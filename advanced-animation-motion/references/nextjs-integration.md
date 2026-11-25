# 03 — Next.js and React integration

## Standard
Keep routes and data fetching server-side; isolate animation in small client components. Read browser APIs inside effects or events.

## Implementation workflow
1. Inspect the existing layout, installed dependencies, and interaction contract.
2. Specify the static end state first, then the trigger and timing using the motion tokens.
3. Keep routes and data fetching server-side; isolate animation in small client components. Read browser APIs inside effects or events.
4. Scope the implementation to its owning component; preserve semantic markup and existing functionality.
5. Verify the fallback and record actual test results.

## Practical pattern
Pass server-rendered children through a client wrapper; keep navigation using next/link.

## Failure modes
Avoid making root layout client-only, hydration-dependent random values and browser APIs during render.

## Acceptance criteria
- Run build, inspect hydration console and navigate repeatedly under Strict Mode.
- Essential content and interactions remain available without animation.
- Reduced-motion behavior is intentional; no paid dependency is introduced without approval.

## Review evidence
Record route, viewport, motion preference, observed result, and unresolved issues. See [official resources](sources.md) and [motion audit](audit.md).
