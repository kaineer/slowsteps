// lib/series.js

const { incDepth } = require("./depth");

const series = (...fns) => async (ctx) => {
  for (const fn of fns) {
    await fn(incDepth(ctx));
  }
};

module.exports = {
  series,
};
