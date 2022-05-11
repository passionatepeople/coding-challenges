const allTogether = number => {
  let sum = 0;
  while (number) {
    digit = number % 10;
    sum += digit;
    number = (number - digit) * 0.1;
  }
  return sum;
};

module.exports = allTogether;