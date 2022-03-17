// lib/series.js

const { incDepth: _incDepth } = require("./depth");
const noop = () => null;

const series = (...fns) => async (ctx) => {
  const {
    beforeCall = noop,
    incDepth = _incDepth,
    afterCall = noop,
  } = ctx;

  for (const fn of fns) {
    beforeCall(fn, ctx);
    await Promise
      .resolve(fn(incDepth(ctx)))
      .then(() => afterCall(fn, ctx));
  }
};

module.exports = {
  series,
};
