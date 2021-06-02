const isPrime = (number, returnIndex = false) => {
  for (let i = 2; i <= Math.round(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      if (returnIndex) {
        return i
      }

      return false;
    } 
  }
  return true
}

// Recursive method to check for all primes
const findPrimeFactors = (number, factors = []) => {
  if (isPrime(number)) {
    factors.push(number);
    return factors;
  }

  // Check for even number
  if (number % 2 === 0) {
    factors.push(2)
    findPrimeFactors(number / 2, factors)
  } else {
    // Validate odd number if that is already a prime number
    const primeIndex = isPrime(number, true)
    if (primeIndex >= 2) {
      factors.push(primeIndex)
    }
    findPrimeFactors(number / primeIndex, factors)
  }
};

// Allow for recursive function to fill the result array
const getPrimeFactors = number => {
  const result = []

  findPrimeFactors(number, result)

  return result
}

module.exports = getPrimeFactors;
