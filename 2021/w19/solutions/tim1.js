/**
 * Returns true if the number is prime
 */
const isPrime = (number) => {
  if (number % 1 || number < 2) return false;
  if (number == leastFactor(number)) return true;
  return false;
};

/**
 * Find the smallest prime that divides number
 * Early return if dividable by 2,3 or 5;
 *
 * Least common multiple of 2,3 and 5 is 30
 */
const leastFactor = (number) => {
  if (number % 2 == 0) return 2;
  if (number % 3 == 0) return 3;
  if (number % 5 == 0) return 5;
  var m = Math.sqrt(number);
  for (var i = 7; i <= m; i += 30) {
    if (number % i == 0) return i;
    if (number % (i + 4) == 0) return i + 4;
    if (number % (i + 6) == 0) return i + 6;
    if (number % (i + 10) == 0) return i + 10;
    if (number % (i + 12) == 0) return i + 12;
    if (number % (i + 16) == 0) return i + 16;
    if (number % (i + 22) == 0) return i + 22;
    if (number % (i + 24) == 0) return i + 24;
  }
  return number;
};

const compute = (number) => {
  // your solution here
  return isPrime(number) ? number * number - 17 : ~~Math.sqrt(number + 15);
};

module.exports = compute;
