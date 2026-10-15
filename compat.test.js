const test = require('node:test');
const assert = require('node:assert/strict');
test('legacy interface delegates to the canonical addon', async () => {
  const iface = require('./addon');
  assert.equal(iface.manifest.id, 'org.montanatv.addon');
  const result = await iface.get('catalog', 'movie', 'montanatv.catalog');
  assert.equal(result.metas.length, 3);
});
