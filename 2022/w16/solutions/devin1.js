const greed = (arr) => {
  const groupings = arr.reduce((acc, curr) => {
    acc.set(curr, acc.get(curr) + 1 || 1);
    return acc;
  }, new Map());

  let points = groupings.get(6) >= 3 ? 600 : 0;
  points += groupings.get(5) >= 3 ? 500 : 0;
  points += groupings.get(4) >= 3 ? 400 : 0;
  points += groupings.get(3) >= 3 ? 300 : 0;
  points += groupings.get(2) >= 3 ? 200 : 0;
  points += groupings.get(1) >= 3 ? 1000 : 0;

  points += ((groupings.get(5) || 0) % 3) * 50;
  points += ((groupings.get(1) || 0) % 3) * 100;

  return points;
};

module.exports = greed;