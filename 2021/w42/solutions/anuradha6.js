const add = (a, b, c=a.length, d=b.length, len=c,sum='',carry=0,i,z) => {
  if (c > d) {
    b = b.padStart(len, '0');
  }  else {
    len = d;
    a = a.padStart(len, '0');
  }
  for (i = len-1; i >=0; i--) {
    z = ~~a[i] + ~~b[i] + carry;
    carry = z/10|0;
    sum = z%10 + sum;
  }
  return (carry + sum).replace(/^0+/, '');
};

module.exports = add;