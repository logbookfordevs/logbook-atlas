import assert from "node:assert/strict";
import test from "node:test";
import { validateCatalog } from "../scripts/catalog-contract.mjs";

test("the published catalog is internally consistent", () => {
  assert.deepEqual(validateCatalog(), []);
});

