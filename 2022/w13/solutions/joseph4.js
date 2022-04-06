const braceful = (input) => {
  const pairs = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  const stack = [];

  const inputLength = input.length;
  for (let i = 0; i < inputLength; i++) {
    const char = input[i];

    if (pairs[char]) {
      stack.push(char);
    } else if (pairs[stack.pop()] !== char) {
      return false;
    }
  }

  return stack.length === 0;
};

module.exports = braceful;