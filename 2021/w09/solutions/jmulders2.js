const rgb2Hex = (r, g, b) =>
  [r, g, b]
    .map((c) => (c < 0 ? 0 : c > 255 ? 255 : c).toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase()
    .padStart(7, '#');

module.exports = rgb2Hex;