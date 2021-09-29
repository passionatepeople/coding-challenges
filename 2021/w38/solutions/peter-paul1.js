module.exports = (number) => {
  let i = 0, next, digit;

  while (number > 9) {
    i++;
    next = number % 10;
    if (!next) return i;
    number = ~~(number / 10);

    while (number) {
      digit = number % 10;
      if (!digit) return i;
      next *= digit;
      number = ~~(number / 10);
    }

    number = next;
  }

  return i;
};