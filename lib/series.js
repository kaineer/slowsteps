// lib/series.js

const { createApplyContext } = require("./context");

const series = (...fns) => async (ctx = {}) => {
  const applyContext = createApplyContext(ctx);

  for (const fn of fns) {
    await applyContext(fn);
  }
};

module.exports = {
  series,
};
