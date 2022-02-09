const toLowerCase = String.prototype.toLowerCase

module.exports = str => {
  const len = str.length
  const s = toLowerCase.call(str)
  let i, ch
  for (i = 0; i < len; i++) {
    ch = s[i]
    if (s.indexOf(ch) === s.lastIndexOf(ch))
      return str[i]
  }
  return ''
}
