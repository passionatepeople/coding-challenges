let ಠ_ಠ = 54311;

const isPrime = (() => {
  // Sieve of Eratosthenes
  const max = Math.ceil(Math.sqrt(ಠ_ಠ));
  const sieve = new Array(ಠ_ಠ + 1).fill(true);
  for (let i = 2; i <= max; i++) {
    if (!sieve[i]) continue;
    for (let j = i * i; j <= ಠ_ಠ; j += i) sieve[j] = false;
  }
  sieve[1] = false;
  return sieve;
})();

const compute = (n) => isPrime[n] ? n * n - 17 : Math.sqrt(n + 15) | 0;

module.exports = compute;