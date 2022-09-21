module.exports = (arr) => {
  const sorted = [...arr].sort((a, b) => b - a);
  const ranks = [];
  let rank = 1;
  let prev = sorted[0];
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] < prev) {
      rank = i + 1;
    }
    ranks.push(rank);
    prev = sorted[i];
  }
  return arr.map((num) => ranks[sorted.indexOf(num)]);
};