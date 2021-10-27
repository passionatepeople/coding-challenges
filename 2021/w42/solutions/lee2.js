const add = (a, b) => {
  let arr = [];
  let biggestLength = a.length > b.length ? a.length : b.length;
  let _a = a.padStart(biggestLength, "0");
  let _b = b.padStart(biggestLength, "0");
  let next = 0;

  for (let i = biggestLength - 1; i > -1; i--) {
    let total = next + +_a[i] + +_b[i];
    if (total > 9) {
      next = 1;
      arr.push(total - 10);
    } else {
      next = 0;
      arr.push(total);
    }
  }
  next === 1 && arr.push(next);

  if (arr[arr.length - 1] === 0) {
    let endingZeroes = 0;
    endingZeroes--;
    if (arr[arr.length - 2] === 0) {
      endingZeroes--;
      if (arr[arr.length - 3] === 0) {
        endingZeroes--;
      }
    }
    arr = arr.slice(0, endingZeroes);
  }
  return arr.reverse().join("");
};

module.exports = add;
