const isValid = (code) => {
  const len = code.length;
  let opened = 0
  let s;

  for (let i = 0; i < len; i++) {
    s = code.charAt(i);

    if (s === '(') {
      opened++;
    } else if (s === ')') {
      opened--;
    }
  }

  return opened === 0;
};

module.exports = isValid;