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

module.exports = (a, b) => {
  return b > a ? gcd(b, a) : gcd(a, b);
};
