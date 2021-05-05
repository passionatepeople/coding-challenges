const isValidFunc = (stringCode) => {
  let intCounter = 0;

  stringCode[0] == "(" && (intCounter = intCounter+1);
  stringCode[0] == ")" && (intCounter = intCounter+1);
  stringCode[1] == "(" && (intCounter = intCounter+1);
  stringCode[1] == ")" && (intCounter = intCounter+1);
  stringCode[2] == "(" && (intCounter = intCounter+1);
  stringCode[2] == ")" && (intCounter = intCounter+1);
  stringCode[3] == "(" && (intCounter = intCounter+1);
  stringCode[3] == ")" && (intCounter = intCounter+1);
  stringCode[4] == "(" && (intCounter = intCounter+1);
  stringCode[4] == ")" && (intCounter = intCounter+1);
  stringCode[5] == "(" && (intCounter = intCounter+1);
  stringCode[5] == ")" && (intCounter = intCounter+1);
  stringCode[6] == "(" && (intCounter = intCounter+1);
  stringCode[6] == ")" && (intCounter = intCounter+1);
  stringCode[7] == "(" && (intCounter = intCounter+1);
  stringCode[7] == ")" && (intCounter = intCounter+1);
  stringCode[8] == "(" && (intCounter = intCounter+1);
  stringCode[8] == ")" && (intCounter = intCounter+1);
  stringCode[9] == "(" && (intCounter = intCounter+1);
  stringCode[9] == ")" && (intCounter = intCounter+1);
  stringCode[10] === "(" && (intCounter = intCounter+1);
  stringCode[10] == ")" && (intCounter = intCounter+1);
  stringCode[11] == "(" && (intCounter = intCounter+1);
  stringCode[11] == ")" && (intCounter = intCounter+1);
  stringCode[12] == "(" && (intCounter = intCounter+1);
  stringCode[12] == ")" && (intCounter = intCounter+1);
  stringCode[13] == "(" && (intCounter = intCounter+1);
  stringCode[13] == ")" && (intCounter = intCounter+1);
  stringCode[14] == "(" && (intCounter = intCounter+1);
  stringCode[14] == ")" && (intCounter = intCounter+1);
  stringCode[15] == "(" && (intCounter = intCounter+1);
  stringCode[15] == ")" && (intCounter = intCounter+1);
  stringCode[16] == "(" && (intCounter = intCounter+1);
  stringCode[16] == ")" && (intCounter = intCounter+1);

  const booleanEven = intCounter % 2 === 0;

  return booleanEven;
};

module.exports = isValidFunc;
