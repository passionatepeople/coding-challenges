module.exports = n => {
  if (n < 10) return true;

  if (n % 10 === 0) return false;

  let res = 0;
  while (n >= 10) {
    res = res * 10 + n % 10;

    if (n === res) return true;

    n = ~~(n / 10);

    if (n === res) return true;
    if (n < res) return false;
  }

  return false;
};