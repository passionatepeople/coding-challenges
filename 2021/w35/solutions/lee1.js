const sortItOut = (number) => {
  let zerosRemoved = 0;
  let result = 0;
  let carry = 0;
  let length = ~~Math.log10(number) + 1;

  while (length > 0) {
    let n = ~~((number - carry) / 10 ** (length - 1));

    carry += n * 10 ** (length - 1);
    if (n / 1) {
      result += n * 10 ** (length - 1 + zerosRemoved);
    } else {
      zerosRemoved++;
    }

    length--;
  }

  return result;
};

module.exports = sortItOut;
