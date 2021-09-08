module.exports = a => {
  let n = '';
  let s = '' + a;
  let l = s.length;
  let z = '';

  const io = s.indexOf('0')

  if(io === -1 || io === l - 1) return a;

  while (l--) {
    if(s[l] !== '0') {
      n = s[l] + n;
    } else {
      z += '0';
    }

    if(l === io) {
      n = s.slice(0, l) + n
      break;
    }
  }

  return Number(n + z);
};
