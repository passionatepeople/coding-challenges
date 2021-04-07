const int2IP = (int32) => {
  // your solution here
  let o = '';

  for (let i = 3; i >= 0; i--) {
      const m = Math.pow(256, i);
      const d = (int32 / m) | 0;

      o += (o ? '.' : '') + d;

      int32 = int32 - d * m;
  }

  return o;
};

module.exports = int2IP;
