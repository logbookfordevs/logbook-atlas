import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const catalogRoot = join(repositoryRoot, "afk", "catalog");
const catalogFiles = ["agents.json", "hooks.json", "mcps.json", "presets.json", "profiles.json", "rules.json", "skills.json", "tools.json"];
const canonicalRepository = "https://github.com/logbookfordevs/ai-field-kit-catalog";
const legacyRepository = "https://github.com/logbookfordevs/ai-field-kit";

function readManifest(fileName) {
  return JSON.parse(readFileSync(join(catalogRoot, fileName), "utf8"));
}

function collectIds(manifest) {
  const records = manifest.items ?? manifest.layers ?? manifest.profiles ?? [];
  return Array.isArray(records) ? records.map((record) => record.id).filter(Boolean) : Object.keys(records);
}

function localPathFromSource(source) {
  if (!source || source.startsWith("http://") || source.startsWith("https://")) return undefined;
  return source;
}

export function validateCatalog() {
  const errors = [];

  for (const fileName of catalogFiles) {
    const manifest = readManifest(fileName);
    const ids = collectIds(manifest);
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);

    if (duplicates.length > 0) errors.push(`${fileName}: duplicate IDs: ${[...new Set(duplicates)].join(", ")}`);
  }

  const agents = readManifest("agents.json");
  for (const item of agents.items ?? []) {
    const localPath = localPathFromSource(item.source);
    if (localPath && !existsSync(join(repositoryRoot, localPath))) errors.push(`agents.json: missing ${localPath}`);
  }

  const skills = readManifest("skills.json");
  for (const item of skills.items ?? []) {
    if (item.source === legacyRepository) errors.push(`skills.json: ${item.id} still uses the legacy repository`);
    if (item.source === canonicalRepository && !existsSync(join(repositoryRoot, "skills", item.id, "SKILL.md"))) {
      errors.push(`skills.json: missing authored skill ${item.id}`);
    }
  }

  const rules = readManifest("rules.json");
  for (const layer of rules.layers ?? []) {
    for (const source of [layer.source, ...(layer.files ?? []).map((file) => file.source)]) {
      if (source?.includes("logbookfordevs/ai-field-kit/main/")) errors.push(`rules.json: legacy source ${source}`);
    }
  }

  const hooks = readManifest("hooks.json");
  for (const item of hooks.items ?? []) {
    if (item.source?.includes("logbookfordevs/ai-field-kit/main/")) errors.push(`hooks.json: legacy source ${item.source}`);
  }

  return errors;
}

