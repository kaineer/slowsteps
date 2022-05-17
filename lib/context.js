// lib/context.js

const { noop } = require("./functions");

const asyncTry = async (fn, ctx) => {
  let result = null;
  let error = null;

  try {
    result = await fn(ctx);
  } catch (err) {
    error = err;
  }

  return { result, error };
};

const processResult = ({ result, error }) => {
  if (error) {
    throw error;
  }

  return result;
};

const createApplyContext = (ctx) => {
  const { beforeCall = noop, afterCall = noop } = ctx;

  return async (fn) => { /* applyContext(fn) */
    const localCtx = {...ctx, fn};

    beforeCall(localCtx);

    const result = await asyncTry(fn, localCtx);

    afterCall({...localCtx, ...result});

    return processResult(result);
  };
};

module.exports = {
  createApplyContext,
};
