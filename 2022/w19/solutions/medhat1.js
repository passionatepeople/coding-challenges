const bigFive = (number) => {
  let len = number.length,
    window = number.slice(len - 5),
    n = len - 5,
    max = window;

  while (n--) {
    window = number.slice(n, n + 5);
    if (max < window) {
      max = window;
    }
  }

  return +max;
};

module.exports = bigFive;