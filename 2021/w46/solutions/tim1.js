const match = String.prototype.match;
const regEx =/\d+/g;
const wheatFromTheChaff = (string) => {
  const digits = match.call(string, regEx);
  return Math.max(...digits);
};

module.exports = wheatFromTheChaff;
