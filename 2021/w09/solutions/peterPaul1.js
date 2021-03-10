const chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
const hex = (n) => {
  n = n < 0 ? 0 : n > 255 ? 255 : n
  return chars[n >> 4] + chars[n % 16]
}
const rgb2Hex = (r, g, b) => '#' + hex(r) + hex(g) + hex(b)

module.exports = rgb2Hex