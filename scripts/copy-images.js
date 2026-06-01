const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '..', 'images');
const dest = path.resolve(__dirname, '..', 'dist', 'images');

function copyRecursive(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  copyRecursive(src, dest);
  console.log('Images copied to dist/images');
} catch (err) {
  console.error('Failed to copy images', err);
  process.exit(1);
}
