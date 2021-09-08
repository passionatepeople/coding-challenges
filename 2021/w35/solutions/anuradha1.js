const sortItOut = number => {
  let result = '', zeros='', input= '' + number, j = input.length - 1;
  for (let i = 0; i <= j ; i++) {
    if (+input[i]) {
      result += input[i];
    } else {
      zeros+='0';
    }
  }

  return parseInt(result+zeros);
};

module.exports = sortItOut;