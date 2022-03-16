// test/helper.test.js

const { test } = require("uvu");
const assert = require("uvu/assert");

const { piped } = require("./helper");
const { isPiped } = require("..");
const { src } = require("vinyl-fs");

const assertPiped = (value, result) => assert.is(
  isPiped(value),
  result
);

test("isPiped(), piped object", async () => {
  assertPiped(piped(), true);
  assertPiped(src("*.js"), true);
});

test("isPiped(), wrong objects", async () => {
  assertPiped({}, false);
  assertPiped([], false);
  assertPiped(42, false);
  assertPiped(false, false);
  assertPiped(Promise.resolve(), false);
});

test.run();
