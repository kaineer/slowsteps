// test/series.test.js

const { test } = require("uvu");
const { equal } = require("uvu/assert");
const { delay } = require("./helper");

const { series } = require("..");

const before = "before";
const after = "after";

test("series calls functions in sequence", async () => {
  const a = async (ctx) => delay(30).then(() => ctx.trace.push(before));
  const b = async (ctx) => ctx.trace.push(after);

  const sfn = series(a, b);
  const ctx = {trace: []};
  await sfn(ctx);
  equal(ctx.trace, [before, after]);
});

test.run();
