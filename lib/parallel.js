// lib/parallel.js

const { incDepth: _incDepth } = require("./depth");
const noop = () => null;

const parallel = (...fns) => async (ctx) => {
  const {
    beforeCall = noop,
    incDepth = _incDepth,
    afterCall = noop,
  } = ctx;

  return Promise.all(
    fns.map(async (fn) => {
      beforeCall(fn, ctx);
      return Promise
        .resolve(fn(incDepth(ctx)))
        .then(() => afterCall(fn, ctx));
    })
  );
};

module.exports = {
  parallel,
};
