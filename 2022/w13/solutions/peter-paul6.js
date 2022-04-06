module.exports = (input) => {
  const charCodeAt = input.charCodeAt.bind(input);
  const stack = [];
  for (let char, i = input.length; i--;) {
    switch (char = charCodeAt(i)) {
    case 40:
      if (stack.pop() != 41) {
        return false;
      }
      continue;
    case 91:
      if (stack.pop() != 93) {
        return false;
      }
      continue;
    case 123:
      if (stack.pop() != 125) {
        return false;
      }
      continue;
    }
    stack.push(char);
  }
  return !stack.length;
};