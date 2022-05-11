const allTogether = (number) => {
  let sum = 0;

  while (number > 9) {
    sum += number % 10;
    number = Math.trunc(number / 10);
  }

  return sum + number;
};

module.exports = allTogether;