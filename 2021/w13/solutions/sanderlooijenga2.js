const int2IP = (int32) => {
  let str = '';

  str += (((int32 / 16777216) | 0) % 256) + '.';
  str += (((int32 / 65536) | 0) % 256) + '.';
  str += (((int32 / 256) | 0) % 256) + '.';
  str += int32 % 256;

  return str;
};

module.exports = int2IP;