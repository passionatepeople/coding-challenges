const reverseNumber = num => {
  // STOLEN!! SHAMELESSLY: https://stackoverflow.com/a/52366332
  let digit, result = 0;

  while (num) {
    digit = num % 10;
    result = (result * 10) + digit;
    num = num / 10 | 0;
  }

  return result;
};
const reversedRest = num => num - (reverseNumber(num) * Math.sign(num));

module.exports = manipulateNumber = (num) => {
  const step = reversedRest(num);
  return [...`${Math.abs(step)}`]
    .reduce((a, b) => a + parseFloat(b), 0) * Math.sign(step);
};
