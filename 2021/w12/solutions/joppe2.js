const getSign = (str, max) => {
  const half = max / 2;

  for (let i = 0; i <= half; i++) {
      const diff = str[i] - str[max - i];

      if (diff !== 0) {
          return diff < 0 ? -1 : 1;
      }
  }

  return 1;
};

const manipulateNumber = (n) => {
  // your solution here
  const str = n + '';
  const max = str.length - 1;
  const sign = getSign(str, max);

  let result = 0;
  let remainder = 0;

  for (let i = 0; i <= max; i++) {
      let a = +str[sign === 1 ? max - i : i] + remainder;
      let b = +str[sign === 1 ? i : max - i];

      if (a < b) {
          remainder = -1;
          a += 10;
      } else {
          remainder = 0;
      }

      result += a - b;
  }

  return sign * result;
};

module.exports = manipulateNumber;
