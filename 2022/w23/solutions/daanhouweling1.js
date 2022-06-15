const swappedDiff = (first, second) => {
  const f = `${first}`;
  const s = `${second}`;

  return Math.abs(~~(s.charAt(0) + f.slice(1)) - ~~(f.charAt(0) + s.slice(1)));
};

module.exports = swappedDiff;