function limit(v) {
  return Math.max(0, Math.min(v, 255));
}

function rgb2Hex(r, g, b){
  const buffer = Buffer.from([limit(r), limit(g), limit(b)],);
  return '#' + buffer.toString('hex').toUpperCase();
};

module.exports = rgb2Hex;
