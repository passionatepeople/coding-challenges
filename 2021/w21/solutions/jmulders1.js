const getPrimeFactors = (number, result = []) => {
  let factor = 2;

  if (number % factor) {
    let max = Math.sqrt(number);
    factor = 3;

    while (number % factor) {
      if (factor > max) {
        factor = number;
        break;
      }

      factor += 2;
    }
  }

  result.push(factor);

  if (factor !== number) {
    return getPrimeFactors(number / factor, result);
  }

  return result;
};

module.exports = getPrimeFactors;