const evaporate = (number) => {
  let n = 0;
  if (number > 9) {
    let currNumber = 1
    n = 1
    while (number > 9) {
      const digit = number % 10
      if (digit === 0) {
        break;
      }
      currNumber *= digit
      number = Math.trunc(number / 10)
      if (number <= 9) {
        currNumber *= number
        number = currNumber
        if (currNumber > 9) {
          n++;
          currNumber = 1
        }
      }

    }
  }

  return n;
};

module.exports = evaporate;
