const getPrimeFactors = (number) => {
	const primeFactors = [];
  for (let factors = 2; factors <= number; factors++) {
    while (number % factors === 0) {
			primeFactors.push(factors);
			number /= factors;
		}
	}
	return primeFactors;
};

console.log(getPrimeFactors(40));

module.exports = getPrimeFactors;
