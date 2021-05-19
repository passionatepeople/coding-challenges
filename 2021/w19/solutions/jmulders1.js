const isPrime = (n) => {
  if (n < 2 || (n % 2 && n % 3 && n % 5) === 0) {
    return false;
  }

  let increments = [0, 4, 6, 10, 12, 16, 22, 24];

  for (let i = 7; i <= Math.sqrt(n); i += 30) {
    for (let j = 0; j < increments.length; j++) {
      if (n % (i + increments[j]) === 0) {
        return false;
      }
    }
  }

  return true;
};

const compute = (n) => {
  if (isPrime(n)) {
    return n * n - 17;
  }

  return Math.sqrt(n + 15) | 0;
};

module.exports = compute;