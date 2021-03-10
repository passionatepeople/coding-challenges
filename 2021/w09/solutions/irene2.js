const convert = num => num > 255 ? 255 : num < 0 ? 0 : num;
const rgb2Hex = (r, g, b) => `#${((1 * 16777216) + (convert(r) * 65536) + (convert(g) * 256) + convert(b)).toString(16).slice(1).toUpperCase()}`;
module.exports = rgb2Hex;