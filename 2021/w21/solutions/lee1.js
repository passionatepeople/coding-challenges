const getPrimeFactors = (number) => {
  let res = [];
  let num2 = number;
  let currentPrime = 2;
  while (currentPrime === 2) {
    if (num2 % currentPrime === 0) {
      num2 = num2 / currentPrime;
      res.push(currentPrime);
    } else {
      currentPrime++;
    }
  }
  while (num2 >= 2) {
    if (num2 % currentPrime === 0) {
      num2 = num2 / currentPrime;
      res.push(currentPrime);
    } else {
      currentPrime += 2;
    }
  }
  return res;
};

module.exports = getPrimeFactors;
