import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const EXAMPLES = path.join(ROOT, 'examples');
const PREVIEWS = path.join(ROOT, 'assets', 'previews');

const stems = (dir, extension) => fs.readdirSync(dir)
  .filter((name) => name.endsWith(extension))
  .map((name) => path.basename(name, extension))
  .sort();

test('every example has exactly one preview', () => {
  assert.deepEqual(stems(EXAMPLES, '.html'), stems(PREVIEWS, '.webp'));
});

test('all examples preserve the production motion and performance contract', () => {
  for (const name of fs.readdirSync(EXAMPLES).filter((item) => item.endsWith('.html'))) {
    const source = fs.readFileSync(path.join(EXAMPLES, name), 'utf8');
    assert.match(source, /<meta\s+charset=/i, `${name} is missing a charset`);
    assert.match(source, /<title>[^<]+<\/title>/i, `${name} is missing a title`);
    assert.match(source, /prefers-reduced-motion/i, `${name} cannot disable motion`);
    assert.doesNotMatch(source, /backdrop-filter\s*:/i, `${name} uses forbidden backdrop-filter`);

    for (const [, code] of source.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)) {
      assert.doesNotThrow(() => new Function(code), `${name} contains invalid inline JavaScript`);
    }
  }
});
