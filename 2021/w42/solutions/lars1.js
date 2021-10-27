const BASE = 1e7
const LOG_BASE = 7

const trim = (v) => {
  let i = v.length;
  while (v[--i] === 0);
  v.length = i + 1;
}

const add = (a, b) => {
  const lengthA = a.length
  const lengthB = b.length

  let result = new Array(lengthA)
  let carry = 0
  let base = BASE
  let sum, i;

  for (i = 0; i < lengthB; i++) {
    sum = a[i] + b[i] + carry;
    carry = sum >= base ? 1 : 0;
    result[i] = sum - carry * base;
  }

  while (i < lengthA) {
    sum = a[i] + carry;
    carry = sum === base ? 1 : 0;
    result[i++] = sum - carry * base;
  }

  if (carry > 0) {
    result.push(carry);
  }

  return result;
}

const addDynamic = (a, b) => {
  if (a.length >= b.length) {
    return add(a, b);
  }

  return add(b, a);
}

// create array entries of size 7 [1234567, 1234567]
const parseStringValue = (value) => {
  let r = []
  let max = value.length
  let l = LOG_BASE
  let min = max - l;

  while (max > 0) {
    r.push(+value.slice(min, max));
    min -= l;
    if (min < 0) {
      min = 0;
    }
    max -= l;
  }

  trim(r);

  return r
}

const toString = (value) => {
  let length = value.length
  let result = String(value[--length]) // last entry
  let zeros = "0000000" // every array entry is base of 7 numbers
  let digit = ''

  while (--length >= 0) {
    digit = String(value[length]);
    result += zeros.slice(digit.length) + digit; // remove prefixed 0's if value is less
  }

  return result;
}

const addX = (a, b) => {
  const parsedA = parseStringValue(a)
  const parsedB = parseStringValue(b)

  const resultArr = addDynamic(parsedA, parsedB);

  return toString(resultArr)
};

module.exports = addX;
