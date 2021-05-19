const primeCache = new Map();
const notPrimeCache = new Map();

const getIsPrime = (num) => {
  if (num === 1) {
    return false;
  }

  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const compute = (number) => {
  const isNotPrimeInCache = notPrimeCache.has(number);
  if (isNotPrimeInCache) {
    return notPrimeCache.get(number);
  }

  const isPrimeInCache = primeCache.has(number);
  if (isPrimeInCache) {
    return primeCache.get(number);
  }

  const isPrime = getIsPrime(number);

  if (isPrime) {
    const square = number * number - 17;
    primeCache.set(number, square);
    return square;
  }

  const root = parseInt(Math.sqrt(number + 15));
  notPrimeCache.set(number, root);
  return root;
};

module.exports = compute;