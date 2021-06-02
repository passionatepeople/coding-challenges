const highestIntegerInSpec = 9812382;

function * primes () {
  let n = 2
  while (true) {
    if (allPrimes[n]) {
      yield n
    }
    n++
  }
}

// YES I STOLE THIS FROM PP. SUE ME
const sieve = new Array(highestIntegerInSpec + 1).fill(true);
const allPrimes = (() => {
  sieve.forEach(i => {
    if (!sieve[i]) return
    for (let j = i * i; j <= highestIntegerInSpec; j += i) sieve[j] = false;
  })
  sieve[1] = false;
  return sieve;
})();

module.exports = primeFactory = (n, result = []) => {
  for (const p of primes()) {
    if (n === p) {
      result.push(p)
      return result
    }
    if (n % p === 0) {
      result.push(p)
      return primeFactory(n / p, result)
    }
  }
}
