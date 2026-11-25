# Project examples

## Luxury e-commerce
Storyboard: visible hero headline and CTA; decorative logo intro 600ms; product media accent 550ms; cart feedback 150ms. CSS first; no artificial loading or delayed checkout. Verify mobile and keyboard purchase flow.

## Creative agency
Use GSAP scoped timelines for an optional editorial scene, native scroll, no mobile pinning unless verified. Use static images for reduced motion. Keep navigation available. Measure long tasks and LCP before/after.

## SaaS dashboard
Use CSS or Motion for state feedback and short local layout changes. Avoid route-wide animation, moving tables and animated numeric values that obscure exact data. Preserve focus and announce real status changes.

## Portfolio
Use RouteAccent for a subtle route entrance and ParallaxAccent for decorative depth. Keep headings server-rendered and visible. Test deep links, back/forward and reduced motion.

## Regression matrix
Check 320px, 390px, 768px, 1440px; keyboard, touch, normal/reduced motion, slow network, repeated navigation, no JS, and interrupted interactions. Record observed pass/fail; do not mark untested cases as passed.
