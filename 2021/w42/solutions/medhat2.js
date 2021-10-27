const add = (a, b) => {
  let short = a.length < b.length ? a : b;
  let long = short === a ? b : a;
  let diffLen = long.length - short.length;
  let parkedPart = long.substr(0, diffLen);
  let longMatchPart = long.substr(diffLen, long.length);
  let l = short.length, temp = 0, sum = '';
  
  while (l > 0) {
    let c = +short[l - 1] + +longMatchPart[l - 1] + temp;
    sum = (c > 9 ? c % 10 : c) + sum;
    temp = ~~(c / 10);
    l--;
  }
  if (diffLen) {
    let count = +parkedPart[diffLen - 1] + temp;
    if (count >= 10) {
      sum = add(parkedPart.substr(0, diffLen - 1), '1') + (count % 10) + sum;
    } else {
      sum = parkedPart.substr(0, diffLen - 1) + count + sum;
    }
  } else {
    sum = temp + sum;
  }
  return sum.replace(/^(0)\1*/, '');
};

module.exports = add;
