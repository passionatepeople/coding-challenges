module.exports = (f) => {
  let gcd = (a, b) => {
      if (b === 0) {
        return a;
      }
      return gcd(b, a % b);
    },
    d;
  d = gcd(f[0], f[1]);
  return [f[0] / d, f[1] / d];
};