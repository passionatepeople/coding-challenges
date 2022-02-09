let indexOf = String.prototype.indexOf
let toLowerCase = String.prototype.toLowerCase
let i;

let imSpecial = (s) => {
  const l = toLowerCase.call(s)
  let c, idx;

  for (i = 0; i < s.length; i++) {
    c = l[i]
    idx = indexOf.call(l, c)
    if (indexOf.call(l, c, idx + 1) === -1) {
      return s[i]
    }
  }

  return ""
};

module.exports = imSpecial;
