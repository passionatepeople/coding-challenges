// "Seen" states
const UC = 0;
const LC = 1;
const SEP = 2;
const fromCharCode = String.fromCharCode;

// Transform ASCII input to camelCase. Not UTF-8 compatible.
const fixCase = (input) => {
  let result = "";
  for (let i = 0, seen = UC, char; i < input.length; i++) {
    char = input.charCodeAt(i);
    if (char > 64 && char < 91) {
      result += fromCharCode(seen === UC ? char + 32 : char);
      seen = UC;
    } else if ((char > 47 && char < 58) || (char > 96 && char < 123)) {
      result += fromCharCode(seen === SEP ? char - 32 : char);
      seen = LC;
    } else if (char === 39) {
      result += "'";
      seen = seen === LC ? LC : UC;
    } else {
      seen = SEP;
    }
  }
  return result;
};

module.exports = fixCase;
