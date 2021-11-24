const wheatFromTheChaff = (data) => {
  let numbers = data.match(/\d+/gi).sort((a, b) => a - b);;
  return +numbers[numbers.length - 1];
};

module.exports = wheatFromTheChaff;
