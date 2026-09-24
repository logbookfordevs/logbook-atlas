import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
const read = name => JSON.parse(readFileSync(new URL(`../afk/catalog/${name}.json`, import.meta.url), "utf8"));
test("manual skill metadata and catalog invocation agree", () => {
  for (const id of ["afk-cli", "afk-compass", "writing-for-humans"]) {
    assert.equal(read("skills").items.find(item => item.id === id).invocation, "manual");
    const skill = readFileSync(new URL(`../skills/${id}/SKILL.md`, import.meta.url), "utf8");
    assert.match(skill.split("---")[1], /disable-model-invocation: true/);
    assert.match(readFileSync(new URL(`../skills/${id}/agents/openai.yaml`, import.meta.url), "utf8"), /allow_implicit_invocation: false/);
  }
});
test("architect preset selects its skill and three roles", () => {
  const preset = read("presets").presets.find(item => item.id === "afk-architect");
  assert.deepEqual(preset.selections.skills, ["afk-architect"]);
  assert.deepEqual(preset.selections.customAgents, ["afk-cartographer", "afk-builder", "afk-pathfinder"]);
});
