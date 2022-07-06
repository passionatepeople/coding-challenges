const doIReadBothWays = (number) => {
  if (number < 10) return true;
  if (number < 101) return !(number % 11);
  if (number < 1001) return number % 10 == ~~(number / 100);
  let r = 1,
    l = 10000;

  while (number > l) l *= 10;
  l /= 10;

  while (~~(number / l) % 10 == ~~(number / r) % 10 && l > r) {
    l /= 10;
    r *= 10;
  }

  return l <= r;
};

module.exports = doIReadBothWays;