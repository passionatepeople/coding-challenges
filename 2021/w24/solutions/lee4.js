const findBase = (num1, num2, product) => {
  base = 2;
  while ((num1 * num2) & product) {
    num1 <<= 1;
    num2 <<= 1;
    product <<= 1;
    base += 1;
  }
  return base;
};

module.exports = findBase;
