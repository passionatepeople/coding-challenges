const swap = (chars, i1, i2) => {
  let tmp = chars[i1];
  chars[i1] = chars[i2];
  chars[i2] = tmp;
};
const permute = (chars, idx, results) => {
  if (idx === chars.length) {
    results.add(chars.join(""));
  }
  for (let i = idx; i < chars.length; i++) {
    swap(chars, idx, i);
    permute(chars, idx + 1, results);
    swap(chars, idx, i);
  }
};
const permutateMe = (string) => {
  let results = new Set();
  permute([...string], 0, results);
  return [...results];
};
module.exports = permutateMe;