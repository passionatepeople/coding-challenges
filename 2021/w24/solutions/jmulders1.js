const findBase = (num1, num2, product) => {
  for (let r = 2; r < 37; r++) {
    if ((parseInt(num1, r) * parseInt(num2, r)) === parseInt(product, r)) {
      return r;
    }
  }

  throw `Can't find a base to make this [${num1} * ${num2} = ${product}] work`;
};

module.exports = findBase;