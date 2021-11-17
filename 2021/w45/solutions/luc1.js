const charCodeAt = String.prototype.charCodeAt;
const maskIt = (s, n) => {
  const m = (n >>> 0).toString(2);
  const ml = m.length;
  let a = '';
  let x = 0;
  let y = 0;
  const sl = s.length;
  while (x < sl) {
    c = charCodeAt.call(s, x);
    if (!((c<91&&c>65)||(c<123&&c>96))) {
      a += String.fromCharCode(c);
      x++;
      continue;
    }
    a += String.fromCharCode(c+(c>96?-1:1)*(m[y%ml]==1)*32);
    x++;
    y++;
  }
  return a;
}

module.exports = maskIt;