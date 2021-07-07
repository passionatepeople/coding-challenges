const permutateMe = (s) => {
  // shortcut 1
  if (s[1] === undefined) {
    return [s];
  }

  // shortcut 2
  if (s.length < 3 && s[1] != s[0]) {
    return [s, s[1] + s[0]];
  }

  // shortcut 3
  if (
    s.length < 4 &&
    s[1] != s[0] &&
    s[1] != s[2] &&
    s[0] != s[2]
  ) {
    return [
      s,
      s[2] + s[1] + s[0],
      s[2] + s[0] + s[1],
      s[0] + s[2] + s[1],
      s[1] + s[2] + s[0],
      s[1] + s[0] + s[2],
    ];
  }

  // shortcut 4
  if (
    s.length < 5 &&
    s[1] != s[0] &&
    s[1] != s[2] &&
    s[1] != s[3] &&
    s[1] != s[4] &&
    s[0] != s[2] &&
    s[0] != s[3] &&
    s[0] != s[4] &&
    s[2] != s[1] &&
    s[2] != s[3] &&
    s[2] != s[4] &&
    s[3] != s[1] &&
    s[3] != s[0] &&
    s[3] != s[4]
  ) {
    return [
      s,
      s[0] + s[1] + s[3] + s[2],
      s[0] + s[2] + s[1] + s[3],
      s[0] + s[2] + s[3] + s[1],
      s[0] + s[3] + s[1] + s[2],
      s[0] + s[3] + s[2] + s[1],

      s[1] + s[0] + s[2] + s[3],
      s[1] + s[0] + s[3] + s[2],
      s[1] + s[2] + s[0] + s[3],
      s[1] + s[2] + s[3] + s[0],
      s[1] + s[3] + s[0] + s[2],
      s[1] + s[3] + s[2] + s[0],

      s[2] + s[0] + s[1] + s[3],
      s[2] + s[0] + s[3] + s[1],
      s[2] + s[1] + s[0] + s[3],
      s[2] + s[1] + s[3] + s[0],
      s[2] + s[3] + s[0] + s[1],
      s[2] + s[3] + s[1] + s[0],

      s[3] + s[0] + s[1] + s[2],
      s[3] + s[0] + s[2] + s[1],
      s[3] + s[1] + s[0] + s[2],
      s[3] + s[1] + s[2] + s[0],
      s[3] + s[2] + s[0] + s[1],
      s[3] + s[2] + s[1] + s[0],
    ];
  }

  let permutations = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (s.indexOf(char) == i) {
      let remainder = s.slice(0, i) + s.slice(i + 1, s.length);

      const result = permutateMe(remainder);
      for (let j = 0; j < result.length; j++) {
        permutations.push(char + result[j]);
      }
    }
  }
  return permutations;
};

module.exports = permutateMe;
