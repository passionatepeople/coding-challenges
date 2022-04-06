const replace = String.prototype.replace;

const braceful = (input) => {
  let v = input;
  let cache = "";
  while (cache !== v && v.length > 0) {
    cache = v;
    v = replace.call(v, /({}|\[\]|\(\))/g, "");
  }
  return input.length > 0 && v.length === 0;
};

module.exports = braceful;
