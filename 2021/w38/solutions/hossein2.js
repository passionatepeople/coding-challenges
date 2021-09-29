const evaporate = (number) => {
  if (number < 10) return 0;
  if (/0/.test(number)) return 1;

  let count = 0;
  while (number > 9) {
    let mul = 1;
    while (number) {
      mul *= number % 10;
      number = ~~(number / 10);
    }
    count += 1;
    if (/0/.test(mul)) return count + 1;
    number = mul;
  }

  return count;
};

module.exports = evaporate;
