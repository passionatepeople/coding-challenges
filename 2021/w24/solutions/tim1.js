const MAX_BASE = 36
const findBase = (num1, num2, product) => {
  for (let i = 2; i <= MAX_BASE; i++) {
    const isValid = parseInt(product,i) / parseInt(num1, i) === parseInt(num2,i);
    if(isValid) {
      return i;
     }
  }
};

module.exports = findBase;
