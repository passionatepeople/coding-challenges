const sortItOut = (number, input= '' + number) => {
  let result = '', zeros=0;
  for (let i = 0; i < input.length; i++) {
    if (+input[i]) {
      result += input[i];
    } else {
      zeros++;
    }
  }

  return parseInt(result.padEnd(result.length+zeros, '0'));
};

module.exports = sortItOut;