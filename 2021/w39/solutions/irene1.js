const normalize = charCode => {
  return charCode > 96 && charCode < 123 ? charCode - 32 : charCode;
}

const removeDupes = (string) => {
  let result = string[0];

  for (let i = 1; i < string.length; i++) {
    const current = normalize(string.charCodeAt(i));
    const previous = normalize(string.charCodeAt(i - 1));
    if (current !== previous || current > 90 || current < 65) {
      result += string[i];
    }
  }

  return result;
};

module.exports = removeDupes;
