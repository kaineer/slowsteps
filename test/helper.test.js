// test/helper.test.js

const { test } = require("uvu");
const assert = require("uvu/assert");

const { delay, value, piped } = require("./helper");

test("delay()", async () => {
  const result = await (delay(20).then(() => 42));
  assert.is(result, 42);
});

test("value()", async () => {
  const result = await value(42);
  assert.is(result, 42);
});

test("piped()", async () => {
  const obj = piped();
  assert.type(obj, "object");
  assert.type(obj.pipe, "function");
  assert.type(obj.on, "function");
  assert.type(obj.end, "function");
});

test.run();
