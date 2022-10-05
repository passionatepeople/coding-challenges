const hashedAllTheWay = (code) => {
  let res = 0;
  for (let i = 0; i < code.length; i++) {
    const letter = code.charCodeAt(i).toString(16);
    res += letter[0].charCodeAt() - 48;
    if (letter[1].charCodeAt() < 58) {
      res += letter[1].charCodeAt() - 48;
    }
  }

  return res;
};

module.exports = hashedAllTheWay;