const popularityContest = (numbers) => {
  const counts = new Map();

  for (const num of numbers) {
    const count = counts.get(num);
    counts.set(num, count ? count + 1 : 1);
  }

  numbers.sort((a, b) => {
    const countA = counts.get(a);
    const countB = counts.get(b);

    return countA === countB ? a - b : countB - countA;
  });

  return numbers;
};

module.exports = popularityContest;