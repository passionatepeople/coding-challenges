const buildPyramid = (floors, character = "*") => {
  let result = [],
    length = 2 * floors - 1;
  for (let i = 0; i < floors; ++i) {
    let fill = 2 * i + 1,
      empty = length - fill,
      halfEmpty = empty / 2;
    result.push(
      ""
        .padStart(fill, character)
        .padStart(halfEmpty + fill)
        .padEnd(empty + fill)
    );
  }

  return result;
};

module.exports = buildPyramid;
