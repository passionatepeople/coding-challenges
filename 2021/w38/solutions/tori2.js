const evaporate = (number) => {
  if (number < 10) return 0;
  let count = 0;

  const getValue = (number) => {
    count++;
    let product = 1;
    while (number) {
      product = product * (number % 10);
      number = Math.floor(number / 10);
    }
    return product < 10 ? count : getValue(product);
  };

  return getValue(number);
};

module.exports = evaporate;
