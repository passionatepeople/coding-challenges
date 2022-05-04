const charCodeAt = String.prototype.charCodeAt;
const abs = Math.abs;
const max = Math.max;
function isSmaller(str1, str2) {
  // Calculate lengths of both string
  let n1 = str1.length,
    n2 = str2.length;

  if (n1 < n2) return true;
  if (n2 < n1) return false;

  for (let i = 0; i < n1; i++) {
    if (charCodeAt.call(str1[i]) < charCodeAt.call(str2[i])) return true;
    else if (charCodeAt.call(str1[i]) > charCodeAt.call(str2[i])) return false;
  }
  return false;
}
const codes = {
  48: 0,
  49: 1,
  50: 2,
  51: 3,
  52: 4,
  53: 5,
  54: 6,
  55: 7,
  56: 8,
  57: 9,
};

const subtract = (m1, m2) => {
  // your solution here
  let n1 = charCodeAt.call(m1) === 48 ? m1.slice(1) : m1;
  let n2 = charCodeAt.call(m2) === 48 ? m2.slice(1) : m2;
  const n1IsSmaller = isSmaller(n1, n2);
  let longest = max(n1.length, n2.length);
  let carry = false;
  let res = "";

  for (let i = 0; i < longest; i++) {
    let char1 = n1[n1.length - 1 - i]
      ? codes[charCodeAt.call(n1[n1.length - 1 - i])]
      : 0;
    let char2 = n2[n2.length - 1 - i]
      ? codes[charCodeAt.call(n2[n2.length - 1 - i])]
      : 0;
    let curr = !n1IsSmaller ? char1 - char2 - carry : char2 - char1 - carry;
    if (curr < 0) {
      res = 10 - abs(curr) + res;
      carry = 1;
    } else {
      res = curr + res;
      carry = 0;
    }
  }
  res = res.length > 1 && charCodeAt.call(res) === 48 ? res.slice(1) : res;
  res = res.length > 1 && charCodeAt.call(res) === 48 ? res.slice(1) : res;

  return n1IsSmaller ? "-" + res : res;
};

module.exports = subtract;