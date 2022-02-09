const indexOf = String.prototype.indexOf
const lastIndexOf = String.prototype.lastIndexOf
const toLowerCase = String.prototype.toLowerCase

const imSpecial = (s) => {
  const ls = toLowerCase.call(s)

  for (let i = 0; i < s.length; i++) {
    if (indexOf.call(ls, ls[i]) === lastIndexOf.call(ls, ls[i])) {
      return s[i]
    }
  }

  return ""
};

module.exports = imSpecial;
