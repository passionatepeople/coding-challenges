const doIReadBothWays = (number) => {
  let reverse = 0;
  for (let n = number; n > 0; n = n / 10 >> 0) {
    reverse = reverse * 10 + n % 10;    
  }

  return number === reverse;
};

module.exports = doIReadBothWays;