const greed = (arr) => {
  let idx = 0,
    sum = 0;
  const counter = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  const table = [1000, 200, 300, 400, 500, 600];

  while (idx < 5) {
    const item = arr[idx];
    ++counter[item];
    if (counter[item] === 3) {
      sum += table[item - 1];
      counter[item] = 0;
    }
    ++idx;
  }

  return sum + counter[1] * 100 + counter[5] * 50;
};

module.exports = greed;