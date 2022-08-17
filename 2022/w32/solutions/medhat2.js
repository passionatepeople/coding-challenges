const popularityContest = (numbers) => {
  const lookup = numbers.reduce((prev, curr) => {
      prev[curr] = (prev[curr] || 0) + 1;
      return prev;
    }, []),
    res = [];
  const sorted = Object.entries(lookup).sort((a, b) => b[1] - a[1]);

  for (let [key, val] of sorted) {
    while (val > 0) {
      res.push(+key);
      val--;
    }
  }

  return res;
};

module.exports = popularityContest;