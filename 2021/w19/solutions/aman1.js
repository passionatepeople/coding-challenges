const primeSet = [false, false]
let primeSetLength = 2

// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes, awesome mathemagik (:
const sieveOfErathosthenes = (max) => {
  let n = max
  while (n >= primeSetLength ) {
    primeSet[n] = true
    n--
  }

  for (let i = 2, len = Math.sqrt(max); i < len; i++) {
    if (primeSet[i]) {
      for (let j = i + i; j < max; j += i) {
        primeSet[j] = false
      }
    }
  }
}

// some pre-generations
sieveOfErathosthenes(999)

const isPrime = (number) => {
  if (number >= primeSetLength) {
    const num = number + 1
    sieveOfErathosthenes (num)
    primeSetLength = num
  }
  return primeSet[number]
};

module.exports = number => isPrime(number) ? number * number - 17 : Math.floor(Math.sqrt(number + 15))
