const sortItOut = (number) => {
  let result = 0;
  for (let n = number, i = 0; n > 0; n = Math.floor(n / 10), i++) {
    const last = n % 10;
    if (last === 0) {
      result *= 10;
    } else {
      result += 10**i * last;
    }
  }

  return result;
};
module.exports = sortItOut;