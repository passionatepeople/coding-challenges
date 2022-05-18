module.exports = n => {
  let i = n.length - 5;

  let res = n.slice(0, 5)
  let str = res
  while (i > 0) {
    if (n[i] < res[0]) {
      i--;
      continue;
    }

    str = n.slice(i, i + 5);
    if (str > res) {
      res = str
    }

    i--;
  }
  return +res
};