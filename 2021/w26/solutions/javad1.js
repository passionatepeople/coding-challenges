function removeChar(string, idx) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (i !== idx) result += string[i];
  }
  return result;
}

// accept sorted string
function permutations(inputStr) {
  if (inputStr.length < 2) {
    return [inputStr];
  }

  const allPermutations = [];

  for (let i = 0; i < inputStr.length; i++) {
    const char = inputStr[i];

    // skip the char if its duplicated
    if (i > 0 && inputStr[i] === inputStr[i - 1]) continue;

    const remainingChars = removeChar(inputStr, i);

    // get all permutations of the remaining items
    const remainingPermutations = permutations(remainingChars);

    // add the char to the beginning of each permutation
    for (let j = 0; j < remainingPermutations.length; j++) {
      allPermutations.push(char + remainingPermutations[j]);
    }
  }
  return allPermutations;
}

const permutateMe = (str) => permutations(str.split("").sort().join(""));

module.exports = permutateMe;

