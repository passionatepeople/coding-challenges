const getLowerCase = (charCode) => String.fromCharCode(charCode + 32)
const getUpperCase = (charCode) => String.fromCharCode(charCode - 32)

const fixCase = (input) => {
  let result = ''
  let lastCharCode = 0

  for (const character of input) {
    const charCode = character.charCodeAt(0);

    if (charCode === 45 || charCode === 95) {
      lastCharCode = charCode
      continue;
    }

    // transform first letter to lower case
    if (lastCharCode === 0) {
      result = charCode > 64 && charCode < 91 ? getLowerCase(charCode) : character
      lastCharCode = charCode
      continue;
    }

    // Ignore apos during the transforms, but keep it in the result
    if (charCode === 39) {
      result = result + character
      continue;
    }

    // transform first letter right after separator
    if (lastCharCode === 45 || lastCharCode === 95) {
      result = result + (charCode > 96 && charCode < 123 ? getUpperCase(charCode) : character)
      lastCharCode = charCode
      continue;
    }

    // if previous letter is uppercase, transform to lowercase
    if (lastCharCode > 64 && lastCharCode < 91) {
      result = result + (charCode > 64 && charCode < 91 ? getLowerCase(charCode) : character)
      lastCharCode = charCode
      continue;
    }

    // Previous is lowercase and current is uppercase should remain
    if (charCode > 64 && charCode < 91 && !(lastCharCode > 96 && lastCharCode < 123)) {
      result = result + getLowerCase(charCode)
      lastCharCode = charCode
      continue;
    }

    result = result + character
    lastCharCode = charCode;
  }

  return result
};

module.exports = fixCase;