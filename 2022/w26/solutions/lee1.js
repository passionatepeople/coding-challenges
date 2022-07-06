const doIReadBothWays = (number) => {
  const stringOfNumber = String(number);
  if (stringOfNumber.length === 1) return true;
  for (let i = 0; i < stringOfNumber.length / 2 + 1; i++) {
    if (stringOfNumber[i] !== stringOfNumber[stringOfNumber.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

module.exports = doIReadBothWays;