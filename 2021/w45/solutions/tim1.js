const charCodeAt = String.prototype.charCodeAt;
const isUpperCase = charCode => charCode >= 65 && charCode <= 90;
const isLowerCase = charCode => charCode >= 97 && charCode <= 122;

const isLetter = (charCode) => isUpperCase(charCode) || isLowerCase(charCode);

const toUpperTable = []
for (let i = 97; i <= 122; i++) {
  toUpperTable[i] = String.fromCharCode(i - 32);
}

const toLowerTable = []
for (let i = 65; i <= 90; i++) {
  toLowerTable[i] = String.fromCharCode(i + 32);
}

const maskIt = (string, number) => {
  // your solution here
  const stringLength = string.length;
  const binary = number.toString(2);
  const binaryLength = binary.length;

  let masked = '';
  let skipped = 0;

  for (let i = 0; i < stringLength; i++) {
    const charCode = charCodeAt.call(string, i);
    const char = string[i];
    if (isLetter(charCode)) {
      const maskValue = binary[(i-skipped) % binaryLength];
      if(maskValue === "1"){
        const flipped = isUpperCase(charCode) ? toLowerTable[charCode] : toUpperTable[charCode];
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
