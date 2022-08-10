const bumpMe = (str) => {
  const len = str.length;

  let num = str.charCodeAt(len - 1);

  const short = str.slice(0, len - 1)
  if (num < 57) {
    return short + (num - 47)
  } else if (num > 57) {
    return str + 1
  }

  return bumpMe(short) + "0";
};

module.exports = bumpMe;