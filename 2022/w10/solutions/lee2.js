const { slice } = String.prototype;
const getAge = (birthDate, onDate) =>
  ~~((new Date(onDate).getTime() - new Date(birthDate).getTime()) / 3.15576e10);

const ageMedian = (birthdates, onDate) => {
  let dates = new Array(birthdates.length);

  let benchYear = +slice.call(onDate, 0, 4);
  let benchMonth = +slice.call(onDate, 5, 7);
  let benchDay = +slice.call(onDate, 8);
  for (let i = 0; i < birthdates.length; i++) {
    let thisYear = +slice.call(birthdates[i], 0, 4);
    let thisMonth = +slice.call(birthdates[i], 5, 7);
    let thisDay = +slice.call(birthdates[i], 8);
    if (thisYear === benchYear) {
      dates[i] = 0;
      continue;
    }
    let age = benchYear - thisYear;

    const hasHadBirthday =
      thisMonth < benchMonth ||
      (thisMonth === benchMonth && thisDay < benchDay);

    if (!hasHadBirthday) {
      age -= 1;
    }
    const isBirthday = thisMonth === benchMonth && thisDay === benchDay;
    if (isBirthday) {
      age = getAge(birthdates[i], onDate);
    }

    dates[i] = age;
  }

  return quickselect_median(dates);
};
module.exports = ageMedian;

// https://stackoverflow.com/a/56901151
function quickselect_median(arr) {
  const L = arr.length,
    halfL = L / 2;
  if (L % 2 == 1) return quickselect(arr, halfL);
  else return 0.5 * (quickselect(arr, halfL - 1) + quickselect(arr, halfL));
}

function quickselect(arr, k) {
  if (arr.length == 1) return arr[0];
  else {
    const pivot = arr[0];
    const lows = [],
      highs = [],
      pivots = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        lows.push(arr[i]);
      } else if (arr[i] > pivot) {
        highs.push(arr[i]);
      } else {
        pivots.push(arr[i]);
      }
    }
    if (k < lows.length) return quickselect(lows, k);
    else if (k < lows.length + pivots.length) return pivot;
    else return quickselect(highs, k - lows.length - pivots.length);
  }
}
