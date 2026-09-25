import assert from 'node:assert/strict';
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { test } from 'node:test';
import { buildSkills, composeSkills, repositoryRoot, sha256 } from './build-skills.mjs';

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'atlas-build-test-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const path of ['sources', 'workflows']) cpSync(join(repositoryRoot, path), join(root, path), { recursive: true });
  return root;
}

test('committed packages regenerate exactly and all bundled links resolve', () => {
  buildSkills(repositoryRoot, { check: true });
  for (const [, files] of composeSkills()) {
    for (const [name, bytes] of files) {
      if (!name.endsWith('.md')) continue;
      for (const match of bytes.toString().matchAll(/\]\(([^)]+)\)/g)) {
        if (/^https?:/.test(match[1])) continue;
        assert.ok(files.has(match[1]), `Missing packaged reference ${match[1]}`);
      }
    }
    const receipt = JSON.parse(files.get('SOURCE-MANIFEST.json'));
    assert.ok(receipt.dependencies.every(dependency => dependency.required === false));
    for (const [name, checksum] of Object.entries(receipt.files)) assert.equal(sha256(files.get(name)), checksum);
  }
});

test('a package is portable and hand-edited output is rejected', t => {
  const root = fixture(t);
  buildSkills(root);
  buildSkills(root, { check: true });
  const path = join(root, 'skills/logbook-investigate/references/research.md');
  writeFileSync(path, 'untracked output edit');
  assert.throws(() => buildSkills(root, { check: true }), /Generated packages differ/);
  buildSkills(root);
  buildSkills(root, { check: true });
});

test('altered upstream bytes and license notices fail integrity checks', t => {
  for (const file of ['source.md', 'LICENSE']) {
    const root = fixture(t);
    writeFileSync(join(root, 'sources/upstream/research', file), 'changed without adopting a new pin');
    assert.throws(() => composeSkills(root), /integrity failure/);
  }
});

test('patched methods must match replay and authored changes stale the package', t => {
  const root = fixture(t);
  buildSkills(root);
  const entry = join(root, 'workflows/logbook-investigate/entry.md');
  writeFileSync(entry, `${readFileSync(entry, 'utf8')}\nAdditional task-specific guidance.\n`);
  assert.throws(() => buildSkills(root, { check: true }), /Generated packages differ/);
  buildSkills(root);
  writeFileSync(join(root, 'sources/methods/research.md'), 'method no longer matches patch');
  assert.throws(() => composeSkills(root), /Patch replay mismatch/);
});

test('archived skill files retain their pre-move bytes', () => {
  const receipt = JSON.parse(readFileSync(join(repositoryRoot, 'docs/migrations/skills-v2-archive.json')));
  for (const file of receipt.files) assert.equal(sha256(readFileSync(join(repositoryRoot, file.to))), file.sha256, file.to);
});
