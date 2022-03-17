// lib/types.js

/**
 * Check if parameter is an object
 *
 * @param {any} obj
 * @return {boolean}
 */
const isObject = (obj) => obj && typeof obj === "object";

/**
 * Check if parameter is a function
 *
 * @param {any} fn
 * @return {boolean}
 */
const isFunction = (fn) => typeof fn === "function";

const isNumber = (obj) => typeof obj === "number";

module.exports = {
  isFunction,
  isNumber,
  isObject,
};
