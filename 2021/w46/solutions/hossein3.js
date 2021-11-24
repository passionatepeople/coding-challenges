const digits = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

const wheatFromTheChaff = (data) => {
  let length = data.length + 1,
    tmpNumber = "",
    maxNumber = 0,
    i = 0,
    char;

  for (; i < length; i++) {
    char = data[i];
    if (digits.has(char)) {
      tmpNumber += char;
    } else if (tmpNumber) {
      if (maxNumber < tmpNumber) {
        maxNumber = +tmpNumber;
      }
      tmpNumber = "";
    }
  }

  return maxNumber;
};

module.exports = wheatFromTheChaff;
