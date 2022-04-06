module.exports = (input) => {
  const charCodeAt = input.charCodeAt.bind(input);
  const stack = [];
  for (let char, i = input.length; i--;) {
    char = charCodeAt(i);
    if (char == 40) {
      if (stack.pop() != 41) return false;
    }
    else if (char == 91) {
      if (stack.pop() != 93) return false;
    }
    else if (char == 123) {
      if (stack.pop() != 125) return false;
    }
    else {
      stack.push(char);
    }
  }
  return !stack.length;
};