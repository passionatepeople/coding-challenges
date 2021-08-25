const buildPyramid = (floors, character = "*") => {
  const pyramid = [];
  const stringLength = floors * 2 - 1;

  for (let i = 0; i < floors; i++) {
    let str = character.repeat(2 * i + 1);
    str = str.padStart(floors - i + 2 * i, ' ');
    str = str.padEnd(stringLength, ' ');
    pyramid.push(str)
  }

  return pyramid;
};

module.exports = buildPyramid;