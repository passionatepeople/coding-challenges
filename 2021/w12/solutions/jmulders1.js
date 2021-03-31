const reverse = (number) => {
  let result = 0;

  while (number !== 0) {
    result = result * 10 + (number % 10);
    number = (number / 10) >> 0;
  }

  return result;
};

const sumNumbers = (number) => {
  let result = 0;

  number = number < 0 ? -number : number;

  while (number) {
    result += number % 10;
    number = (number / 10) >> 0;
  }

  return result;
};

module.exports = (number) => {
  const subtractReverse = number - reverse(number);

  return (subtractReverse < 0 ? -1 : 1) * sumNumbers(subtractReverse);
};