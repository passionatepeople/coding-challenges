const lookup = {
  0: "0",
  1: "1",
  2: "4",
  3: "9",
  4: "16",
  5: "25",
  6: "36",
  7: "49",
  8: "64",
  9: "81",
};

const expand = (num) => {
  let num2 = num;
  let result = "";
  while (num2 >= 1) {
    result = lookup[num2 % 10] + result;
    num2 = ~~(num2 / 10);
  }
  return +result;
};
module.exports = expand;