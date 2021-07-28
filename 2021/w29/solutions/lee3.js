function chopChop(str, size, pad) {
  const _size = size || 2;
  const _pad = pad || "_";
  const numChunks = Math.ceil(str.length / _size);
  const chunks = new Array(numChunks);

  for (let i = 0, o = 0; i < numChunks; ++i, o += _size) {
    chunks[i] = str.substr(o, _size);
  }
  if (chunks[chunks.length - 1].length !== _size) {
    chunks[chunks.length - 1] = chunks[chunks.length - 1].padEnd(_size, _pad);
  }
  return chunks;
}

module.exports = chopChop;
