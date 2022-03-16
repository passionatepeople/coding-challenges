const toUnix = Date.parse;
const floor = Math.floor;
const slice = Array.prototype.slice;
const divisor = 31557600000;

const ageMedian = (birthdates, onDate) => {
  const base = toUnix(onDate);

  const length = birthdates.length;
  const dates = slice.call(birthdates, 0);

  // Custom selection sort
  for (let i = 0; i < length; i++) {
    let minimum = i;
    for (let j = i + 1; j < length; j++) {
      if (dates[minimum] > dates[j]) {
        minimum = j;
      }
    }
    if (minimum !== i) {
      [dates[i], dates[minimum]] = [dates[minimum], dates[i]];
    }
  }

  const mid = floor(length / 2);

  const a = toUnix(dates[mid]);
  const diffA = base - a;
  const ageA = (diffA / divisor) | 0;

  if (length % 2) {
    return ageA;
  }

  const b = toUnix(dates[mid - 1]);
  const diffB = base - b;
  const ageB = (diffB / divisor) | 0;

  const mean = (ageA + ageB) / 2;

  return mean;
};

module.exports = ageMedian;
