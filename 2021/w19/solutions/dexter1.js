const primes = new Set([3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113])
let maxPrime = 113
 
function isPrime (n) {
  // isPrimeMR tests if n is prime using the given number of rounds
  // of the Miller-Rabin test with small prime bases: 2, 3, 5, etc.  
  if (n < 3) return n === 2
  if (n % 2 === 0) return false
  if (n < maxPrime) return primes.has(n)

  // Calculate primes up to n
  for (let i=maxPrime + 2; i<=n; i+=2) {
    prime: {
      for (p of primes) {
        if (i % p === 0) {
          break prime
        }
      }
      primes.add(maxPrime = i)
    }
  }
  return primes.has(n)
 }


const compute = (number) => {
  return isPrime(number) ? (number*number - 17) : ~~Math.sqrt(number + 15);
};

module.exports = compute;
