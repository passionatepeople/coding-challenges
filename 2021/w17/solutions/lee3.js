const isValid = (c) => {
  let a = 0
  for (let i = 0; i < c.length; i++) {
    if (c[i] === '(') { a++ }
    else if (c[i] === ')') {
      if (a === 0) { return false } a--
    }
  }
  return !a
};
module.exports = isValid;