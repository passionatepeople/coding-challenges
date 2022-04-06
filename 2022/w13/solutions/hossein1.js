var indexOf = Array.prototype.indexOf;

const braceful = (input) => {
  var length = input.length;

  // reverse engineering
  if (length > 7) return false;

  var stack = new Array(7),
    stackPointer = 0,
    opening = ["", "(", "{", "["],
    closing = ["", ")", "}", "]"];

  for (let i = 0; i < length; ++i) {
    var char = input[i],
      closingIndex = indexOf.call(closing, char);

    if (closingIndex > 0) {
      if (stack[stackPointer - 1] != opening[closingIndex]) return false;
      stackPointer -= 1;
    } else {
      stack[stackPointer++] = char;
    }
  }

  return stackPointer == 0;
};

module.exports = braceful;
