module.exports = (sentence) => {
  let maxValue = 0,
    maxWord = "",
    localMaxValue = 0,
    localMaxWord = "";
  for (let i = 0, il = sentence.length; i < il; ++i) {
    let char = sentence[i];
    if (" " == char)
      localMaxValue > maxValue &&
        ((maxValue = localMaxValue), (maxWord = localMaxWord)),
        (localMaxValue = 0),
        (localMaxWord = "");
    else {
      let charCode = char.charCodeAt();
      localMaxValue += charCode - (90 < charCode ? 96 : 64);
      localMaxWord += char;
    }
  }
  localMaxValue > maxValue && (maxWord = localMaxWord);
  return maxWord;
};
