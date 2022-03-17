// lib/depth.js

const { isNumber } = require("./types");

const incDepth = (ctx) => ({
  ...ctx,
  depth: isNumber(ctx.depth) ? ctx.depth + 1 : 0
});

module.exports = {
  incDepth
};
