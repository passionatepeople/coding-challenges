const { floor, log2 } = Math;

module.exports = (string, number) => {
  if (!number) {
    return string;
  }

  const digits = floor(log2(number)) + 1;
  const flip = [];
  for (let i = digits; i--; ) {
    flip.push(Boolean(number & (1 << i)));
  }

  let result = "";
  for (let i = 0, j = 0, char; i < string.length; i++) {
    char = string.charCodeAt(i);
    if (char > 64 && char < 91) {
      result += flip[j] ? String.fromCharCode(char + 32) : string[i];
      j = (j + 1) % digits;
    } else if (char > 96 && char < 123) {
      result += flip[j] ? String.fromCharCode(char - 32) : string[i];
      j = (j + 1) % digits;
    } else {
      result += string[i];
    }
  }
  return result;
};