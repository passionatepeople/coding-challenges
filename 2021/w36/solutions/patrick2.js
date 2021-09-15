const findMinInt = (b) => {
  const a = [];
  for (let i = 0; i < b.length; i++) {
    if (typeof b[i] === "number" && isFinite(b[i]) && Math.floor(b[i]) === b[i]) {
      a.push(b[i])
    }
  }
  
  const d = (a) => {
    let min = a[0], max = a[0]
    for (let i = 1; i < a.length; i++) {
      let value = a[i]
      min = (value < min) ? value : min
      max = (value > max) ? value : max
    }
    return min
  }
  
  return d(a)
};

module.exports = findMinInt;
