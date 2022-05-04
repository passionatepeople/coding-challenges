const removeZeros = (str) => (str[0] === '0' ? str.replace(/^[0]+/, '') : str);

const subtract = (num1, num2) => {
  if (num2 === '0') return num1;

  if (num1.length < 16 && num2.length < 16) return (num1 - num2).toString();

  let n1 = removeZeros(num1),
    n2 = removeZeros(num2),
    res = '',
    borrow = 0;

  const n1len = n1.length,
    n2len = n2.length;

  const isSigned = n1len < n2len || (n1len === n2len && n1 < n2);

  if (isSigned) [n1, n2] = [n2, n1];

  const diffLen = Math.abs(n1len - n2len);

  const newN1 = diffLen > 0 ? n1.slice(diffLen, isSigned ? n2len : n1len) : n1;

  for (let i = newN1.length - 1; i >= 0; i--) {
    let currN1 = +newN1[i] - borrow;
    let currN2 = +n2[i];
    borrow = 0;
    if (currN1 < currN2) {
      borrow = 1;
      currN1 += 10;
    }
    res = '' + (currN1 - currN2) + res;
  }

  if (diffLen > 0) {
    const rest = n1.slice(0, diffLen);
    res = (borrow ? subtract(rest, '1') : rest) + res;
  }

  res = removeZeros(res);

  return isSigned ? '-' + res : res;
};

module.exports = subtract;