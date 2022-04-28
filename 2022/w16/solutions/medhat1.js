const greed = (arr) => {
  const len = arr.length;
  let count = 0, i = 0;
  const lookup = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  for (; i < len; i++) {
    const item = arr[i];
    if (++lookup[item] === 3) {
      count += item * 100 * (item === 1 ? 10 : 1);
      lookup[item] = 0;
    }
  }

  return count + lookup['1'] * 100 + lookup['5'] * 50;
};

module.exports = greed;