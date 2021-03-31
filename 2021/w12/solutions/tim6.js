const TEN = 10;
const ZERO = 0;

module.exports = (input) => {
  let n = input,
    rev = ZERO,
    right,
    add = ZERO;

  while (n) {
    right = n % TEN;
    rev = rev * TEN + right;
    n = (n / TEN) | ZERO;
  }

  const diff = input - rev;
  if (!diff) return ZERO;

  n = diff;
  while (n) {
    right = n % TEN;
    add += right;
    n = (n / TEN) | ZERO;
  }

  return add;
};