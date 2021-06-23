const findBase = (num1, num2, product) => {
  let base = (Math.max(...(num1+num2+product).split('')) || 10) + 1
  while (parseInt(num1, base) * parseInt(num2, base) !== parseInt(product, base)) {
    base ++
  } 
  return base
};

module.exports = findBase;
