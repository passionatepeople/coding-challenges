const evaporate = (n) => {
  if (n < 10) return 0;
  let c = 0;
  while (n > 9) {
    let m = 1;
    let a = [...("" + n)];
    for (let i = 0; i < a.length; i++) {
      if (a[i] === "0") return c + 1;
      m = m * a[i];
    }
    n = m;
    c++;
  }
  return c;
};

module.exports = evaporate;
