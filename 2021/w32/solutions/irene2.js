const imSpecial = (arr) => {
  let j;
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) break;
    }
    if (j === arr.length) return arr[i];
  }
  return 0;
};

module.exports = imSpecial;