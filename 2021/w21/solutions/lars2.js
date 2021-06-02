// Sorry ʕノ•ᴥ•ʔノ ︵ ┻━┻
const primes = new Set([2,3,5,7,11,13,17,19,23,29,31,37,43,47,53,59,61,67,71,73,89,107,109,113,149,151,157,163,167,179,199,227,229,251,277,443,463,499,557,571,577,587,593,599,643,709,751,811,827,859,971,1033,1091,1153,1229,1289,1531,1601,1613,1619,1997,2137,2503,2741,2797,2843,2851,2861,2963,3491,3761,4127,4201,4801,5101,5801,5849,6121,6529,6581,7103,7121,11329,12421,14683,14923,15173,15823,16811,18397,30449,36781,40897,46523,55207,55997,56333,56393,59159,72161,72763,74713,87179,106627,121001,189407,220151,225161,229681,241817,242057,249397,304049,475283,733141,1048361,1125857,1200083,1224473,1306157,2381339,2424553,3035969,3583241,3859511,4878593,5184593,8725999,9120971,9159061])

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
  if (primes.has(number)) {
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
