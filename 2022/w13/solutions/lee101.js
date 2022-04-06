const braceful = (input) => {
  let stack = [];
  for (let i = 0; i < input.length; i++) {
    let bracket = input[i];
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      stack.push(bracket);
      continue;
    }
    if (stack.length == 0) return false;
    let check;
    switch (bracket) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;

      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;

      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }

  // your solution here

  return stack.length === 0;
};

module.exports = braceful;