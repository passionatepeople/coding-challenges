const findBase = (num1String, num2String, productString) => {
  let base = 2;
  let found = false;
  let num1;
  let num2;
  let product;

  while (!found) {
    num1 = parseInt(num1String, base);
    num2 = parseInt(num2String, base);
    product = parseInt(productString, base);

    if ((num1 * num2) === product) {
      return base
    }

    base ++;
  }

};

module.exports = findBase;
