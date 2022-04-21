// lib/context.js

const noop = () => null;

const createApplyContext = (ctx) => {
  // Extract hooks from context
  const { beforeCall = noop } = ctx;
  const { afterCall = noop } = ctx;

  const applyContext = async (fn) => {
    const localCtx = {...ctx};

    beforeCall(localCtx, fn);

    let error = null;
    let result = null;

    try {
      result = await fn(localCtx);
    } catch (err) {
      error = err;
    }

    afterCall({...localCtx, error}, fn);

    if (error) {
      throw error;
    }

    return result;
  };

  return applyContext;
};

module.exports = {
  createApplyContext,
};
