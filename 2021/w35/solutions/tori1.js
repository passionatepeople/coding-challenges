const sortItOut = (number) => {
  const numAsString = number.toString();
  const zerosInNum = numAsString.match(/0/g);
  return zerosInNum
    ? parseInt(
        `${numAsString.replace(/0/g, "")}${"0000000".slice(
          0,
          zerosInNum.length
        )}`
      )
    : number;
};

module.exports = sortItOut;