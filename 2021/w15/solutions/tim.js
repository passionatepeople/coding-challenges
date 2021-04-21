const isLowerCase = (v) => v && v == v.toLowerCase();
const isDenied = (v) => v === "_" || v === "-";

const fixCase = (input) => {
  let output = "";
  let prevChar = "";
  for (let i = 0; i < input.length; i++) {
    let char = input.charAt(i);
    const newWord =
      (!isLowerCase(char) && isLowerCase(prevChar)) || isDenied(prevChar);
    if (newWord) {
      char = char.toUpperCase();
    } else {
      char = char.toLowerCase();
    }
    if (!isDenied(char)) {
      output += char;
    }
    if (input[i] !== "'") {
      prevChar = input.charAt(i);
    }
  }

  return output;
};

module.exports = fixCase;
