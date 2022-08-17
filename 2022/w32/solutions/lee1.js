const popularityContest = (numbers) => {
  const lookup = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };

  for (let i = 0; i < numbers.length; i++) {
    lookup[numbers[i]]++;
  }
  // sort by freq
  const sorted = Object.entries(lookup).sort((a, b) => {
    return b[1] - a[1];
  });
  let idx = 0;
  let res = [];
  while (idx < 10) {
    if (sorted[idx][1] === 0) {
      break;
    }
    res.push(+sorted[idx][0]);
    sorted[idx][1]--;
    if (sorted[idx][1] === 0) {
      idx++;
    }
  }

  return res;
};

module.exports = popularityContest;