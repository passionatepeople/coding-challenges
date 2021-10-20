const a = (b, c) => (c * b * (b + 1)) / 2;

const addUpWithoutTens = (n) => {
  return a(n, 1) - a(~~(n / 10), 10);
};

module.exports = addUpWithoutTens;
