// slow but short :D
const manipulateNumber = (number) => {
  const reverse = number.toString().split("").reverse().join("");
  const subtract = +number - +reverse;
  const sum = Math.abs(subtract).toString().split("").reduce((s, n) => s + +n, 0);
  return sum * Math.sign(subtract);
};

module.exports = manipulateNumber;
