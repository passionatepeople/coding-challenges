const isUpperCase = charCode => charCode >= 65 && charCode <= 90;
const isLowerCase = charCode => charCode >= 97 && charCode <= 122;

const toUpperCase = charCode => String.fromCharCode(charCode - 32);
const toLowerCase = charCode => String.fromCharCode(charCode + 32);
const charCodeAt = String.prototype.charCodeAt;

const isLetter = (charCode) => isUpperCase(charCode) || isLowerCase(charCode);

const maskIt = (string, number) => {
  // your solution here
  const binary = number.toString(2);
  const binaryLength = binary.length;

  let masked = '';
  let skipped = 0;

  for (let i = 0; i < string.length; i++) {
    const charCode = charCodeAt.call(string, i);
    const char = string[i];
    if (isLetter(charCode)) {
      const maskValue = binary[(i-skipped) % binaryLength];
      if(maskValue === "1"){
        const flipped = isUpperCase(charCode) ? toLowerCase(charCode) : toUpperCase(charCode);
        masked += flipped;
      }else{
        masked += char;
      }
    }else{
      masked += char;
      skipped++;
    }
  }

  return masked;
};

module.exports = maskIt;
