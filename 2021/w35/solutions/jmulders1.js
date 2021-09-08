const sortItOut = (number) => {
  let result = 0;

  let remainder = number;
  let curNumber;
  let resultFactor = 1;
  let zeroesFactor = 1;

  while(remainder) {
    curNumber = remainder % 10;
    remainder = Math.floor(remainder / 10);

    if (curNumber > 0) {
      result += curNumber * resultFactor;
      resultFactor *= 10;
    } else {
      zeroesFactor *= 10;
    }

  }

  return result * zeroesFactor;
};

module.exports = sortItOut;
