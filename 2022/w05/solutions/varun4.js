let indexOf = String.prototype.indexOf
let lastIndexOf = String.prototype.lastIndexOf
let toLowerCase = String.prototype.toLowerCase
let i;

let imSpecial = (s) => {
  const l = toLowerCase.call(s)

  for (i = 0; i < s.length; i++) {
    let c = l[i]
    if (indexOf.call(l, c) === lastIndexOf.call(l, c)) {
      return s[i]
    }
  }

  return ""
};

module.exports = imSpecial;
