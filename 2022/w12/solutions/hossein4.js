const expandIt = (num) => {
  if (num == 0) return "";

  if (num < 10) return "" + num;

  var decimals = [1, 10, 100, 1000, 10000, 100000, 1000000],
    result = new Array(6),
    index = 6,
    decimalIndex = 0,
    digit;

  while (num > 9) {
    digit = num % 10;

    if (digit) {
      result[--index] = digit * decimals[decimalIndex];
    }

    decimalIndex += 1;
    num = ~~(num / 10);
  }
  result[--index] = num * decimals[decimalIndex];

  var str = "" + result[index++];
  for (; index < 6; ++index) {
    str += " + " + result[index];
  }

  return str;
};

module.exports = expandIt;
