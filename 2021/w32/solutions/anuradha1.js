function imSpecial (arr) {
  const findFirstELement = arr.filter(item => item === arr[0]);
  return findFirstELement.length === 1 ? findFirstELement[0] : arr.filter(item => item !== arr[0])[0];
}

module.exports = imSpecial;