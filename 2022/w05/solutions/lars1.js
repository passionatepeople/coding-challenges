const indexOf = String.prototype.indexOf;
const lastIndexOf = String.prototype.lastIndexOf;
const toLowerCase = String.prototype.toLowerCase;

const imSpecial = (str) => {
  const lookup = toLowerCase.call(str);
  const length = lookup.length;
  for (let i = 0; i < length; i++) {
    if (
      indexOf.call(lookup, lookup[i]) === lastIndexOf.call(lookup, lookup[i])
    ) {
      return str[i];
    }
  }

  return "";
};

module.exports = imSpecial;
