const { pow, abs, floor } = Math;

const swappedDiff = (first, second) => {
  const firstLength =
    first > 99999
      ? 5
      : first > 9999
      ? 4
      : first > 999
      ? 3
      : first > 99
      ? 2
      : first > 9
      ? 1
      : 0;
  const firstLengthTo10 = pow(10, firstLength);
  const firstFirstDigit = floor(first / firstLengthTo10);

  const secondLength =
    second > 99999
      ? 5
      : second > 9999
      ? 4
      : second > 999
      ? 3
      : second > 99
      ? 2
      : second > 9
      ? 1
      : 0;
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