const add = (a, b, c=a.length, d=b.length, len=c, sum='', carry=0) => {
  if (c > d) {
    b = b.padStart(len, '0');
  } else {
    len = d;
    a = a.padStart(len, '0');
  }
  for (let i = len-1; i >= 0; i--) {
    const currSum = ~~a[i] + ~~b[i] + carry, m = currSum + '';
    carry = currSum > 9 ? ~~m[0] : 0;
    sum = m[currSum > 9 ? 1 : 0] + sum;
  }
  return (carry + sum).replace(/^0+/, '');
};

module.exports = add;