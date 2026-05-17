const test = require("node:test");
const assert = require("node:assert");
const { my_subtract } = require("./math")

test("add", () => {
  assert.strictEqual(1 + 1, 2);
});

test("subtract", () => {
  assert.strictEqual(1 - 1, 0);
});

test("my_subtract", () => {
  assert.strictEqual(my_subtract(5, 2), 3);
});