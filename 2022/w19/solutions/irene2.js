const substring = String.prototype.substring;
const max = Math.max;

const bigFive = (number) => {
  let current = +substring.call(number, 0, 5);
  let biggest = current;

  for (let i = 5; i < number.length; i++) {
    current = current % 10000 * 10 + +number[i];
    biggest = max(biggest, current);
  }

  return biggest;
};

module.exports = bigFive;