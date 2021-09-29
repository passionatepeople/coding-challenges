const evaporate = (n) => {
  let c = 0;
  while (n > 9) {
    n = [...("" + n)].reduce((c, a) => c * a, 1);
    c++;
  }
  return c;
};

module.exports = evaporate;