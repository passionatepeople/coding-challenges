const findBase = (num1, num2, product) => {
  let base = 2;
  while (
    parseInt(num1, base) * parseInt(num2, base) !==
    parseInt(product, base)
  ) {
    base++;
  }
  return base;
};

module.exports = findBase;
