module.exports = (fi, si) => {
  let f = fi, s = si, res = 0, m = 1, d1, d2;

  while (f > 10) {
    f = f / 10;
  }
  f = ~~f

  while (s > 10) {
    s = s / 10;
  }
  s = ~~s;

  while (fi > 0) {
    let r = fi % 10;
    if (fi < 10) {
      d1 = res + s * m;
      break;
    }
    res = res + r * m;
    m *= 10;
    fi = ~~(fi / 10);
  }

  res = 0;
  m = 1

  while (si > 0) {
    let r = si % 10;
    if (si < 10) {
      d2 = res + f * m;
      break;
    }
    res = res + r * m;
    m *= 10;
    si = ~~(si / 10);
  }

  res = d1 - d2;
  return res < 0 ? -res : res;
}