// test/is-piped.test.js

const { test } = require("uvu");
const { is } = require("uvu/assert");

const { piped } = require("../helper");
const { isPiped } = require("../../lib/piper");
const { src } = require("vinyl-fs");

const assertIsPiped = (value, result = true) => is(
  isPiped(value),
  result
);

test("isPiped(), piped object", async () => {
  assertIsPiped(piped());
  assertIsPiped(src("*.js"));
});

test("isPiped(), wrong objects", async () => {
  assertIsPiped({}, false);
  assertIsPiped([], false);
  assertIsPiped(42, false);
  assertIsPiped(false, false);
  assertIsPiped(Promise.resolve(), false);
});

test.run();
