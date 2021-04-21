// "Seen" states
const UPPERCASE = 0;
const LOWERCASE = 1;
const SEPARATOR = 2;

// Character class tests
const IS_UPPERCASE = /\p{Lu}/u;
const IS_ALPHANUMERIC = /\p{L}|\p{Nd}/u;

// Transform input to camelCase. UTF-8 compatible.
const fixCase = (input) => {
  let result = "";
  let seen = UPPERCASE;
  let codepoint;
  for (const codepoint of input) {
    if (IS_UPPERCASE.test(codepoint)) {
      result += seen === UPPERCASE ? codepoint.toLowerCase() : codepoint;
      seen = UPPERCASE;
      continue;
    }
    if (IS_ALPHANUMERIC.test(codepoint)) {
      result += seen === SEPARATOR ? codepoint.toUpperCase() : codepoint;
      seen = LOWERCASE;
      continue;
    }
    if (codepoint === "'") {
      result += codepoint;
      seen = seen === LOWERCASE ? LOWERCASE : UPPERCASE;
      continue;
    }
    seen = SEPARATOR;
  }
  return result;
};

module.exports = fixCase;