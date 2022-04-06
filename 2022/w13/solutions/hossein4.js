var stack = new Array(7);

const braceful = (input) => {
  var length = input.length;

  // reverse engineering
  if (length > 7) return false;

  var stackPointer = 0;

  for (let i = 0; i < length; ++i) {
    var char = input[i];

    if (char == "{") stack[stackPointer++] = "}";
    else if (char == "(") stack[stackPointer++] = ")";
    else if (char == "[") stack[stackPointer++] = "]";
    else if (char == "}" && stack[--stackPointer] != "}") return false;
    else if (char == ")" && stack[--stackPointer] != ")") return false;
    else if (char == "]" && stack[--stackPointer] != "]") return false;
  }

  return stackPointer == 0;
};

module.exports = braceful;
