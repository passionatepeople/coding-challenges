const slice = String.prototype.slice
const goAround = (str) => {
  const length = str.length
  const result = new Array(length)
  const s = str + str
  for (let i = 1; i <= length; i++) {
    result[i-1] = slice.call(s, i, i + length)
  }
  return result
}

module.exports = goAround;