const rgb2Hex = (r, g, b) => '#' + Buffer.from([ r < 0 ? 0 : r > 255 ? 255 : r, g < 0 ? 0 : g > 255 ? 255 : g, b < 0 ? 0 : b > 255 ? 255 : b], null ,3).toString('hex').toUpperCase();

module.exports = rgb2Hex
