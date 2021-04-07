const int2IP = (int32) => {
  const fourth = int32 & 255;
  const third = int32 >> 8 & 255;
  const second = int32 >> 16 & 255;
  const first = int32 >> 24 & 255;

  return `${first}.${second}.${third}.${fourth}`;
};

module.exports = int2IP;
