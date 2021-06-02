const getPrimeFactors = (number) => {
	const primeFactors = [];
	for (let factors = 2; factors <= number; factors++) {
		while (factors && number % factors === 0) {
			primeFactors.push(factors);
			number /= factors;
		}
  }
  return primeFactors;
};

module.exports = getPrimeFactors;