const removeDupes = (string) => {
  let last = string.charCodeAt(0),
    res = string[0];

  for (let i = 1; i < string.length; i++) {
    let curr = string.charCodeAt(i),
      diff = Math.abs(curr - last);
    if (
      curr < 65 ||
      (curr > 90 && curr < 97) ||
      curr > 122 ||
      (diff !== 32 && diff !== 0)
    ) {
      res += string[i];
    }
    last = curr;
  }
  return res;
};
module.exports = removeDupes;