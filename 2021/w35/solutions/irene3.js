const sortItOut = (number) => {
  let result = 0;
  let factor = 1;

  for (let n = number, i = 0, multiplication = 1; n > 0; n = Math.floor(n / 10), i++) {
    const last = n % 10;
    if (last > 0) {
      result = last * multiplication + result;
      multiplication *= 10
    } else {
      factor *= 10;
    }
  }

  return result * factor;
};

module.exports = sortItOut;