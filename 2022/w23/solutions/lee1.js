const { log, LN10, pow, abs, floor } = Math;

const swappedDiff = (first, second) => {
  const firstLength = floor(log(first) / LN10);
  const firstLengthTo10 = pow(10, firstLength);
  const firstFirstDigit = floor(first / firstLengthTo10);

  const secondLength = floor(log(second) / LN10);
  const secondLengthTo10 = pow(10, secondLength);
  const secondFirstDigit = floor(second / secondLengthTo10);

  const swappedFirst =
    first -
    firstFirstDigit * firstLengthTo10 +
    secondFirstDigit * firstLengthTo10;
  const swappedSecond =
    second -
    secondFirstDigit * secondLengthTo10 +
    firstFirstDigit * secondLengthTo10;

  return abs(swappedFirst - swappedSecond);
};

module.exports = swappedDiff;