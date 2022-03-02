const supermarket = (arr, tills) => {
  if (arr.length <= tills) return Math.max(...arr);
  arr = new Float64Array(arr);
  let cur = arr.slice(0, tills).sort();
  for (let i = tills; i < arr.length; i++) {
    cur[0] = cur[0] + arr[i];
    cur.sort();
  }
  return cur[tills - 1];
};

module.exports = supermarket;