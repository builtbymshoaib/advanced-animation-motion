# 01 — Premium motion art direction

## Standard
Choose a single motion motif tied to brand and user intent; map each animation to feedback, orientation or storytelling.

## Implementation workflow
1. Inspect the existing layout, installed dependencies, and interaction contract.
2. Specify the static end state first, then the trigger and timing using the motion tokens.
3. Choose a single motion motif tied to brand and user intent; map each animation to feedback, orientation or storytelling.
4. Scope the implementation to its owning component; preserve semantic markup and existing functionality.
5. Verify the fallback and record actual test results.

## Practical pattern
For a luxury store use slow editorial image reveals and crisp purchase feedback; for dashboards use short state changes.

## Failure modes
Avoid animating every section identically; compare a static version first.

## Acceptance criteria
- Define a motion storyboard with trigger, target, duration, fallback and owner.
- Essential content and interactions remain available without animation.
- Reduced-motion behavior is intentional; no paid dependency is introduced without approval.

## Review evidence
Record route, viewport, motion preference, observed result, and unresolved issues. See [official resources](sources.md) and [motion audit](audit.md).
