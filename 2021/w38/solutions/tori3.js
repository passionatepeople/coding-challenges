const evaporate = (number) => {
  if (number < 10) return 0;
  let count = 0;

  const getValue = (number) => {
    count++;
    const product = [...(number + "")].reduce((p, n) => (p *= +n), 1);
    return product < 10 ? count : getValue(product);
  };

  return getValue(number);
};

module.exports = evaporate;