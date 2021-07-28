function chopChop(str, size = 2, pad = "_") {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }
  if (chunks[chunks.length - 1].length !== size) {
    chunks[chunks.length - 1] = chunks[chunks.length - 1].padEnd(size, pad);
  }
  return chunks;
}

module.exports = chopChop;
