# 05 — Motion for React (Framer Motion)

## Standard
Use motion/react for new projects or existing framer-motion imports consistently; use variants, MotionConfig and AnimatePresence for local state.

## Implementation workflow
1. Inspect the existing layout, installed dependencies, and interaction contract.
2. Specify the static end state first, then the trigger and timing using the motion tokens.
3. Use motion/react for new projects or existing framer-motion imports consistently; use variants, MotionConfig and AnimatePresence for local state.
4. Scope the implementation to its owning component; preserve semantic markup and existing functionality.
5. Verify the fallback and record actual test results.

## Practical pattern
Animate a decorative status indicator or keyed disclosure content; keep controls outside exiting subtree.

## Failure modes
Avoid mixing engines on the same transform and assuming route exits work automatically.

## Acceptance criteria
- Check initial server markup, stable keys, reduced motion and interrupted transitions.
- Essential content and interactions remain available without animation.
- Reduced-motion behavior is intentional; no paid dependency is introduced without approval.

## Review evidence
Record route, viewport, motion preference, observed result, and unresolved issues. See [official resources](sources.md) and [motion audit](audit.md).
