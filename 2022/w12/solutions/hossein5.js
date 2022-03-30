var decimals = [100000, 10000, 1000, 100, 10, 1];

const expandIt = (num) => {
  if (num == 0) return "";

  if (num < 10) return "" + num;

  var result = new Array(6),
    index = 6,
    digit;

  while (num > 9) {
    digit = num % 10;

    result[--index] = digit * decimals[index];

    num = ~~(num / 10);
  }
  result[--index] = num * decimals[index];

  var str = "" + result[index++];
  for (; index < 6; ++index) {
    digit = result[index];
    if (digit > 0) str += " + " + digit;
  }

  return str;
};

module.exports = expandIt;
