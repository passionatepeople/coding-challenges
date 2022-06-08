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
  let str = String(num);

  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += lookup[str[i]];
  }
  return +result;
};
module.exports = expand;