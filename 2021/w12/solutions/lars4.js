const manipulator = (
  number,
  m=1,
  result = 0,
  isNegative = number < 0,
  value = isNegative ? -number : number, 
) => {
  while(value > 0) {
    result = result * m + (value % 10);
    value = value / 10 | 0;
  }

  return isNegative ? -result : result;
}

module.exports = (number) => manipulator(number - manipulator(number, 10));