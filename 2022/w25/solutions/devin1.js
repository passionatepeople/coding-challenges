const flatSort = (arr) => {
  const input = [...arr];
  const res = [];

  while (input.length) {
    const curr = input.pop();
    if (Array.isArray(curr)) {
      input.push(...curr);
    } else {
      res.push(curr);
    }
  }

  return res.sort((a, b) => a - b);
};

module.exports = flatSort;