const rgb2Hex = (r, g, b) => {
  return '#' + ((1 << 24) + (Math.min(Math.max(r, 0), 255) << 16) + (Math.min(Math.max(g, 0), 255) << 8) + Math.min(Math.max(b, 0), 255)).toString(16).toUpperCase().slice(1);
};

module.exports = rgb2Hex;
