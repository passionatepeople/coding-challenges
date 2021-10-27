const add = (a, b, c=a.length, d=b.length, len=c) => {
  if (c >= d) {
    b = b.padStart(len, '0');
  } else {
    len = d;
    a = a.padStart(len, '0');
  }
  let sum = '', carry = 0;
  for (let i = len-1; i >=0; i--) {
    let x = a[i], y = b[i], z = +x + +y + +carry, m = z + '';
    carry = z > 9 ? m[0] : 0;
    sum = m[m.length-1] + sum;
  }
  sum = carry + sum;

  return sum.replace(/^0+/, '');
};

module.exports = add;