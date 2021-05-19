/**
 * Returns true if the n is prime
 */
 const isPrime = (n) => {
  if (n % 1 || n < 2) return false;
  if (n == leastFactor(n)) return true;
  return false;
};

/**
 * Find the smallest prime that divides n
 * Early return if dividable by 2,3 or 5;
 *
 * Least common multiple of 2,3 and 5 is 30
 */
const leastFactor = (n) => {
  if (n % 2 == 0) return 2;
  if (n % 3 == 0) return 3;
  if (n % 5 == 0) return 5;
  var m = Math.sqrt(n);
  for (var i = 7; i <= m; i += 30) {
    if (n % i == 0) return i;
    if (n % (i + 4) == 0) return i + 4;
    if (n % (i + 6) == 0) return i + 6;
    if (n % (i + 10) == 0) return i + 10;
    if (n % (i + 12) == 0) return i + 12;
    if (n % (i + 16) == 0) return i + 16;
    if (n % (i + 22) == 0) return i + 22;
    if (n % (i + 24) == 0) return i + 24;
  }
  return n;
};

// Calculate the prime numbers up to 54311
const primeNumbers = [];
for (let index = 0; index < 54312; index++) {
  if(isPrime(index)) {
    primeNumbers[index] = true;
  }
}

module.exports = n => primeNumbers[n] !== undefined ? n * n - 17 : ~~Math.sqrt(n + 15)
