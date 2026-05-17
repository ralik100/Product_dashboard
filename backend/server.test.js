const test = require("node:test");
const assert = require("node:assert");

test("add", () => {
  assert.strictEqual(1 + 1, 2);
});

test("substract", () => {
  assert.strictEqual(1 - 1, 0);
});