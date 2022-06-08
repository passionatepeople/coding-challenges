const expand = (num) => {
  let arr = [],
    res = 0;

  while (num) {
    let n = num % 10;
    const square = n * n;
    arr.push(square);
    num = ~~(num / 10);
  }

  let len = arr.length;

  while (len--) {
    res *= arr[len] < 10 ? 10 : 100;
    res += arr[len];
  }

  return res;
};

module.exports = expand;