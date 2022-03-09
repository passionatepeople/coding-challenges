const goAround = (s) => {
  let length = s.length,
    result = [],
    index = 1;

  if (length === 4) {
    return [
      s[1] + s[2] + s[3] + s[0],
      s[2] + s[3] + s[0] + s[1],
      s[3] + s[0] + s[1] + s[2],
      s,
    ];
  }

  if (length === 5) {
    return [
      s[1] + s[2] + s[3] + s[4] + s[0],
      s[2] + s[3] + s[4] + s[0] + s[1],
      s[3] + s[4] + s[0] + s[1] + s[2],
      s[4] + s[0] + s[1] + s[2] + s[3],
      s,
    ];
  }

  if (length === 6) {
    return [
      s[1] + s[2] + s[3] + s[4] + s[5] + s[0],
      s[2] + s[3] + s[4] + s[5] + s[0] + s[1],
      s[3] + s[4] + s[5] + s[0] + s[1] + s[2],
      s[4] + s[5] + s[0] + s[1] + s[2] + s[3],
      s[5] + s[0] + s[1] + s[2] + s[3] + s[4],
      s,
    ];
  }

  if (length === 7) {
    return [
      s[1] + s[2] + s[3] + s[4] + s[5] + s[6] + s[0],
      s[2] + s[3] + s[4] + s[5] + s[6] + s[0] + s[1],
      s[3] + s[4] + s[5] + s[6] + s[0] + s[1] + s[2],
      s[4] + s[5] + s[6] + s[0] + s[1] + s[2] + s[3],
      s[5] + s[6] + s[0] + s[1] + s[2] + s[3] + s[4],
      s[6] + s[0] + s[1] + s[2] + s[3] + s[4] + s[5],
      s,
    ];
  }

  if (length === 8) {
    return [
      s[1] + s[2] + s[3] + s[4] + s[5] + s[6] + s[7] + s[0],
      s[2] + s[3] + s[4] + s[5] + s[6] + s[7] + s[0] + s[1],
      s[3] + s[4] + s[5] + s[6] + s[7] + s[0] + s[1] + s[2],
      s[4] + s[5] + s[6] + s[7] + s[0] + s[1] + s[2] + s[3],
      s[5] + s[6] + s[7] + s[0] + s[1] + s[2] + s[3] + s[4],
      s[6] + s[7] + s[0] + s[1] + s[2] + s[3] + s[4] + s[5],
      s[7] + s[0] + s[1] + s[2] + s[3] + s[4] + s[5] + s[6],
      s,
    ];
  }

  for (; index < length; ++index) {
    result.push(s.slice(index) + s.slice(0, index));
  }
  result.push(s);

  return result;
};

module.exports = goAround;
