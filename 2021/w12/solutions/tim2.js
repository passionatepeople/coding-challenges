module.exports = (input) => {
  let n = input,
    rev = 0,
    right,
    add = 0;

  while (n) {
    right = n % 10;
    rev = rev * 10 + right;
    n = (n / 10) | 0;
  }

  const diff = input - rev;
  if (!diff) return 0;

  n = diff;
  while (n) {
    right = n % 10;
    add += right;
    n = (n / 10) | 0;
  }

  return add;
};
