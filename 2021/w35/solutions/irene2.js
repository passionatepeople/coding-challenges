const sortItOut = (number) => {
  const str = number.toString();
  let result = 0;
  let zeros = 0;
  for (let i = 0; i < str.length; i++) {
    const num = +str[i];
    if (num != 0) {
      result = result*10 + num;
      continue;
    }
    zeros++;
  }

  return result * 10**zeros;
};

module.exports = sortItOut;