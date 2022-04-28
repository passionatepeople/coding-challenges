const greed = (arr) => {
  let counts = [0, 0, 0, 0, 0, 0];
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    counts[arr[i] - 1]++;
  }
  if (counts[0] === 5) {
    res += 1200;
  } else if (counts[0] === 4) {
    res += 1100;
  } else if (counts[0] === 3) {
    res += 1000;
  } else if (counts[0] === 2) {
    res += 200;
  } else if (counts[0] === 1) {
    res += 100;
  }
  if (counts[4] === 5) {
    res += 600;
  } else if (counts[4] === 4) {
    res += 550;
  } else if (counts[4] === 3) {
    res += 500;
  } else if (counts[4] === 2) {
    res += 100;
  } else if (counts[4] === 1) {
    res += 50;
  }
  if (counts[1] > 2) {
    res += 200;
  }
  if (counts[2] > 2) {
    res += 300;
  }
  if (counts[3] > 2) {
    res += 400;
  }
  if (counts[5] > 2) {
    res += 600;
  }

  return res;
};

module.exports = greed;