// Accept sorted string
// sharedCache is not a global cache. I use it to keep the result of substrings in recursive calls.
// each time you call permutateMe function the cache will get reset
function permutations(inputStr, sharedCache = {}) {
  if (inputStr.length < 2) {
    return [inputStr];
  }
  if (sharedCache[inputStr]) return sharedCache[inputStr];

  const allPermutations = [];

  for (let i = 0; i < inputStr.length; i++) {
    const char = inputStr[i];

    // skip the char if its duplicated
    if (i > 0 && inputStr[i] === inputStr[i - 1]) continue;

    let remainingChars = "";
    for (let j = 0; j < inputStr.length; j++) {
      if (j !== i) remainingChars += inputStr[j];
    }

    // get all permutations of the remaining items
    const remainingPermutations = permutations(remainingChars, sharedCache);

    // add the char to the beginning of each permutation
    for (let j = 0; j < remainingPermutations.length; j++) {
      allPermutations.push(char + remainingPermutations[j]);
    }
  }
  sharedCache[inputStr] = allPermutations;
  return allPermutations;
}

const permutateMe = (str) => permutations(str.split("").sort().join(""));

module.exports = permutateMe;
