// Incremental sieve of Eratosthenes (NB: can end up using a lot of memory)
const isPrime = [false, false];
const sieve = new Map();
let i = 2;
const sieveTo = (n) => {
  while (i <= n) {
    if (sieve.has(i)) {
      isPrime[i] = false;
      for (const j of sieve.get(i)) {
        const next = i + j;
        if (sieve.has(next)) {
          sieve.get(next).push(j);
        } else {
          sieve.set(next, [j]);
        }
      }
      sieve.delete(i);
    } else {
      isPrime[i] = true;
      sieve.set(i * i, [i]);
    }
    i += 1;
  }
};

const compute = (n) => {
  sieveTo(n);
  return isPrime[n] ? n * n - 17 : ((n + 15) ** 0.5) | 0;
};

module.exports = compute;