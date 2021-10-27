const add = (a, b) => {
  let next = 0;
  let str = "";
  for (let i = a.length - 1, j = b.length - 1; i > -1 || j > -1; i--, j--) {
    let total = next + (i > -1 ? +a[i] : 0) + (j > -1 ? +b[j] : 0);
    if (total > 9) {
      next = 1;
      str = total - 10 + str;
    } else {
      next = 0;
      str = total + str;
    }
  }
  if (next === 1) {
    str = "1" + str;
  }
  if (str[0] === "0") {
    let endingZeroes = 0;
    endingZeroes++;
    if (str[1] === "0") {
      endingZeroes++;
      if (str[2] === "0") {
        endingZeroes++;
      }
    }
    str = str.slice(endingZeroes);
  }
  return str;
};

module.exports = add;
