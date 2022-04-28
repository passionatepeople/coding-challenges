const pointer = [
  [0],
  [0, 100, 200, 1000, 1100, 1200],
  [0, 0, 0, 200, 200, 200],
  [0, 0, 0, 300, 300, 300],
  [0, 0, 0, 400, 400, 400],
  [0, 50, 100, 500, 550, 600],
  [0, 0, 0, 600, 600, 600],
];

const greed = (arr) => {
  let counter = [0, 0, 0, 0, 0, 0, 0],
    result = 0;

  for (let i = 0; i < 5; ++i) {
    let point = arr[i];
    result +=
      -pointer[point][counter[point]] + pointer[point][++counter[point]];
  }

  return result;
};

module.exports = greed;