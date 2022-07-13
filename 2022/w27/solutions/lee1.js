const summedIntervals = (intervals) => {
  // sort intervals
  const newArray = intervals.map((arr) => arr.slice());
  const sorted = [...newArray].sort((a, b) => a[0] - b[0]);
  let stack = [sorted[0]];
  let sum = 0;
  // push onto stack
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i][0] < stack[stack.length - 1][1]) {
      stack[stack.length - 1][1] = Math.max(
        sorted[i][1],
        stack[stack.length - 1][1]
      );
    } else {
      stack.push(sorted[i]);
    }
  }
  for (let i = 0; i < stack.length; i++) {
    let a = stack[i][1] - stack[i][0];
    sum += a;
  }
  return sum;
};

module.exports = summedIntervals;