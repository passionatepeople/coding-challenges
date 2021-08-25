const buildPyramid = (floors, character = "*") => {
  if (floors === 1) {
    return [character];
  }
  let i = 0;
  let result = [];
  let strLength = (floors - 1) * 2 + 1;
  const spaces = " ".repeat(strLength);
  const char = character.repeat(strLength);
  for (; i < floors; i++) {
    if (i + 1 === floors) {
      result[i] = character.repeat(strLength);
      break;
    }
    const spaceLength = floors - i - 1;
    const charLength = 2 * i + 1
    result[i] = spaces.slice(0, spaceLength) + char.slice(0, charLength) + spaces.slice(-spaceLength);
  }
  return result;
};

module.exports = buildPyramid;
