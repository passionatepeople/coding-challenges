const greed = a => {
  const o = {1:0,2:0,3:0,4:0,5:0,6:0};
  const n = a.length;
  let s = 0;
  for (let i = 0; i < n; i++) {
    const r = a[i];
    o[r] += 1;
    if (o[r] === 3) {
      s += r !== 1 ? 100 * r : 1000;
      o[r] = 0;
    }
  }
  return s + 100 * o[1] + 50 * o[5];
}

module.exports=greed