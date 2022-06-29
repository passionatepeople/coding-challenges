const flat = (arr, result = []) => {
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i]
    if (typeof val == "object") {
      flat(val, result)
    } else {
      const idx = result.findIndex(v => v > val);
      if (idx === -1) {
        result.push(val)
      } else {
        result.splice(idx, 0, val)
      }
    }
  }
  return result;
}

module.exports = flat