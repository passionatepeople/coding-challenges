module.exports = (int32) => {
  const limit = 255;
  const p1 = int32 & limit;
  const p2 = ((int32 >> 8) & limit);
  const p3 = ((int32 >> 16) & limit);
  const p4 = ((int32 >> 24) & limit);

  return `${p4}.${p3}.${p2}.${p1}`;
};
