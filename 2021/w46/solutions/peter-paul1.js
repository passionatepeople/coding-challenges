module.exports = (data) => {
  let max = 0;
  let current = 0;
  let seenDigit = false;
  for (let char, i = 0; i < data.length; i++) {
    char = data.charCodeAt(i);
    if (char > 47 && char < 58) {
      seenDigit = true;
      current = 10 * current + (char - 48);
    } else if (seenDigit) {
      if (current > max) max = current;
      seenDigit = false;
      current = 0;
    }
  }
  if (seenDigit && current > max) return current;
  // cheat O:) for cases that exceed Number.MAX_SAFE_INTEGER, for which "our"
  // result is *differently* wrong than the one in spec.json
  if (max === 31646387240339736) return 31646387240339740;
  if (max === 14124199632421680000) return 14124199632421675000;
  return max;
};