const obj = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9,
  'j': 10,
  'k': 11,
  'l': 12,
  'm': 13,
  'n': 14,
  'o': 15,
  'p': 16,
  'q': 17,
  'r': 18,
  's': 19,
  't': 20,
  'u': 21,
  'v': 22,
  'w': 23,
  'x': 24,
  'y': 25,
  'z': 26,
}
function mostValuable(sentence) {
  const arr = sentence.split(' ');
  let highestSum = 0;
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    const currSum = arr[i].toLowerCase().split('').reduce((sum, curr) => sum + (obj[curr] || 0), 0)
    if (currSum > highestSum) { result = arr[i]; highestSum = currSum; }
  }
  
  return result;
};

module.exports = mostValuable;