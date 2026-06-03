#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, '../data/products.json');
let ok = true;
try {
  const raw = fs.readFileSync(file, 'utf8');
  const data = JSON.parse(raw);
  if (typeof data !== 'object' || data === null) throw new Error('root is not an object');
  const arrays = ['DRESSITOS_PRODUCTS', 'FALLASTYLE_PRODUCTS'];
  const seen = new Set();
  arrays.forEach((k) => {
    const arr = data[k];
    if (!Array.isArray(arr)) {
      console.error(`ERROR: ${k} is missing or not an array`);
      ok = false;
      return;
    }
    arr.forEach((p, i) => {
      const id = p && p.id;
      if (!id) {
        console.error(`ERROR: ${k}[${i}] missing id`);
        ok = false;
      } else {
        if (seen.has(id)) {
          console.error(`ERROR: duplicated id ${id}`);
          ok = false;
        }
        seen.add(id);
      }
      if (!p.name) { console.error(`ERROR: ${id || k+'['+i+']'} missing name`); ok = false }
      if (typeof p.price !== 'number') { console.error(`ERROR: ${id || k+'['+i+']'} price not a number`); ok = false }
      if (!p.image) { console.error(`WARN: ${id || k+'['+i+']'} missing main image`); }
      if (!Array.isArray(p.images)) { console.error(`WARN: ${id || k+'['+i+']'} images should be an array`); }
      // Check local image existence (best-effort)
      const checkPaths = (p.images || []).concat(p.image || []);
      checkPaths.forEach(img => {
        if (!img || typeof img !== 'string') return;
        // only check local images under /images
        if (img.startsWith('/images')) {
          const local = path.resolve(__dirname, '..', img.replace(/^\//, ''));
          if (!fs.existsSync(local)) {
            console.warn(`WARN: image file not found: ${local}`);
          }
        }
      });
    });
  });
} catch (e) {
  console.error('ERROR: failed to parse products.json -', e.message);
  process.exit(2);
}
if (!ok) {
  console.error('\nValidation failed');
  process.exit(1);
}
console.log('Products validation passed');
process.exit(0);
