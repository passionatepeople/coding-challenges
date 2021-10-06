const normalize = (a) => {
  return (a.charCodeAt(0) - 1) % 32;
};

const removeDupes = (string) => {
  let result = string[0];
  let last = normalize(string[0]);

  for (let i = 1; i < string.length; i++) {
    const val = normalize(string[i]);
    if (val > 25 || val !== last) {
      result += string[i];
      last = val;
    }
  }
  return result;
};

module.exports = removeDupes;
