module.exports = n => {
  let res = 0, x = n;
  while (x > 0) {
    res = res * 10 + x % 10;
    x = x / 10 | 0;
  }
  return res == n;
};