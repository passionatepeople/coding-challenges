const simplify = (fraction) => {
  const [numerator, denominator] = fraction;
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const divisor = gcd(numerator, denominator);
  return [numerator / divisor, denominator / divisor];
};

module.exports = simplify;