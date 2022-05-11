module.exports = number => {
  let total = 0;
  let n = number

  while (n > 0) total += n % 10, n = n / 10 | 0;

  return total;
};