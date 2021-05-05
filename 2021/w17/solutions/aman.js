const LEFT_BRACKET = 40, RIGHT_BRACKET = 41;

const isValid = (code) => {
  const len = code.length;
  let count = 0;

  // optimizations
  if (len === 2) return true;
  if (len === 3) return false;

  for (let i = 0; i < len; i++) {
    const char = code.charCodeAt(i);
    if (char === LEFT_BRACKET) {
      count += 1;
      continue;
    }
    if (char === RIGHT_BRACKET) {
      count -= 1;
    }
  }
  return count === 0;
};

module.exports = isValid;
