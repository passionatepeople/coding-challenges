module.exports = (input) => {
  const TEN = 10;
  const ZERO = 0;
  let n = input,
    rev = ZERO,
    right,
    add = ZERO;

  while (n) {
    right = n % TEN;
    rev = rev * TEN + right;
    n = (n / TEN) | ZERO;
  }

  let diff = input - rev;
  if (!diff) return ZERO;

  while (diff) {
    right = diff % TEN;
    add += right;
    diff= (diff / TEN) | ZERO;
  }

  return add;
};
