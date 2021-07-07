const permutateMe = (string) => {
  if (string.length < 2) return [string];

  const charCache = new Map();
  const res = [];
  let char, subPerms, i, j;

  for (i = 0; i < string.length; i++) {
    char = string[i];

    if (charCache.has(char)) continue;
    charCache.set(char, true);

    subPerms = permutateMe(string.slice(0, i) + string.slice(i + 1));

    for (j = 0; j < subPerms.length; j++) {
      res.push(char + subPerms[j]);
    }
  }

  return res;
};

module.exports = permutateMe;