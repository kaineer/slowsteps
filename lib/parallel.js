// lib/parallel.js

const { createApplyContext } = require("./context");

const parallel = (...fns) => async (ctx = {}) => {
  const applyContext = createApplyContext(ctx);

  return Promise.all(
    fns.map(async (fn) => {
      await applyContext(fn);
    })
  );
};

module.exports = {
  parallel,
};
