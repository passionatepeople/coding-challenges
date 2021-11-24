const matchAll = String.prototype.matchAll
const wheatFromTheChaff = (data) => {
  const matches = matchAll.call(data, /\d+/g);
  let most = 0;
  for (const match of matches) {
    if (+match[0] > most) {
      most = +match[0]
    }
  }
  return most;
};
module.exports = wheatFromTheChaff;