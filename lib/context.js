// lib/context.js

const noop = () => null;

const createApplyContext = (ctx) => {
  const { beforeCall = noop } = ctx;
  const { afterCall = noop } = ctx;

  const applyContext = async (fn) => {
    const localCtx = {...ctx};
    beforeCall(localCtx, fn);
    const result = await fn(localCtx);
    afterCall(localCtx, fn);
    return result;
  };

  return applyContext;
};

module.exports = {
  createApplyContext,
};
