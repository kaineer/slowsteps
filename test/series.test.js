// test/series.test.js

const { test } = require("uvu");
const { equal, ok } = require("uvu/assert");
const { delay } = require("./helper");

const { series } = require("..");

const before = "before";
const after = "after";

test("series calls functions in sequence", async () => {
  const a = async (ctx) => delay(30).then(() => {
    ctx.howdeep.push(ctx.depth);
    ctx.trace.push(before)
  });
  const b = async (ctx) => {
    ctx.howdeep.push(ctx.depth);
    ctx.trace.push(after);
  };

  const sfn = series(a, b);

  const ctx = {
    trace: [], howdeep: [],
    beforeCall(ctx) {
      ctx.depth = typeof ctx.depth === "undefined" ? 0 : ctx.depth + 1
    },
    afterCall(ctx) { ctx.depth--; }
  };

  await sfn(ctx);
  equal(ctx.trace, [before, after]);
  equal(ctx.howdeep, [0, 0]);
});

test("series will not call second function when first fails", async () => {
  const a = async (ctx) => {
    ctx.trace.push(before)
    throw new Error();
  };
  const b = async (ctx) => {
    ctx.trace.push(after);
  };

  const sfn = series(a, b);

  const ctx = {
    trace: [],
  };

  try {
    await sfn(ctx);
    ok(false); // sfn should throw an exception
  } catch (err) {
    //
  }

  equal(ctx.trace, [before]);
});

test.run();
