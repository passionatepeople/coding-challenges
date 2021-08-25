const buildPyramid = (floors, character = '*') => {
  const res = [];

  for (let i = 1; i <= floors; i++) {
    const spaces = ' '.repeat(floors - i)
    res.push(spaces + character.repeat(i * 2 - 1) + spaces);
  }

  return res;
};

module.exports = buildPyramid;