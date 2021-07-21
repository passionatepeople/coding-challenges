module.exports = (num1, num2) => {
  const smallest = num1 > num2 ? num2 : num1;
  const largest = num1 > num2 ? num1 : num2;

  for (let i = smallest; i; i--) {
    if (Number.isInteger(largest / i) && Number.isInteger(smallest / i)) {
      return i
    }
  }
};
