module.exports = (r, g, b) =>
  `#${(
    "000000" +
    new Uint8ClampedArray([r, g, b])
      .reduce((result, value) => (result << 8) | value, 0)
      .toString(16)
      .toUpperCase()
  ).slice(-6)}`;