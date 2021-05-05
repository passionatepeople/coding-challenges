const isValid = (code) => {
  let count = 0;

  for(let i = 0; i < code.length; i++) {
    switch (code[i]) {
      case '(':
        count++;
        break;
      case ')':
        count--;
        break;
      default:
        continue;
    }
    if (count < 0) return false;
  }

  return count % 2 === 0;
};

module.exports = isValid;