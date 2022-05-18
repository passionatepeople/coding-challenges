const bigFive = (number) => {
  let len = number.length,
    n = len - 5,
    window = number.substr(n, 5),
    max = window;

  while (n--) {
    if (number[n] < max[0]) continue;
    window = number.substr(n, 5);
    if (max < window) {
      max = window;
    }
  }

  return +max;
};

module.exports = bigFive;