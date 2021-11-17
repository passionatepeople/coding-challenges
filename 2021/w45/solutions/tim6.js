// Shortcuts
const charCodeAt = String.prototype.charCodeAt;

// Helper functions
const isUpperCase = charCode => charCode >= 65 && charCode <= 90;
const isLetter = (charCode) => charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122;

const binaryTable = []
for (let i = 0; i <= 99; i++) {
  const singleMask = i.toString(2)
  let repeatedMask = singleMask.repeat(60/singleMask.length);
  binaryTable[i] = repeatedMask;
}

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
  const binary = binaryTable[number];

  let masked = '';
  let skipped = 0;

  for (let i = 0; i < stringLength; i++) {
    const charCode = charCodeAt.call(string, i);
    const char = string[i];
    if (isLetter(charCode)) {
      const maskValue = binary[i-skipped];
      if(maskValue == '1'){
        const flipped = isUpperCase(charCode) ? toLowerTable[charCode] : toUpperTable[charCode];
        masked += flipped;
      }else{
        masked += char;
      }
    }else{
      masked += char;
      ++skipped;
    }
  }

  return masked;
};

module.exports = maskIt;
