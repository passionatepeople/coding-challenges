const chopMeUp = (string, n = 2, s = "_") => {
  const ret = [""];
  const length = string.length;
  let currentIndex = 0;
  for (let i = 0; i < length; i++) {
    if (!ret[currentIndex]) {
      ret[currentIndex] = "";
    }

    ret[currentIndex] += string[i];

    if (ret[currentIndex].length == n) {
      currentIndex++;
    }
  }
  if (ret[ret.length - 1].length !== n) {
    ret[ret.length - 1] = ret[ret.length - 1].padEnd(n, s);
  }

  return ret;
};

module.exports = chopMeUp;
