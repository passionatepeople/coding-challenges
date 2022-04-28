const replace = String.prototype.replace;

const greed = (arr) => {
  const points = [
    ["1,1,1,1,1", 1200],
    ["1,1,1,1", 1100],
    ["1,1,1", 1000],
    ["1,1", 200],
    ["1", 100],
    ["6,6,6", 600],
    ["5,5,5,5,5", 600],
    ["5,5,5,5", 550],
    ["5,5,5", 500],
    ["5,5", 100],
    ["5", 50],
    ["4,4,4", 400],
    ["3,3,3", 300],
    ["2,2,2", 200]
  ];

  let score = 0;
  let input = [...arr].sort().toString();

  points.forEach((value) => {
    if (input.includes(value[0])) {
      score += value[1];
      input = replace.call(input, value[0], "");
    }
  });

  return score;
};

module.exports = greed;