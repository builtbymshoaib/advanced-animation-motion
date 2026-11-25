# 06 — GSAP timelines and cleanup

## Standard
Use @gsap/react useGSAP with a scoped ref; register plugins once; revert on update when dependencies change.

## Implementation workflow
1. Inspect the existing layout, installed dependencies, and interaction contract.
2. Specify the static end state first, then the trigger and timing using the motion tokens.
3. Use @gsap/react useGSAP with a scoped ref; register plugins once; revert on update when dependencies change.
4. Scope the implementation to its owning component; preserve semantic markup and existing functionality.
5. Verify the fallback and record actual test results.

## Practical pattern
Build a timeline with overlapping decorative layers and explicit labels; use contextSafe for delayed event handlers.

## Failure modes
Never kill all global triggers to clean one component; avoid global selectors.

## Acceptance criteria
- Unmount, remount and check for duplicate timelines and listeners.
- Essential content and interactions remain available without animation.
- Reduced-motion behavior is intentional; no paid dependency is introduced without approval.

## Review evidence
Record route, viewport, motion preference, observed result, and unresolved issues. See [official resources](sources.md) and [motion audit](audit.md).
