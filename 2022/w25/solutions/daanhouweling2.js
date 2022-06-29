module.exports = (arr) => {
  const stack = [], res = [];
  let i = arr.length;
  while(i--) stack[i] = arr[i];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      i = next.length;
      while(i--) stack.push(next[i]);
    } else {
      let low = 0,
          high = res.length;
      while (low < high) {
        const mid = (low + high) >>> 1;
        if (res[mid] < next) low = mid + 1;
        else high = mid;
      }
      res.splice(low , 0, next);
    }
  }
  return res;
};