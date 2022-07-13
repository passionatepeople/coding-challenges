const sort = ([a, b, c, d]) => {
  let x = a[0],
    y = b[0];

  const sorted = new Array();

  if (x < y) {
    sorted[0] = a;
    sorted[1] = b;
  } else {
    sorted[0] = b;
    sorted[1] = a;
  }

  if (c) {
    x = c[0];
    if (x < sorted[0][0]) {
      sorted[2] = sorted[1];
      sorted[1] = sorted[0];
      sorted[0] = c;
    } else if (x < sorted[1][0]) {
      sorted[2] = sorted[1];
      sorted[1] = c;
    } else {
      sorted[2] = c;
    }
  }

  if (d) {
    x = d[0];
    if (x < sorted[0][0]) {
      sorted[3] = sorted[2];
      sorted[2] = sorted[1];
      sorted[1] = sorted[0];
      sorted[0] = d;
    } else if (x < sorted[1][0]) {
      sorted[3] = sorted[2];
      sorted[2] = sorted[1];
      sorted[1] = d;
    } else if (x < sorted[2][0]) {
      sorted[3] = sorted[2];
      sorted[2] = d;
    } else {
      sorted[3] = d;
    }
  }

  return sorted;
};

const summedIntervals = (intervals) => {
  const length = intervals.length,
    sorted = sort(intervals);

  let a = sorted[0],
    sum = a[1] - a[0],
    lastNumber = a[1];

  for (let i = 1; i < length; ++i) {
    const [s, e] = sorted[i];

    if (lastNumber >= e) {
      continue;
    }

    if (s >= lastNumber) {
      sum += e - s;
    } else {
      sum += e - lastNumber;
    }
    lastNumber = e;
  }

  return sum;
};

module.exports = summedIntervals;