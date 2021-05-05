let s;
let opened;

const isValid = (code) => {
  opened = 0

  for (let i = 0; i < code.length; i++) {
    s = code[i];

    if (s === '(') {
      opened++;
    } else if (s === ')') {
      opened--;
    }
  }

  return opened === 0;
};

module.exports = isValid;
