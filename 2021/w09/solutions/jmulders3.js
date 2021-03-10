const rgb2Hex = (r, g, b) =>
  [r, g, b]
    .reduce(
      (t, c) =>
        `${t}${(c < 0 ? 0 : c > 255 ? 255 : c).toString(16).padStart(2, '0')}`,
      '#'
    )
    .toUpperCase();

module.exports = rgb2Hex;