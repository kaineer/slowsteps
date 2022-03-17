// lib/desc.js

const randChars = (n) => {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(97 + Math.random() * 26);
  }

  return String.fromCharCode(...result);
}

const uniqueId = () => randChars(6);

const defaultFunctionId = (fn) => fn._id || fn.name;
const defaultFunctionDesc = (fn) => "Function: " + defaultFunctionId(fn);

const desc = (fn, obj) => {
  const id = fn.name || obj.id || uniqueId();
  const description = (
    obj.desc || obj.description || "Function " + id
  );

  fn._id = id;
  fn._description = description;
};

const getDesc = (fn) => {
  const id = defaultFunctionId(fn);
  const description = fn._description || defaultFunctionDesc(fn);

  return { id, description };
};

module.exports = {
  desc,
  getDesc,
};
