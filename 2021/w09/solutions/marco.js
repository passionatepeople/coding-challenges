const toHex = (i) => `0${(i < 0 ? 0 : i > 255 ? 255 : i).toString(16)}`.slice(-2)

const rgb2Hex = (r, g, b) => {
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase()
}

module.exports = rgb2Hex
