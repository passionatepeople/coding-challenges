module.exports = n => {
  if (n < 10) return true;
  if (n % 10 == 0) return false;
  let r = n % 10;
  for (; n > 9; r = r * 10 + n % 10) {
    if (n == r) return true;
    n = ~~(n / 10);
    if (n == r) return true;
    if (n < r) return false;
  }
  return false;
};