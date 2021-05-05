const OPEN = "(".charCodeAt(0);
const CLOSE = ")".charCodeAt(0);

const isValid = (code) => {
  let level = 0;
  for (let i = 0, char; i < code.length; i++) {
    char = code.charCodeAt(i);
    if (char === CLOSE) {
      if (level < 0) return false
      level--;
    }
    else if (char === OPEN) level++;
  }
  return level === 0;
};

module.exports = isValid;