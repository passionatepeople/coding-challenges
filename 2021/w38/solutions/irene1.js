const evaporate = (number) => {
  if (number < 10) return 0;

  let r = 1;
  for (let n = number; n > 0; n = n / 10 >> 0) {
    r *= n % 10;
  }

  return 1 + evaporate(r);
};

module.exports = evaporate;