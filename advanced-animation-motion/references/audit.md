# 17 — Testing, debugging and delivery

## Standard
Inventory animation owners, dependencies and fallback paths; inspect console and record actual test evidence.

## Implementation workflow
1. Inspect the existing layout, installed dependencies, and interaction contract.
2. Specify the static end state first, then the trigger and timing using the motion tokens.
3. Inventory animation owners, dependencies and fallback paths; inspect console and record actual test evidence.
4. Scope the implementation to its owning component; preserve semantic markup and existing functionality.
5. Verify the fallback and record actual test results.

## Practical pattern
Exercise rapid navigation, reduced motion, no JS, slow network, mobile and interrupted transitions.

## Failure modes
Never claim browser tests or accessibility compliance without evidence.

## Acceptance criteria
- Report commands, results, skipped checks, defects and rollback steps.
- Essential content and interactions remain available without animation.
- Reduced-motion behavior is intentional; no paid dependency is introduced without approval.

## Review evidence
Record route, viewport, motion preference, observed result, and unresolved issues. See [official resources](sources.md) and [motion audit](audit.md).
