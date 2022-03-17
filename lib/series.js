// lib/series.js

const series = (...fns) => async (ctx) => {
  for (const fn of fns) {
    await fn(ctx);
  }
};

module.exports = {
  series,
};
