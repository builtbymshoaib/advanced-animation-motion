# Integrating the starter assets
Copy only the components needed into your existing project. Import motion-tokens.css once in app/layout.tsx (or merge the tokens into the current stylesheet). All snippets are adaptable starters, not a standalone application.

CSS-only: AnimatedButton, LogoIntro, RouteAccent, DrawCheck. No new package required.
Motion components: install `npm install motion` only if no compatible existing Motion package; for an existing framer-motion project adapt imports consistently after checking APIs. Wrap relevant subtree with MotionProvider. StatusAccent is decorative: the parent must expose actual status text. ParallaxAccent is decorative only.
GSAP: `npm install gsap @gsap/react` if needed and licensing is suitable. ScrollAccent uses scoped cleanup. Do not install both engines just because both examples exist.

For App Router entry effects, render RouteAccent in the relevant template.tsx alongside children; template remounts reset local state, so do not move persistent state into it. Keep the actual content visible.

Run existing project checks and browser tests. No package versions are pinned here because the host project determines compatibility; commit the host lockfile and verify peer dependencies. No paid plugins are required by these examples.
