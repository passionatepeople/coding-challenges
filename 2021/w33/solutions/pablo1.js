const buildPyramid = (floors, character = '*') => {
  const res = [];
  res.length = floors;
  let i = floors;

  for (;i;i--) {
    const spaces = ' '.repeat(floors - i)
    res[i - 1] = spaces + character.repeat(i * 2 - 1) + spaces;
  }

  return res;
};

module.exports = buildPyramid;