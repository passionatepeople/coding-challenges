const getPrimeFactors = (number, result = []) => {
  const sqrt = Math.sqrt(number);
  let factor = 2;

  // Number is uneven. Try to find an uneven divisible factor
  if (number % factor > 0) {
    factor = 3;
    while (number % factor > 0 && factor < sqrt) {
      factor += 2;
    }
  }

  // Number is prime
  if (factor > sqrt) {
    result.push(number)
    return result;
  }

  result.push(factor);

  return getPrimeFactors(number / factor, result);
};

module.exports = getPrimeFactors;