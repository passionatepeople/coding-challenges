const allTogether = (number) => {
  let sum = number % 10;

  while (number > 9) {
    number = ~~(number / 10);
    sum += number % 10;
  }

  return sum;
};

module.exports = allTogether;