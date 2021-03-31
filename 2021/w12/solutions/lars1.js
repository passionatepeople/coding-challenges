const handleDigitReverse = (digit, result) => result * 10 + digit
const handleDigitCount = (digit, result) => result + digit

const manipulator = (number, handleDigit) => {
  const isNegative = number < 0;
  let result = 0;
  let value = Math.abs(number);

  while(value > 0) {
    const digit = (value % 10)
    result = handleDigit(digit, result);
    value = value / 10 | 0;
  }

  return isNegative ? -result : result;
}

const manipulateNumber = (number) => {
  const reversed = manipulator(number, handleDigitReverse);
  return manipulator(number - reversed, handleDigitCount)
};

module.exports = manipulateNumber;
