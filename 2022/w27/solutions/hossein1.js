const axis = new Uint8Array(1244);

const summedIntervals = (intervals) => {
  let sum = 0;
  axis.fill(0);

  for (let i = 0, il = intervals.length; i < il; ++i) {
    for (let j = intervals[i][0]; j < intervals[i][1]; ++j) {
      if (axis[j] == 0) {
        sum += 1;
        axis[j] = 1;
      }
    }
  }

  return sum;
};

module.exports = summedIntervals;