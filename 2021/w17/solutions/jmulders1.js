const isValid = (code) => {
  let openCount = 0;

  for (let c of code) {
    if (c === '(') {
      openCount++;
    } else if (c === ')' && --openCount < 0) {
      return false;
    }
  }

  return openCount === 0;
};

module.exports = isValid;