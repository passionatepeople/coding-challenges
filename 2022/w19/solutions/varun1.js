const slice = String.prototype.slice
const bigFive = (number) => {
  let result = slice.call(number, 0, 5)
  let len = number.length - 4
  let i = 1;
  for (; i < len; i++) {
    const out = slice.call(number, i, i + 5)
    if (out > result) {
      result = out
    }
  }

  return +result;
};

module.exports = bigFive;