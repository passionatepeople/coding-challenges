const expandIt = (num) => {
  let result = ""
  let multiplier = 1

  while (num > 0) {
    const digit = (num % 10)
    if (digit){
      result = result ? `${digit*multiplier} + ` + result : `${digit*multiplier}`
    }
    multiplier *= 10
    num = num / 10 | 0;
  }
  return result;
};

module.exports = expandIt;
