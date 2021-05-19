const cache = {};

const primeSum = number => (number ** 2) - 17;
const nonPrimeSum = number => Math.floor(Math.sqrt(number + 15));

const isPrimeNumber = (number) => {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

module.exports = (number) => {
  if (cache[number]) {
    return cache[number](number);
  }

  if (isPrimeNumber(number)) {
    cache[number] = primeSum;
    return primeSum(number);
  }

  cache[number] = nonPrimeSum;
  return nonPrimeSum(number);
};