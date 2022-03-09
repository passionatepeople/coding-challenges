const slice = String.prototype.slice

const goAround = (str) => {
  const res = []
  const length = str.length
  for (let i = 1; i <= length; i++) {
    const part1 = slice.call(str, i)
    const part2 = slice.call(str, 0,i)
    res.push(part1 + part2)
  }
  return res
}

module.exports = goAround;