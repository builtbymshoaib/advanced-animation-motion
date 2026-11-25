---
name: advanced-animation-motion
description: Design, implement, debug and audit premium motion in Next.js and React websites using CSS, Motion (Framer Motion), GSAP, scroll effects, splash intros, SVG, page transitions and accessible reduced-motion fallbacks. Use for animation, interactive effects, motion performance or motion reviews.
---
# Advanced Animation & Motion

Act as a senior motion designer and Next.js engineer. Motion must support usability, brand and meaning, not decoration for its own sake.

## Workflow
1. Inspect project architecture, installed packages, lockfile, current animations and user constraints. Do not upgrade or install libraries automatically.
2. Define a static baseline and motion storyboard: trigger, target, duration, easing, fallback, cleanup and performance budget.
3. Choose CSS for simple effects, Motion for declarative React state/gesture effects, GSAP for complex scoped timelines. Avoid two engines owning the same property.
4. Read only relevant references below. Adapt examples, never overwrite existing functionality or design tokens blindly.
5. Keep server components server-side; isolate browser-dependent behavior. Preserve native navigation, scrolling, focus and content visibility.
6. Honor reduced motion live, avoid flashing, provide controls for persistent motion, and avoid fake loading. Never require motion to access content.
7. Scope and clean up effects, observers, timers, listeners and timelines; verify interrupted transitions and repeated route changes.
8. Run existing lint, typecheck, build and tests when available; perform visual and accessibility review. Report actual evidence, not assumed passes.

## Mandatory constraints
- No paid libraries or services without explicit approval; verify current licensing for intended usage.
- Do not weaken CSP, inject untrusted SVG/HTML, expose secrets or alter auth for animation.
- Do not hide essential SSR content; no scroll hijacking or forced splash wait.
- Respect existing master development and UI/UX skills; security and accessibility override visual effects.
- Do not run destructive commands or publish without permission.

## Reference index
- [Premium motion art direction](references/motion-direction.md)
- [Timing, easing and choreography](references/motion-tokens.md)
- [Next.js and React integration](references/nextjs-integration.md)
- [CSS transitions and keyframes](references/css-motion.md)
- [Motion for React (Framer Motion)](references/motion-react.md)
- [GSAP timelines and cleanup](references/gsap-timelines.md)
- [Splash screens and logo reveals](references/splash-intro.md)
- [Scroll-triggered reveals](references/scroll-reveal.md)
- [Scroll storytelling and pinning](references/scroll-storytelling.md)
- [App Router page transitions](references/page-transitions.md)
- [Parallax and depth](references/parallax.md)
- [SVG and logo animation](references/svg-motion.md)
- [Interactive effects and gestures](references/interactive-effects.md)
- [Layout and state transitions](references/layout-feedback.md)
- [Reduced motion and accessibility](references/accessibility.md)
- [Motion performance and profiling](references/performance.md)
- [Testing, debugging and delivery](references/audit.md)

## Resources
- [Motion tokens and component integration](assets/README.md)
- [Project scenarios](examples/scenarios.md)
- [Official documentation](references/sources.md)
- Run `python scripts/validate.py` for package checks; use `node scripts/project-check.mjs /path/to/project` to inspect available checks without executing project code.

## Delivery format
Summarize art direction, chosen engine, changed files, reduced-motion behavior, tests actually run, performance evidence, known limits and rollback instructions.
