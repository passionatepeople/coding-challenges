const int2IP = (int32) =>
  ((int32 >> 24) & 255) +
  '.' +
  ((int32 >> 16) & 255) +
  '.' +
  ((int32 >> 8) & 255) +
  '.' +
  (int32 & 255)

module.exports = int2IP