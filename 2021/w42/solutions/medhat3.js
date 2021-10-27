const removeZeros = (str) =>
  str[0] === '0' ? str.replace(/^(0)\1*/, '') : str;
const substr = String.prototype.substr;

const add = (a, b) => {
  let short = a.length < b.length ? a : b;
  let long = short === a ? b : a;
  let diffLen = long.length - short.length;
  let parkedPart = substr.call(long, 0, diffLen);
  let longMatchPart = substr.call(long, diffLen, long.length);
  let l = short.length, temp = 0, sum = '';

  while (l > 0) {
    let c = +short[l - 1] + +longMatchPart[l - 1] + temp;
    sum = (c > 9 ? c % 10 : c) + sum;
    temp = ~~(c / 10);
    l--;
  }

  if (!temp) return removeZeros(parkedPart + sum);

  if (diffLen) {
    let count = +parkedPart[diffLen - 1] + temp;
    const restParkedPart = substr.call(parkedPart, 0, diffLen - 1);
    if (count >= 10) {
      const numParkedPart = +restParkedPart;
      const leftOver =
        numParkedPart < Number.MAX_SAFE_INTEGER
          ? numParkedPart + 1
          : add(restParkedPart, '1');
      sum = leftOver + String(count % 10) + sum;
    } else {
      sum = restParkedPart + count + sum;
    }
  } else {
    sum = temp + sum;
  }

  return removeZeros(sum);
};

module.exports = add;
