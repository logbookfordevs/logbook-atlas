import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
test("TypeScript typecheck hook allows when no TypeScript files changed", () => {
  const repo = prepareGitRepo();
  writeFileSync(join(repo, "README.md"), "# Demo\n");

  const result = runTypecheckHook(repo);

  assert.equal(result.continue, true);
});

test("TypeScript typecheck hook blocks when TypeScript changed without a typecheck command", () => {
  const repo = prepareGitRepo();
  mkdirSync(join(repo, "src"), { recursive: true });
  writeFileSync(join(repo, "src", "index.ts"), "export const value = 1;\n");

  const result = runTypecheckHook(repo);

  assert.equal(result.decision, "block");
  assert.match(String(result.reason), /no typecheck command was found/);
});

test("TypeScript typecheck hook runs nearest package typecheck and caches a passing signature", () => {
  const repo = prepareGitRepo();
  const packageDir = join(repo, "packages", "demo");
  mkdirSync(join(packageDir, "src"), { recursive: true });
  writeFileSync(join(packageDir, "package.json"), `${JSON.stringify({ scripts: { typecheck: "node check.js" } }, null, 2)}\n`);
  writeFileSync(join(packageDir, "check.js"), "process.exit(0);\n");
  writeFileSync(join(packageDir, "src", "index.ts"), "export const value = 1;\n");

  const first = runTypecheckHook(repo);
  writeFileSync(join(packageDir, "check.js"), "process.exit(1);\n");
  const second = runTypecheckHook(repo);

  assert.equal(first.continue, true);
  assert.equal(second.continue, true);
});

test("TypeScript typecheck hook blocks with command output when typecheck fails", () => {
  const repo = prepareGitRepo();
  mkdirSync(join(repo, "src"), { recursive: true });
  writeFileSync(join(repo, "package.json"), `${JSON.stringify({ scripts: { typecheck: "node check.js" } }, null, 2)}\n`);
  writeFileSync(join(repo, "check.js"), "console.error('typecheck exploded'); process.exit(1);\n");
  writeFileSync(join(repo, "src", "index.ts"), "export const value = 1;\n");

  const result = runTypecheckHook(repo);

  assert.equal(result.decision, "block");
  assert.match(String(result.reason), /npm run typecheck/);
  assert.match(String(result.reason), /typecheck exploded/);
});

function prepareGitRepo() {
  const repo = mkdtempSync(join(tmpdir(), "afk-hook-repo-"));
  git(repo, ["init"]);
  git(repo, ["config", "user.email", "test@example.com"]);
  git(repo, ["config", "user.name", "Test User"]);
  return repo;
}

function runTypecheckHook(cwd) {
  const scriptPath = join(repoRoot, "hooks", "afk-typescript-typecheck-stop-check.js");
  const output = execFileSync("node", [scriptPath], {
    cwd,
    input: JSON.stringify({ cwd }),
    encoding: "utf8",
  });
  return JSON.parse(output);
}

function git(cwd, args) {
  return execFileSync("git", args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
}
