const slice = String.prototype.slice;
const charCodeAt = String.prototype.charCodeAt;

const subtract = (n1, n2) => {
  let s1 = n1;
  let s2 = n2

  while (s1[0] === '0' && s1.length > 1) {
    s1 = slice.call(s1, 1)
  }
  while (s2[0] === '0' && s2.length > 1) {
    s2 = slice.call(s2, 1)
  }
  let l1 = s1.length - 1;
  let l2 = s2.length - 1;

  let isNegative = false;

  if (l2 > l1 || (l2 === l1 && s2 > s1)) {
    isNegative = true;
    let temp = s1
    s1 = s2;
    s2 = temp;
    l1 = s1.length - 1;
    l2 = s2.length - 1
  }

  let res = '';
  let carry = 0

  let v1 = charCodeAt.call(s1, l1) - 48;
  let v2 = charCodeAt.call(s2, l2) - 48;
  while (l1 >= 0 || l2 >= 0) {
    v1 = v1 - carry;
    carry = 0
    if (v1 < v2 && l1 > 0) {
      carry = 1;
      v1 += 10
    }

    res = v1 - v2 + res

    l1--;
    l2--;
    v1 = charCodeAt.call(s1, l1) - 48;
    v2 = charCodeAt.call(s2, l2) - 48;
    if (isNaN(v1)) {
      v1 = 0
    }
    if (isNaN(v2)) {
      v2 = 0
    }
  }
  while (res[0] === '0' && res.length > 1) {
    res = slice.call(res, 1)
  }

  return isNegative ? '-' + res : res;
};

module.exports = subtract;