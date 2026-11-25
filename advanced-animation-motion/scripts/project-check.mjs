import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
const root = resolve(process.argv[2] || '.');
try {
 const p = JSON.parse(readFileSync(resolve(root,'package.json'),'utf8'));
 const deps = {...p.dependencies,...p.devDependencies};
 console.log('Project:',p.name || '(unnamed)');
 for (const k of ['next','react','motion','framer-motion','gsap','@gsap/react']) console.log(k, deps[k] || 'not declared');
 for (const k of ['lint','typecheck','build','test','test:e2e']) console.log(k, p.scripts?.[k] ? `available: npm run ${k} (adapt package manager)` : 'not declared');
 console.log('Inspection only; no project scripts executed.');
} catch(e) { console.error(e.message); process.exitCode=1; }
