const isUpperCase = charCode => charCode >= 65 && charCode <= 90;
const isLowerCase = charCode => charCode >= 97 && charCode <= 122;

const isLetter = (charCode) => isUpperCase(charCode) || isLowerCase(charCode);

const toUpperTable = []
for (let i = 97; i <= 122; i++) {
  toUpperTable[i] = i - 32
}

const toLowerTable = []
for (let i = 65; i <= 90; i++) {
  toLowerTable[i] = i + 32;
}

const binaryTable = []
for (let i = 0; i <= 99; i++) {
  binaryTable[i] = i.toString(2);
}

const maskIt = (string, number) => {
  // your solution here
  const binary = binaryTable[number];
  const binaryLength = binary.length;
  const bString = Buffer.from(string);

  let skipped = 0;

  for (let i = 0; i < bString.length; i++) {
    const charCode = bString[i]
    if (isLetter(charCode)) {
      const maskValue = binary[(i-skipped) % binaryLength];
      if(maskValue === "1"){
        const flipped = isUpperCase(charCode) ? toLowerTable[charCode] : toUpperTable[charCode];
        bString[i] = flipped;
      }
    }else{
      skipped++;
    }
  }

  return bString.toString();
};

module.exports = maskIt;
