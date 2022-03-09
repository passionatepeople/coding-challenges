const goAround = (str) => {
  let arr = [], cur, old;
  for (let i = 0; i < str.length; i++) {
    cur = str.slice(0, i);
    old = str.slice(i-str.length);
    arr[i] = old + cur;
  }
  arr.push(arr.shift());
  return arr;
};
module.exports = goAround;
