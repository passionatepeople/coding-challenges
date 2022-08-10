const charCodeAt = String.prototype.charCodeAt,
  slice = String.prototype.slice;

const bumpMe = (str) => {
  let lastIndex = str.length - 1,
    code = charCodeAt.call(str, lastIndex);

  if (code > 57) return str + 1;

  let tailing = "";

  while (code == 57) {
    lastIndex -= 1;
    code = charCodeAt.call(str, lastIndex);
    tailing += "0";
  }

  if (code > 57) {
    return slice.call(str, 0, lastIndex + 1) + 1 + tailing;
  }

  return slice.call(str, 0, lastIndex) + (code - 47) + tailing;
};

module.exports = bumpMe;