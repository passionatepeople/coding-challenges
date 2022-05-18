const charCodeAt = String.prototype.charCodeAt;

const bigFive = (number) => {
  let index = number.length,
    max = 0,
    num =
      charCodeAt.call(number, --index) +
      charCodeAt.call(number, --index) * 10 +
      charCodeAt.call(number, --index) * 100 +
      charCodeAt.call(number, --index) * 1000 -
      53328;

  while (index > 0) {
    num += charCodeAt.call(number, --index) * 10000 - 480000;

    if (num > max) {
      max = num;
    }

    num = (num / 10) << 0;
  }

  return max;
};

module.exports = bigFive;