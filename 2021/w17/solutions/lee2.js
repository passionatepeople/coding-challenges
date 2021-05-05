const isValid = (c) => {
  let a = 1
  for (let i = 0; i < c.length; i++) {
    if (c[i] === '(') { a <<= 1 }
    else if (c[i] === ')') {
      if (a == 1) { return false } a >>= 1
    }
  }
  return a === 1
};
module.exports = isValid;
