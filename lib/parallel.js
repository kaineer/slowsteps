// lib/parallel.js

const parallel = (...fns) => async (ctx) => Promise.all(
  fns.map((fn) => Promise.resolve(fn(ctx)))
);

module.exports = {
  parallel,
};
