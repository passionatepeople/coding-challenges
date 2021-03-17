const rankLetters = (input) => {
  input = input.toLowerCase()
  const charTimes = (char) => input.split(char).length - 1;
  const arrayInput = [...new Set(input)];
  arrayInput.sort((a, b) => {
    const [aLength, bLength] = [charTimes(a), charTimes(b)]
    return aLength === bLength ? a.charCodeAt(0) - b.charCodeAt(0) : bLength - aLength
  });

  return arrayInput;
};

module.exports = rankLetters;