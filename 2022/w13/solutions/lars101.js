const charCode = String.prototype.charCodeAt

const braceful = (input) => {
  const stack = [];
  const length = input.length

  for (let i = 0; i < length; i++) {
    const c = charCode.call(input[i],0);
    if (c == 125) {
      if (stack.pop() != 123) {
        return false;
      }
    } else if (c == 93) {
      if (stack.pop() != 91) {
        return false;
      }
    } else if (c == 41) {
      if (stack.pop() != 40) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
};

module.exports = braceful;