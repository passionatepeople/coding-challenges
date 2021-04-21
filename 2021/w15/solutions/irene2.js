const caseSingleWord = str => {
  const first = str[0];
  return first.toLowerCase() === first ? str : str.toLowerCase();
}

const cache = new Map();
const camelCase = str => {
  let val = cache.get(str);
  if (val) return val;

  val = str[0].toUpperCase().concat(str.substring(1).toLowerCase());
  cache.set(str, val);
  return val;
}

const fixCase = input => {
  const split = input.split(/-+|_+/g);
  const { length } = split;
  if (length === 1) {
    return caseSingleWord(input);
  }

  let res = split[0].toLowerCase();
  for (let i = 1; i < length; i++) {
    res = res.concat(camelCase(split[i]));
  }
  return res;
};

module.exports = fixCase;
