module.exports = (num) => {
  const input = "" + num, s = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81];
  let i = 0,
      r = "",
      t, l = input.length + 1;

  while (--l) {
    t = input[i];
    r += s[t];
    i++;
  }
  return +r;
};