const cache = new Map();

const componentToHex = (c) => {
  if (cache.has(c)) {
    return cache.get(c);
  }

  const clamped = c < 0 ? 0 : c > 255 ? 255 : c;
  const hex = clamped.toString(16);
  const safeHex = hex.length === 1 ? "0" + hex : hex;
  const result = safeHex.toUpperCase();
  cache.set(c, result);
  return result;
};

function rgb2Hex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

module.exports = rgb2Hex;