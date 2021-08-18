const imSpecial = (arr) => {
  if (arr[0] !== arr[1]) {
    return arr[0] === arr[2] ? arr[1] : arr[0];
  }
  if (arr[0] === arr[1]) {
    return arr.find((a) => a !== arr[0]);
  }
};

module.exports = imSpecial;
