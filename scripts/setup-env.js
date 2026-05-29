import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const envPath = path.join(root, '.env');
const examplePath = path.join(root, '.env.example');

const defaults = `# Auto-generated — safe to edit
# Leave VITE_API_URL empty to use same-origin proxy (recommended)
VITE_API_URL=
VITE_WS_URL=
`;

function ensureEnv() {
  if (fs.existsSync(envPath)) {
    console.log('[setup] frontend/.env already exists');
    return;
  }
  let content = defaults;
  if (fs.existsSync(examplePath)) {
    content = fs.readFileSync(examplePath, 'utf8');
    if (!content.includes('VITE_API_URL')) {
      content += '\nVITE_API_URL=\nVITE_WS_URL=\n';
    }
  }
  fs.writeFileSync(envPath, content);
  console.log('[setup] Created frontend/.env');
}

ensureEnv();
