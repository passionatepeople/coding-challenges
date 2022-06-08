const expand = (num) => {
  let result = 0;
  let multiplier = 1;

  while (num > 0) {
    const digit = num % 10;
    result += multiplier * digit ** 2;
    num = (num - digit) / 10;
    multiplier *= digit > 3 ? 100 : 10;
  }

  return result;
}

module.exports = expand;