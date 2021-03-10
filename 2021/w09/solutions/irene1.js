const toHex = num => Math.min(255, Math.max(num, 0)).toString(16).padStart(2, "0");
const rgb2Hex = (r, g, b) => `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
module.exports = rgb2Hex;