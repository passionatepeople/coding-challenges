module.exports = (int32) =>
  (int32 >>> 24) +
  "." +
  ((int32 >> 16) & 255) +
  "." +
  ((int32 >> 8) & 255) +
  "." +
  (int32 & 255);