const doIReadBothWays = function (number) {
  if (number < 10) return true;
  if (number % 10 === 0) return false; // in case of a number start with a zero never to be reversed

  let reversed = 0;
  while (number >= 10) {
    let curr = number % 10;
    reversed = reversed * 10 + curr;
    if (number === reversed) return true;

    number = ~~(number / 10);
    if (number === reversed) return true;
  }

  return false;
};

module.exports = doIReadBothWays;