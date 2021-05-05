const isValid = (code) => {
  let count = 0
  for (let i=0; i<code.length; i++) {
    if (code[i] === '(') {
      count ++
    } else if (code[i] === ')') {
      count --

      if (count < 0) return false
    }
  }

  return count === 0;
};

module.exports = isValid;
