const primes = new Set([2,3])
let max = 3
const generate = (n) => {
  for (let i = max + 2; i <= n; i += 2) {
    check_prime: {
      for (let p of primes) {
        if (i % p == 0) {
          break check_prime;
        }
      }
      primes.add((max = i));
    }
  }
}
generate(5000)
const isPrime = n => {
  if (n % 2 == 0 || n < max) return primes.has(n);
  generate(n)
  return primes.has(n);
};
module.exports = n => (isPrime(n) ? n * n - 17 : ~~Math.sqrt(n + 15));
