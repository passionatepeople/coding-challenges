const sortItOut = (number) => {
  let digits;
  let zeroCount = 0;
  while (number > 0) {
    const n = number % 10;
    if(n === 0) {
      zeroCount++;
    } else {
      digits = digits ? [n] + digits - 0 : n;
    }

    number = Math.trunc(number / 10);
  }

  return digits * 10 ** zeroCount;
};

module.exports = sortItOut;
