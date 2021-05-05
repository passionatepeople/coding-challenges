const isValid = (code) => {
  return [...code].reduce((total, s) => {
    if (s === '(') {
      total++;
    } else if (s === ')') {
      total--;
    }
    return total;
  }, 0) === 0
};

module.exports = isValid;
