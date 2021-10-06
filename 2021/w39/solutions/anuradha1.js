const removeDupes = (string) => {
  if (string.length <=1) return string;
  let result = string[0];
  for (let i = 1; i < string.length; i++) {
    const curr = string.charCodeAt(i) % 32;
    if (string.charCodeAt(i-1) % 32 !== curr || curr > 26) {
      result += string[i];
    }
  }
  return result;
};

module.exports = removeDupes;