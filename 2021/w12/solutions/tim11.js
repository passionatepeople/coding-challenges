const TEN = 10;

module.exports = (input) => {
  let n = input,
    rev = 0,
    right = 0,
    add = 0;

  while (n) {
    right = n % TEN;
    rev = rev * TEN + right;
    n = (n / TEN) | 0;
  }

  let diff = input - rev;
  if (!diff) return 0;

  while (diff) {
    right = diff % TEN;
    add += right;
    diff= (diff / TEN) | 0;
  }

  return add;
};
