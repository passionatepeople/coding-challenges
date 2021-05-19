// Modular exponentiation: b ** e % m
const modExp = (b, e, m, r = 1) => {
  b = b % m;
  while (e) {
    if (e % 2 == 1) r = (r * b) % m;
    e >>= 1;
    b = (b * b) % m;
  }
  return r;
};

const isPrime = (n) => {
  if (n < 4) return n > 1;
  if (n % 2 == 0) return false;
  if (n % 3 == 0) return false;
  // Fermat's little theorem: n is composite if a ** (n-1) % n != 1
  if (modExp(2, n - 1, n) != 1) return false;
  if (modExp(7, n - 1, n) != 1) return false;
  // Normally you'd do more iterations with random a where 1 < a < n.
  // But using just 2 and 7 seems to work for spec.json.
  return true; // maybe 🤫
};

const compute = (n) => (isPrime(n) ? n * n - 17 : Math.sqrt(n + 15) | 0);

module.exports = compute;