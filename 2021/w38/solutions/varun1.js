const evaporate = (number) => {
  let n = 0;
  while (number > 9) {
    let currNumber = 1;
    while (number) {
      currNumber *= number % 10
      number = Math.trunc(number / 10)
    }
    number = currNumber
    n++;
  }

  return n;
};

module.exports = evaporate;
