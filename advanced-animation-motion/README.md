# Advanced Animation & Motion — v1.0.0
A reusable Agent Skill for premium motion design in Next.js. Complements nextjs-premium-web-development and premium-ui-ux-designer; no automatic dependency on either skill.

## Install in Claude
Open Customize > Skills, choose + > Create skill, upload a ZIP containing the advanced-animation-motion folder, then enable it. Availability depends on account settings. See https://support.claude.com/en/articles/12512180-use-skills-in-claude.

## Install in Claude Code (PowerShell)
After publishing your own repository:
```powershell
New-Item -ItemType Directory -Force "$HOME/.claude/skills"
git clone https://github.com/YOUR_USERNAME/advanced-animation-motion.git "$HOME/.claude/skills/advanced-animation-motion"
```
Alternatively extract the skill folder into that directory. Invoke `/advanced-animation-motion` or ask for premium motion using the skill.

## GitHub publication
Create an empty repository named advanced-animation-motion, open the extracted skill folder, and run:
```bash
git init
git add .
git commit -m "Initial advanced motion skill"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/advanced-animation-motion.git
git push -u origin main
```
Replace YOUR_USERNAME. Choose repository visibility and license before distributing. No publication is performed by these files.

## Usage
"Use advanced-animation-motion with my premium UI/UX and master Next.js skills. Add brand-appropriate motion without breaking existing functionality. Respect reduced motion, use free tools, and report measured results."

## Contents
17 focused references, 8 React component starters, CSS motion tokens, scenarios, and package/project inspection scripts. Read [SKILL.md](SKILL.md) for routing and [assets/README.md](assets/README.md) for integration.

## Validation
`python scripts/validate.py` checks the package structure and local Markdown links. `python scripts/package.py` validates and produces a ZIP alongside the skill directory. `node scripts/project-check.mjs /path/to/project` reports existing project scripts and dependencies without executing them. Run the reported project commands manually after review. These checks do not prove compilation, accessibility or visual quality.
