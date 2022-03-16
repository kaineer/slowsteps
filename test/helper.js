// test/helper.js

const delay = async (timeMs) => new Promise((resolve) => (
  setTimeout(resolve, timeMs)
));

const value = async (result) => Promise.resolve(result);

const piped = () => {
  const obj = {
    pipe() {
      return obj;
    },
    on() {},
    end() {},
  };

  return obj;
};

module.exports = {
  delay,
  piped,
  value,
};
