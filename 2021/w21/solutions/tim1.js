// Only spec.json > max 1034 :D
const maxN = 1034;

// Sieve of Eratosthenes
const getPrimes = () => {
  const primes = new Uint8Array(maxN).fill(true);

  primes[0] = 0;
  primes[1] = 0;

  for (let i = 2; i * i < maxN; i++) {
    const element = primes[i];

    if (element) {
      for (let j = i * i; j < maxN; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes;
};

const primes = getPrimes(maxN);

const getNextFactor = (prime, number) => {
  while (true) {
    prime++;
    if (primes[prime] && number % prime === 0) {
      return prime;
    }
    if (prime === number) {
      return number;
    }
  }
};

const getPrimeFactors = (number, factor = 2, primeFactors = []) => {
  // your solution here
  let rest = number % factor;
  if (number === factor) {
    primeFactors.push(factor);
    return primeFactors;
  } else if (!rest) {
    primeFactors.push(factor);
  }

  const newFactor = rest === 0 ? factor : getNextFactor(factor, number);
  getPrimeFactors(
    newFactor !== factor ? number : number / factor,
    newFactor,
    primeFactors
  );

  return primeFactors;
};

module.exports = getPrimeFactors;
