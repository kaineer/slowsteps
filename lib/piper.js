// lib/piper.js

const { isObject, isFunction } = require("./types");

/**
 * Check if parameter is a vinylfs return value
 *
 * @param {any} piped
 * @return {boolean}
 */
const isPiped = (piped) => !!(
  isObject(piped) &&
    isFunction(piped.on) &&
    isFunction(piped.pipe)
);

module.exports = {
  isPiped
};
