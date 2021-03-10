const bytes = new Array(256)
const chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
for (let i = 256; i--;) bytes[i] = chars[i >> 4] + chars[i % 16]
const hex = n => bytes[n < 0 ? 0 : n > 255 ? 255 : n]
module.exports = (r, g, b) => '#' + hex(r) + hex(g) + hex(b)