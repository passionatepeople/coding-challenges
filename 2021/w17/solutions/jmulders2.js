const isValid = (code) => {
  let openCount = 0;

  for (let i =0; i< code.length; i++) {
    if (code[i] === '(') {
      openCount++;
    } else if (code[i] === ')' && --openCount < 0) {
      return false;
    }
  }

  return openCount === 0;
};

module.exports = isValid;