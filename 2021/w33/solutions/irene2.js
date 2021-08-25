const buildPyramid = (floors, character = "*") => {
  const pyramid = Array(floors);

  for (let i = 0; i < floors; i++) {
    const pad = ' '.repeat(floors - i - 1);
    pyramid[i] = pad + character.repeat(2 * i + 1) + pad;
  }

  return pyramid;
};

module.exports = buildPyramid;