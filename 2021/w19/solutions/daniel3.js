const primeCache = new Map()
const notPrimeCache = new Map()

const getIsPrime = n => {
  if (n < 2) {
    return false
  }
  if (n % 2 === 0) {
    return n == 2
  }
  let k = 3
  while (k * k <= n) {
    if (n % k == 0) {
      return false
    }
    k += 2
  }
  return true
}

const compute = number => {
  const isNotPrimeInCache = notPrimeCache.has(number)
  if (isNotPrimeInCache) {
    return notPrimeCache.get(number)
  }

  const isPrimeInCache = primeCache.has(number)
  if (isPrimeInCache) {
    return primeCache.get(number)
  }

  const isPrime = getIsPrime(number)

  if (!isPrime) {
    const root = ~~Math.sqrt(number + 15)
    notPrimeCache.set(number, root)
    return root
  }

  const square = Math.pow(number, 2) - 17
  primeCache.set(number, square)
  return square
}

module.exports = compute
