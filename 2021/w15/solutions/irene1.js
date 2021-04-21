
const isAllCaps = string => string === string.toUpperCase();
const lowerCaseFirst = string => string.charAt(0).toLowerCase() + string.slice(1);
const camelCase = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

const fixCase = (input) => {
  const split = input.split(/\-+|_+/g);

  if (split.length === 1) {
    return isAllCaps(input) ? input.toLowerCase() : lowerCaseFirst(input);
  }

  let result = split[0].toLowerCase();
  for (let i = 1; i < split.length; i++) {
    result += camelCase(split[i]);
  }
  return result;
};

module.exports = fixCase;
