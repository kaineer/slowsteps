// test/is-piped.test.js

const { test } = require("uvu");
const { is } = require("uvu/assert");

const { piped } = require("../helper");
const { isPiped } = require("../../lib/piper");
const { src } = require("vinyl-fs");

const assertPiped = (value, result = true) => is(
  isPiped(value),
  result
);

test("isPiped(), piped object", async () => {
  assertPiped(piped());
  assertPiped(src("*.js"));
});

test("isPiped(), wrong objects", async () => {
  assertPiped({}, false);
  assertPiped([], false);
  assertPiped(42, false);
  assertPiped(false, false);
  assertPiped(Promise.resolve(), false);
});

test.run();
