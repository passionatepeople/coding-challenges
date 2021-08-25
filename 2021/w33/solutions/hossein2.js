module.exports = (floors, character = "*") => {
  let result = [],
    length = 2 * floors - 1;
  for (let i = 0; i < floors; ++i) {
    let fill = 2 * i + 1,
      half = " ".repeat((length - fill) / 2);
    result.push(half + character.repeat(fill) + half);
  }
  return result;
};
