const ranking = (numbers) => {
  let copy = numbers.slice().sort((a, b) => b - a);
  const map = {};
  for (let i = 0; i < copy.length; i++) {
    if (!!map[copy[i]]) {
      continue;
    }
    map[copy[i]] = i + 1;
  }
  let res = [];
  for (let j = 0; j < numbers.length; j++) {
    res[j] = map[numbers[j]];
  }

  return res;
};

module.exports = ranking;