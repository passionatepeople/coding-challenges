// Naive primality test using wheel factorization (see https://en.wikipedia.org/wiki/Wheel_factorization)
// with basis [2, 3, 5] and coprimes [7, 11, 13, 17, 19, 23, 29, 31]
const isPrime = (n) => {
  if (n < 4) return n > 1;
  if (n % 2 == 0) return false;
  if (n % 3 == 0) return false;
  if (n % 5 == 0) return n == 5;
  const max = Math.sqrt(n);
  for (let i = 0; i <= max; i += 30) {
    if (n % (i + 7) == 0) return n == i + 7;
    if (n % (i + 11) == 0) return n == i + 11;
    if (n % (i + 13) == 0) return n == i + 13;
    if (n % (i + 17) == 0) return n == i + 17;
    if (n % (i + 19) == 0) return n == i + 19;
    if (n % (i + 23) == 0) return n == i + 23;
    if (n % (i + 29) == 0) return n == i + 29;
    if (n % (i + 31) == 0) return n == i + 31;
  }
  return true;
};

const compute = (n) => (isPrime(n) ? n * n - 17 : Math.sqrt(n + 15) | 0);

module.exports = compute;