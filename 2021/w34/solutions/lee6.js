const mostValuable = (sentence) => {
  let preVal = 0;
  let nextValue = 0;
  let startIndex = 0;
  let start = 0;
  end = 0;
  for (currentIndex = 0; currentIndex < sentence.length; currentIndex++) {
    nextValue += sentence.charCodeAt(currentIndex) % 32;
    if (
      sentence[currentIndex] === " " ||
      currentIndex === sentence.length - 1
    ) {
      if (nextValue > preVal) {
        start = startIndex;
        end = sentence[currentIndex] === " " ? currentIndex - 1 : currentIndex;
        preVal = nextValue;
      }
      startIndex = currentIndex + 1;
      nextValue = 0;
    }
  }

  return sentence.slice(start, end + 1);
};

module.exports = mostValuable;
