const evaporate = (number) => {
  let count = 0;

  const getDigits = (number) => {
    const digits = [];
    while (number) {
      digits.push(number % 10);
      number = Math.floor(number / 10);
    }
    return digits;
  };

  const getProduct = (digits) => {
    let product = digits[0];
    for (let i = 1; i < digits.length; i++) {
      product *= digits[i];
    }
    return product;
  };

  const getValue = (number) => {
    const digits = getDigits(number);
    if (digits.length < 2) return count;
    count++;
    return getValue(getProduct(digits));
  };

  return getValue(number);
};

module.exports = evaporate;
