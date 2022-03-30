const expandIt = (num) => {
  if (!num) return "";

  if (num < 10) return num.toString();

  let result = new Array(6),
    decimal = 1,
    index = 6,
    digit;

  while (num) {
    digit = (num % 10) * decimal;
    decimal *= 10;
    num = ~~(num / 10);

    if (digit) {
      result[--index] = digit;
    }
  }

  let str = "" + result[index++];
  for (; index < 6; ++index) {
    str += " + " + result[index];
  }

  return str;
};

module.exports = expandIt;
