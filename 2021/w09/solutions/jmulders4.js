const convert = (c) =>
  (c < 0 ? 0 : c > 255 ? 255 : c).toString(16).padStart(2, '0');

const rgb2Hex = (r, g, b) =>
  `#${convert(r)}${convert(g)}${convert(b)}`.toUpperCase();

module.exports = rgb2Hex;