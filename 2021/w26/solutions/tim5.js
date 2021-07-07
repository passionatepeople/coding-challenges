const permutateMe = (string) => {
  // shortcut 1
  if (string[1] === undefined) {
    return [string];
  }

  // shortcut 2
  if (string.length < 3 && string[1] != string[0]) {
    return [string, string[1] + string[0]];
  }

  // shortcut 3
  if (string.length < 4 && string[1] != string[0] && string[1] != string[2] && string[0] != string[2]) {
    return [
      string,
      string[2] + string[1] + string[0],
      string[2] + string[0] + string[1],
      string[0] + string[2] + string[1],
      string[1] + string[2] + string[0],
      string[1] + string[0] + string[2],
    ];
  }

  let permutations = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (string.indexOf(char) == i) {
      let remainder = string.slice(0, i) + string.slice(i + 1, string.length);

      const result = permutateMe(remainder);
      for (let j = 0; j < result.length; j++) {
        permutations.push(char + result[j]);
      }
    }
  }
  return permutations;
};

module.exports = permutateMe;
