function gcd(a, b) {
  while (true) {
    a %= b;
    if (a === 0) {
      return b;
    }
    b %= a;
    if (b === 0) {
      return a;
    }
  }
}

const simplify = (fraction) => {
  const [a, b] = fraction;
  const c = b > a ? gcd(b, a) : gcd(a, b);

  return [a / c, b / c];
};

module.exports = simplify;