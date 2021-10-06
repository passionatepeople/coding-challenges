const removeDupes = (string) => {
  if (string.length <=1) return string;
  let result = string[0];
  for (let i = 1; i < string.length; i++) {
    const currentInLowerCase = string[i].toLowerCase();
    if (string[i-1].toLowerCase() !== currentInLowerCase || currentInLowerCase === string[i].toUpperCase()) {
      result += string[i];
    }
  }
  return result;
};

module.exports = removeDupes;