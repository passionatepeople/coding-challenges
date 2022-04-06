const braceful = (input) => {
  const stack = [];
  for (c of input) {
    let last = stack.length > 0 ? stack[stack.length - 1].charCodeAt(0) : 0;
    let diff = c.charCodeAt(0) - last;
    if (diff >= 1 && diff <= 2) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
};

module.exports = braceful;