/**
 * Supprime le cache Next / Webpack (dossier .next).
 * Corrige souvent : Error: Cannot find module './325.js' (chunks obsolètes après HMR).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

function rmIfExists(p) {
  if (fs.existsSync(p)) {
    fs.rmSync(p, { recursive: true, force: true });
    console.log('Removed', path.relative(root, p) || p);
  }
}

rmIfExists(path.join(root, '.next'));
rmIfExists(path.join(root, 'node_modules', '.cache'));
