const getPrimeFactors = (number) => {
  const a = [];
  let b = 2;

  while (number >= 2) {
    if (number % b == 0) {
      a.push(b);
      number = number / b;
    } else {
      b++;
    }
  }
  return a;
};

module.exports = getPrimeFactors;
