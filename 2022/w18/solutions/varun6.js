function sum(number) {
  let total = number % 10;
  let n = number / 10 | 0

  for (; n > 0;)
    total += n % 10, n = n / 10 | 0;
  return total;
};

module.exports = sum;