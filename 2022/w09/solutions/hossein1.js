var push = Array.prototype.push;
var slice = String.prototype.slice;

const goAround = (str) => {
  let result = [],
    length = str.length,
    prev = str[0];

  for (let i = 0; i < length; i++) {
    str = slice.call(str, 1);
    push.call(result, str + prev);
    prev += str[0];
  }

  return result;
};

module.exports = goAround;
