const allTogether = (number) => {
  let n = number;
  let sum = 0;
  while (n) {
    sum += n % 10;
    n = ~~(n / 10);
  }

  return sum;
};

module.exports = allTogether;