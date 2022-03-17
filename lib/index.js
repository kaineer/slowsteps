//

const { src, dest } = require("vinyl-fs");
const { series, parallel } = require("./piper");

module.exports = {
  series,
  parallel,
  src,
  dest,
};
