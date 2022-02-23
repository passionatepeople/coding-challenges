module.exports = arr => {
  let v = arr[0],
      max = v,
      min = v,
      len = arr.length,
      i = 1

  for(; i < len; i++) {
    v = arr[i]
    v > max ? (max = v) : (v < min && (min = v))
  }

  return [min, max]
}
