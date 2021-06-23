const findBase = (num1, num2, product) => {
  let base = 2;
  while (num1 * num2 !== product) {
    num1 <<= 1;
    num2 <<= 1;
    product <<= 1;
    base++;
  }
  return base;
};

module.exports = findBase;
