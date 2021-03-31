const reverse = (number) => {
  let result = 0;

  for (let i = number; i !== 0; i = (i / 10) >> 0) {
    result = result * 10 + (i % 10);
  }

  return result;
};

const sumNumbers = (number) => {
  let result = 0;

  for (let i = number < 0 ? -number : number; i !== 0; i = (i / 10) >> 0) {
    result += i % 10;
  }

  return result;
};

module.exports = (number) => {
  const subtractReverse = number - reverse(number);

  return (subtractReverse < 0 ? -1 : 1) * sumNumbers(subtractReverse);
};