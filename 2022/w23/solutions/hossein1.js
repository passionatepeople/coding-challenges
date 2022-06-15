const swappedDiff = (first, second) => {
  let firstDecimal = 10,
    secondDecimal = 10,
    firstLMD = first / 10,
    secondLMD = second / 10;

  while (firstLMD > 10) {
    firstLMD /= 10;
    firstDecimal *= 10;
  }
  firstLMD = ~~firstLMD;

  while (secondLMD > 10) {
    secondLMD /= 10;
    secondDecimal *= 10;
  }
  secondLMD = ~~secondLMD;

  first = secondLMD * firstDecimal + secondLMD * secondDecimal + first;
  second = firstLMD * firstDecimal + firstLMD * secondDecimal + second;
  return first > second ? first - second : second - first;
};

module.exports = swappedDiff;