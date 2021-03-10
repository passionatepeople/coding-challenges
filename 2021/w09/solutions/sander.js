function rgb2Hex(r, g, b) {
  function pad(n) {
    let hex = (n < 10) ? '0' : ''
    hex += n.toString(16).toUpperCase()
    return (hex.length === 1) ? '0' + hex : hex
  }

  r = pad(r)
  g = (g !== undefined) ? pad(g) : r
  b = (b !== undefined) ? pad(b) : r

  return '#' + r + g + b
}

module.exports = rgb2Hex;