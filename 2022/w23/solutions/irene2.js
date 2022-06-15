const swappedDiff = (first, second) => {
  let digit1 = first;
  let digit2 = second;

  let multiplier1 = 1;
  let multiplier2 = 1;

  while (digit1 > 9) {
    multiplier1 *= 10;
    digit1 = ~~(digit1 / 10);
  }

  while (digit2 > 9) {
    multiplier2 *= 10;
    digit2 = ~~(digit2 / 10);
  }

  const swap = digit1 - digit2;
  const one = first - swap * multiplier1;
  const two = second + swap * multiplier2;
  return Math.abs(one - two);
};

module.exports = swappedDiff;