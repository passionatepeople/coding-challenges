const charCodeAt = String.prototype.charCodeAt
const fromCharCode = String.fromCharCode

const masks = Array(100).fill().map((_, i) => i.toString(2))

const maskIt = (string, number) => {
  if (!number) {
    return string;
  }

  const mask = masks[number]
  const maskLength = mask.length;
  let maskIndex = 0;

  const length = string.length

  let result = ''

  for (let i = 0; i < length; i++) {
    const char = string[i];
    const code = charCodeAt.call(char, 0)
    const transformCode = mask[maskIndex] === '1' ? 32 : 0

    if(code >= 65 && code <= 90) {
      result += fromCharCode(code + transformCode)

      if (maskIndex === maskLength - 1) {
        maskIndex = 0
      } else {
        maskIndex += 1
      }
    } else if (code >= 97 && code <= 122) {
      result += fromCharCode(code - transformCode)

      if (maskIndex === maskLength - 1) {
        maskIndex = 0
      } else {
        maskIndex += 1
      }
    } else {
      result += char
    }
  }

  return result;
};

module.exports = maskIt;
