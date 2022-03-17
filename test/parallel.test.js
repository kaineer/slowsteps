// test/parallel.test.js

const { test } = require("uvu");
const { equal } = require("uvu/assert");
const { delay } = require("./helper");

const { parallel } = require("..");

const before = "before";
const after = "after";

test("parallel calls functions in parallel", async () => {
  const a = async (ctx) => delay(30).then(() => ctx.trace.push(after));
  const b = async (ctx) => ctx.trace.push(before);

  const pfn = parallel(a, b);
  const ctx = {trace: []};
  await pfn(ctx);
  equal(ctx.trace, [before, after]);
});

test.run();
