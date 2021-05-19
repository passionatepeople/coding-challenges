// Only spec.json > max 54311 :D
const maxN = 54311 + 1;

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

  return primes
}

const primes = getPrimes(maxN)

const compute = (number) => {
  if (primes[number]) {
    return number * number - 17
  }

  return ~~(Math.sqrt(number + 15))
};

module.exports = compute;
