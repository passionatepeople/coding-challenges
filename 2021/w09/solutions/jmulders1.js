const rgb2Hex = (...rgb) =>
  [
    '#',
    ...rgb.map((c) =>
      (c < 0 ? 0 : c > 255 ? 255 : c).toString(16).padStart(2, '0')
    ),
  ]
    .join('')
    .toUpperCase();

module.exports = rgb2Hex;
