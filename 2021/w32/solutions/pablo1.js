const imSpecial = (arr) => {
  if (arr[0] !== arr[1]) {
    return arr[2] === arr[1] ? arr[0] : arr[1];
  } else {
    let i = 2;
    for (; i; ++i) {
      if (arr[i] !== arr[0]) return arr[i];
    }
  }
};

module.exports = imSpecial;
