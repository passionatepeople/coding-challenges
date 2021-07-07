function permutateMe(string) {
  const len = string.length;
  if (len < 2) {
    return [string];
  }
  
  const result = [];
  
  for (let i = 0; i < len; i++) {
    const currentChar = string[i];

    if (string.indexOf(currentChar) === i) {
      const remainingChars = string.slice(0, i) + string.slice(i + 1, len);
      const permutationOfRemainingChars = permutateMe(remainingChars);

      for (let j = 0; j < permutationOfRemainingChars.length; j++) {
        result.push(currentChar + permutationOfRemainingChars[j]);
      }
    }
  }
  
  return result;
}

module.exports = permutateMe;