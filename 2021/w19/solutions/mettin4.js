const cache = {};

const primeSum = number => (number ** 2) - 17;
const nonPrimeSum = number => ~~((number + 15) ** .5);

const isPrimeNumber = (number) => {
    if (number <= 1 || number % 2 === 0) {
        return false;
    }

    const limit = ~~(number ** .5) + 1;
    for (var i = 2; i < limit; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number !== 1;
}

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