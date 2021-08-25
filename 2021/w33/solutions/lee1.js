const buildPyramid = (floors, character = "*") => {
  const pyramidWidth = 2 * floors - 1;

  const res = [];
  for (let i = 0; i < floors; i++) {
    let numChars = 2 * i + 1;
    let eachSide = " ".repeat((pyramidWidth - numChars) / 2);
    res.push(eachSide + character.repeat(numChars) + eachSide);
  }

  return res;
};

module.exports = buildPyramid;
