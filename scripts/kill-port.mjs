/**
 * Libère un port sous Windows (taskkill sur le PID qui LISTEN).
 * Usage : node scripts/kill-port.mjs 3000
 */
import { execSync } from 'child_process';

const port = process.argv[2] || '3000';
try {
  const out = execSync(`netstat -ano | findstr ":${port} "`, { encoding: 'utf8' });
  const lines = out.trim().split(/\r?\n/).filter(Boolean);
  const pids = new Set();
  for (const line of lines) {
    const m = line.match(/LISTENING\s+(\d+)\s*$/);
    if (m) pids.add(m[1]);
  }
  if (pids.size === 0) {
    console.log(`Aucun processus en écoute sur le port ${port}.`);
    process.exit(0);
  }
  for (const pid of pids) {
    console.log(`Arrêt du PID ${pid} (port ${port})…`);
    execSync(`taskkill /PID ${pid} /F`, { stdio: 'inherit' });
  }
} catch (e) {
  console.error(e.message);
  process.exit(1);
}
