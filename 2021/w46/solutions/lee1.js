const wheatFromTheChaff = (data) => {
  let numbers = data.match(/[0-9]+/g);
  return +numbers.sort((a, b) => b - a)[0];
};

module.exports = wheatFromTheChaff;
