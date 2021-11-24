const matchAll = String.prototype.matchAll
const wheatFromTheChaff = (data) => {
  let most = 0;
  for (const match of matchAll.call(data, /\d+/g)) if (+match[0] > most) most = +match[0]
  return most;
};
module.exports = wheatFromTheChaff;