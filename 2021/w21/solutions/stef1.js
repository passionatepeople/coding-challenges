const getPrimeFactors = number => {
  const primeFactors = []

  for (let i = 2; i <= number; i += 1) {
    while (number % i === 0) {
      primeFactors.push(i)

      number /= i
    }
  }

  return primeFactors
}

module.exports = getPrimeFactors
