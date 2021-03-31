const manipulateNumber = (number) => {
  let copy = number;
  let reverse = 0;
  while (copy > 0) {
    const last = copy % 10;
    reverse = (reverse * 10) + last;
    copy = copy / 10 >> 0;
  }

  let subtract = number - reverse;
  const multiplier = Math.sign(subtract);
  subtract *= multiplier

  let sum = 0;
  while (subtract > 0) {
    const last = subtract % 10;
    sum += last;
    subtract = subtract / 10 >> 0;
  }
  return sum * multiplier;
};

module.exports = manipulateNumber;
