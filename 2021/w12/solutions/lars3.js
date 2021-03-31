const manipulator = (number, m=1, result = 0) => {
  let value = number < 0 ? -number : number;

  for (; 0 < value;) {
    result = result * m + (value % 10);
    value = value / 10 | 0;
  }

  return number < 0 ? -result : result;
}

module.exports = (number) => manipulator(number - manipulator(number, 10));