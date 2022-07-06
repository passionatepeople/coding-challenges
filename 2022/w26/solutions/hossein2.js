const doIReadBothWays = (number) => {
  if (number < 10) return true;
  if (number < 101) return !(number % 11);
  if (number < 1001) return number % 10 == ~~(number / 100);

  let reverse = number % 10;
  for (let rem = ~~(number / 10); rem > 0; reverse = reverse * 10 + (rem % 10), rem = ~~(rem / 10));

  return number == reverse;
};

module.exports = doIReadBothWays;