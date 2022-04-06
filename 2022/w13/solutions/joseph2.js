const braceful = (input) => {
  if (input.length === 0) return true;
  if (input.length % 2 !== 0) return false;

  const pairs = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  const stack = [];

  for(const item of input) {
    if(pairs[item]) {
      stack.push(item);
    } else if(pairs[stack.pop()] !== item) {
      return false;
    }
  }

  return stack.length === 0;
};

module.exports = braceful;