import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

export const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const json = value => `${JSON.stringify(value, null, 2)}\n`;

function filesIn(directory, prefix = '') {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const name = join(prefix, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Package symlink is not portable: ${name}`);
    return entry.isDirectory() ? filesIn(join(directory, entry.name), name) : [name];
  });
}

export function composeSkills(root = repositoryRoot) {
  const read = path => {
    const location = resolve(root, path);
    if (!location.startsWith(`${resolve(root)}${sep}`)) throw new Error(`Input escapes repository: ${path}`);
    return readFileSync(location);
  };
  const composition = JSON.parse(read('sources/composition.json'));
  if (composition.version !== 1) throw new Error('Unsupported composition version');
  const sources = new Map();
  for (const source of composition.sources) {
    if (sources.has(source.id)) throw new Error(`Duplicate source: ${source.id}`);
    if (!/^[a-z0-9-]+$/.test(source.id) || !/^[a-f0-9]{40}$/.test(source.upstream.commit)) throw new Error(`Invalid source identity: ${source.id}`);
    if (sha256(read(source.snapshot)) !== source.sourceSha256) throw new Error(`Snapshot integrity failure: ${source.id}`);
    if (sha256(read(source.license)) !== source.licenseSha256) throw new Error(`License integrity failure: ${source.id}`);
    if (!['verbatim', 'patched', 'derived'].includes(source.classification)) throw new Error(`Invalid classification: ${source.id}`);
    if (!source.adaptation) throw new Error(`Missing adaptation record: ${source.id}`);
    const method = read(source.method);
    if (source.classification === 'verbatim' && !method.equals(read(source.snapshot))) throw new Error(`Verbatim mismatch: ${source.id}`);
    if (source.classification === 'patched') {
      const temporary = mkdtempSync(join(tmpdir(), 'atlas-patch-'));
      try {
        writeFileSync(join(temporary, 'source.md'), read(source.snapshot));
        execFileSync('git', ['apply', '--no-index', '-'], { cwd: temporary, input: read(source.patch), stdio: ['pipe', 'pipe', 'pipe'] });
        if (!method.equals(readFileSync(join(temporary, 'source.md')))) throw new Error(`Patch replay mismatch: ${source.id}`);
      } finally { rmSync(temporary, { recursive: true, force: true }); }
    }
    sources.set(source.id, source);
  }
  const packages = new Map();
  for (const workflow of composition.workflows) {
    if (!/^logbook-[a-z0-9-]+$/.test(workflow.id) || packages.has(workflow.id)) throw new Error(`Invalid workflow: ${workflow.id}`);
    const output = new Map([['SKILL.md', read(workflow.entry)], ['agents/openai.yaml', read(workflow.agent)]]);
    const receipts = workflow.methods.map(id => {
      const source = sources.get(id);
      if (!source || !source.consumers.includes(workflow.id)) throw new Error(`Undeclared consumer: ${workflow.id}/${id}`);
      const target = `references/${id}.md`;
      const licenseTarget = `licenses/${id}.txt`;
      output.set(target, read(source.method));
      output.set(licenseTarget, read(source.license));
      return { id, owner: source.owner, classification: source.classification, upstream: source.upstream,
        sourceSha256: source.sourceSha256, carriedPath: target, carriedSha256: sha256(read(source.method)),
        licensePath: licenseTarget, licenseSha256: source.licenseSha256, adaptation: source.adaptation,
        ...(source.patch ? { patch: source.patch, patchSha256: sha256(read(source.patch)) } : {}) };
    });
    output.set('SOURCE-MANIFEST.json', Buffer.from(json({ version: 1, workflow: workflow.id, generated: true,
      authoredInputs: [workflow.entry, workflow.agent], dependencies: workflow.dependencies, sources: receipts,
      files: Object.fromEntries([...output].map(([path, bytes]) => [path, sha256(bytes)])) })));
    packages.set(workflow.id, output);
  }
  for (const source of sources.values()) {
    for (const consumer of source.consumers) {
      if (!composition.workflows.some(workflow => workflow.id === consumer && workflow.methods.includes(source.id))) throw new Error(`Stale consumer: ${source.id}/${consumer}`);
    }
  }
  return packages;
}

export function buildSkills(root = repositoryRoot, { check = false } = {}) {
  const mismatches = [];
  for (const [id, output] of composeSkills(root)) {
    const directory = join(root, 'skills', id);
    for (const [path, bytes] of output) {
      const target = join(directory, path);
      if (check) {
        if (!existsSync(target) || !readFileSync(target).equals(bytes)) mismatches.push(relative(root, target));
      } else {
        mkdirSync(dirname(target), { recursive: true });
        writeFileSync(target, bytes);
      }
    }
    for (const path of filesIn(directory)) {
      if (!output.has(path)) mismatches.push(`Unexpected generated file: ${id}/${path}`);
    }
  }
  if (mismatches.length) throw new Error(`Generated packages differ; edit canonical inputs and regenerate:\n${mismatches.join('\n')}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  buildSkills(repositoryRoot, { check: process.argv.includes('--check') });
  process.stdout.write('Atlas skill packages verified.\n');
}
