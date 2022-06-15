const swappedDiff = (first, second) => {
  let one = 0;
  let two = 0;
  let multiplier1 = 1;
  let multiplier2 = 1;

  while (first > 9) {
    one += first % 10 * multiplier1;    
    multiplier1 *= 10;
    first = ~~(first / 10);
  }

  while (second > 9) {
    two += second % 10 * multiplier2;
    multiplier2 *= 10;
    second = ~~(second / 10);
  }

  one += second * multiplier1;
  two += first * multiplier2;

  return Math.abs(one - two);
};

module.exports = swappedDiff;