// lib/parallel.js

const { incDepth } = require("./depth");

const parallel = (...fns) => async (ctx) => Promise.all(
  fns.map((fn) => Promise.resolve(fn(incDepth(ctx))))
);

module.exports = {
  parallel,
};
