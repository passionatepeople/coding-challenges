const getCharCase = (code) => {
  if (code >= 97 && code < 123) return -1;
  if (code >= 65 && code < 91) return 1;
  return 0;
};

const maskIt = (string, number) => {
  const binary = number.toString(2);
  let result = '';
  let maskIndex = 0;

  if (!number) return string;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const code = char.charCodeAt(0);
    const charCase = getCharCase(code);

    if (maskIndex === binary.length) maskIndex = 0;

    if (!charCase) result += string[i];
    else {
      if (binary[maskIndex] === '1') {
        result +=
          charCase < 0
            ? String.fromCharCode(code - 32)
            : String.fromCharCode(code + 32);
      } else {
        result += string[i];
      }
      maskIndex++;
    }
  }

  return result;
};

module.exports = maskIt;
