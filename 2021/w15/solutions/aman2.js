const UPPER_A = 65, UPPER_Z = 90, LOWER_A = 97, LOWER_Z = 122, MINUS = 45, UNDERSCORE = 95, SINGLE_QUOTE = 39;
const isUpperCase = c => UPPER_A <= c && c <= UPPER_Z;
const isLowerCase = c => LOWER_A <= c && c <= LOWER_Z;
const toUpperCase = c => c - 32;
const toLowerCase = c => c + 32;

const fixCase = (str) => {
  const arr = [];
  let changeToLower = false, changeToUpper = false;

  for (let i = 0, len = str.length; i < len; i++) {
    let c = str.charCodeAt(i);

    if (c === UNDERSCORE || c === MINUS) {
      changeToUpper = true;
      continue;
    }

    if (c === SINGLE_QUOTE) {
      arr.push(c);
      continue;
    }

    if (changeToUpper) {
      if (isLowerCase(c)) {
        arr.push(toUpperCase(c));
      } else {
        arr.push(c);
      }
      changeToUpper = false;
      changeToLower = true;
      continue;
    }

    if (isUpperCase(c)) {
      if (i === 0 || changeToLower) {
        arr.push(toLowerCase(c));
      } else {
        arr.push(c);
      }
      changeToLower = true;
    } else {
      arr.push(c);
      changeToLower = false;
    }
  }

  return String.fromCharCode.apply(undefined, arr);
};

module.exports = fixCase;
