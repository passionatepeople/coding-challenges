const permutateMe = (string) => {
  if (string.length < 2) {
    return [string];
  }

  let permutations = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (string.indexOf(char) == i) {
      let remainder = string.slice(0, i) + string.slice(i + 1, string.length);

      for (let permutation of permutateMe(remainder)) {
        permutations.push(char + permutation);
      }
    }
  }
  return permutations;
};

module.exports = permutateMe;
