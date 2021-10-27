const add = (a, b) => {
  let arr = [];
  let _a = a.split("").reverse(),
    _b = b.split("").reverse();
  for (let i = 0; i < _a.length; i++) {
    arr[i] = [];
    arr[i].push(parseInt(_a[i], 10));
  }
  for (let i = 0; i < _b.length; i++) {
    if (!arr[i]) arr[i] = [];
    if (parseInt(_b[i])) {
      arr[i].push(parseInt(_b[i], 10));
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = 0; j < arr[i].length; j++) {
      temp += arr[i][j];
    }
    if (temp > 9) {
      if (!arr[i + 1]) arr[i + 1] = [];
      arr[i + 1].push(1);
      temp -= 10;
    }
    arr[i] = temp;
  }
  if (arr[arr.length - 1] === 0) {
    arr.pop();
  }
  if (arr[arr.length - 1] === 0) {
    arr.pop();
  }
  if (arr[arr.length - 1] === 0) {
    arr.pop();
  }
  return arr.reverse().join("");
};

module.exports = add;
