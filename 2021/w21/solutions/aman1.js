const sieveOfAtkin = limit => {
  let limitSqrt = Math.sqrt(limit), sieve = [], n, x
  sieve[2] = true
  sieve[3] = true

  for (let x = 1; x <= limitSqrt; x++) {
    let xx = x*x
    for (let y = 1; y <= limitSqrt; y++) {
      let yy = y*y
      if (xx + yy >= limit) {
        break
      }

      n = (4 * xx) + (yy)
      if (n <= limit && (n % 12 === 1 || n % 12 === 5)) {
        sieve[n] = !sieve[n]
      }

      n = (3 * xx) + (yy)
      if (n <= limit && (n % 12 === 7)) {
        sieve[n] = !sieve[n]
      }

      n = (3 * xx) - (yy)
      if (x > y && n <= limit && (n % 12 === 11)) {
        sieve[n] = !sieve[n]
      }
    }
  }

  for (n = 5; n <= limitSqrt; n++) {
    if (sieve[n]) {
      x = n * n
      for (let i = x; i <= limit; i += x) {
        sieve[i] = false
      }
    }
  }

  return sieve.reduce((acc, n, i) => (n  && acc.push(i), acc), [])
}

let primeNumbers = [];

module.exports = number => {
  const factors = []
  if (primeNumbers.length === 0) primeNumbers = sieveOfAtkin(1033)

  const n = primeNumbers.length

  for (let i = 0;;) {
    let p = primeNumbers[i]

    if ((number % p) !== 0) {
      if (i >= n) break
      i++
    } else {
      factors.push(p)
      number /= p
      if (number < p) break
    }
  }

  if (number >= 2) factors.push(number)

  return factors
};
