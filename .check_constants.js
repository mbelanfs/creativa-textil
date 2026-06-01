// quick check of constants export
try {
  const c = require('./constants');
  console.log({ keys: Object.keys(c) });
  if (c.DRESSITOS_PRODUCTS) console.log('dressitos length', c.DRESSITOS_PRODUCTS.length);
  if (c.FALLASTYLE_PRODUCTS) console.log('fallastyle length', c.FALLASTYLE_PRODUCTS.length);
} catch (e) {
  console.error('error', e && e.message);
}
