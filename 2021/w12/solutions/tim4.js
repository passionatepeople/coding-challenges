module.exports = (input) => {
  let n = input,
    rev = 0,
    right,
    add = 0,
    TEN = 10;

  while (n) {
    right = n % TEN;
    rev = rev * TEN + right;
    n = (n / TEN) | 0;
  }

  const diff = input - rev;
  if (!diff) return 0;

  n = diff;
  while (n) {
    right = n % TEN;
    add += right;
    n = (n / TEN) | 0;
  }

  return add;
};