const evaporate = (number) => {
  if (number < 10) return 0;

  let count = 0;
  while (number > 9) {
    let mul = 1;
    while (number) {
      let last = number % 10;
      number = Math.floor(number / 10);
      mul *= last;
      if (!mul) return count + 1;
    }
    count += 1;
    number = mul;
  }

  return count;
};

module.exports = evaporate;
