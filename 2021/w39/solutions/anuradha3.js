const charCodeAt = String.prototype.charCodeAt;

function removeDupes(string) {
  if (string.length <=1) return string;
  let result = string[0];
  for (let i = 1; i < string.length; i++) {
    const curr = charCodeAt.call(string, i) % 32;
    if (curr > 26 || charCodeAt.call(string, i-1) % 32 !== curr) {
      result += string[i];
    }
  }
  return result;
};

module.exports = removeDupes;