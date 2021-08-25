const buildPyramid = (floors, character = "*") => {
  if (floors === 1) {
    return [character];
  }
  let i = 0;
  let result = [];
  let strLength = (floors - 1) * 2 + 1;
  const char = " ".repeat(strLength);
  for (; i < floors; i++) {
    if (i + 1 === floors) {
      result[i] = character.repeat(strLength);
      break;
    }
    const spaceLength = floors - i - 1;
    const charLength = 2 * i + 1
    result[i] = char.slice(0, spaceLength) + character.repeat(charLength) + char.slice(-spaceLength);
  }
  return result;
};

module.exports = buildPyramid;