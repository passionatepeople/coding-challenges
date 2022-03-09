var slice = String.prototype.slice;

const goAround = (str) => {
  let length = str.length,
    result = Array(length),
    double = str + str,
    j = length + 1,
    i = 0;

  while (i < length) {
    result[i] = slice.call(double, ++i, j++);
  }

  return result;
};

module.exports = goAround;
