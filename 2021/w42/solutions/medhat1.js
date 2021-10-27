const fill = (str, l) => (str.length < l ? fill('0' + str, l) : str);

const add = (a, b) => {
  let l = a.length > b.length ? a.length : b.length;
  let temp = 0,
    sum = '';
  a = fill(a, l);
  b = fill(b, l);

  while (l > 0) {
    let c = +a[l - 1] + +b[l - 1] + temp;
    sum = (c > 9 ? c % 10 : c) + sum;
    temp = c > 9 ? (c / 10) >> 0 : 0;
    if (l === 1) {
      sum = temp + sum;
    }
    l--;
  }
  return sum.replace(/^(0)\1*/, '');
};

module.exports = add;
