// lib/piper.js

const { isObject, isFunction } = require("./types");

const { series: _series } = require("./series");
const { parallel: _parallel } = require("./parallel");

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

const promisifyPiped = (piped) => (
  isPiped(piped) ? (
    new Promise((resolve) => piped.on("end", resolve))
  ) : piped
);

const promisifyObject = async (obj) => Promise
  .resolve(obj)
  .then(promisifyPiped);

const promisifyFunction = (fn) => {
  const rfn = (ctx) => promisifyObject(fn(ctx));
  rfn._name = fn.name
  return rfn;
}

const promisifySequence = (fns, wrapper = promisifyFunction) => fns
  .map(wrapper);

/**
 * Wrap function that takes array of functions so that
 * each function is wrapped into promisifyPiped()
 *
 * Hope it will help :)
 */
const wrapify = (fn) => (...fns) => fn(...promisifySequence(fns));

module.exports = {
  isPiped,
  series: wrapify(_series),
  parallel: wrapify(_parallel),
};
