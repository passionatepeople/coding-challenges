
const getPrimeFactors = (number) => {
  const factors = []
  let prime = 2
  while (true) {
    while(!(number % prime)) {
      factors.push(prime)
      number = number / prime
    }
    if (number === 1) {
      return factors
    }

    prime += prime%2?2:1
  }
};

module.exports = getPrimeFactors;
