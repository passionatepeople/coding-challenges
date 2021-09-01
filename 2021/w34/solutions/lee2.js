const mostValuable = (sentence) => {
  let s = sentence.split(" ");
  let currentIndex = 0;
  let result = s[0];
  let preVal = 0;

  while (currentIndex < s.length) {
    let strIndex = 0;
    let curValue = 0;
    let a = s[currentIndex].toLowerCase();
    while (strIndex < s[currentIndex].length) {
      curValue += a.charCodeAt(strIndex) - 96;
      strIndex++;
    }

    if (curValue > preVal) {
      result = s[currentIndex];
      preVal = curValue;
    }

    currentIndex++;
  }

  return result;
};

module.exports = mostValuable;
