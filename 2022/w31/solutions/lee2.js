const charCodeAt = String.prototype.charCodeAt;
const slice = String.prototype.slice;
const repeat = String.prototype.repeat;
const bumpMe = (str, checkIndex = 1) => {
  let checkCharCode = charCodeAt.call(str, str.length - checkIndex);
  if (checkCharCode < 57) {
    return (
      slice.call(str, 0, str.length - checkIndex) +
      String.fromCharCode(checkCharCode + 1) +
      repeat.call("0", checkIndex - 1)
    );
  }
  if (checkCharCode > 57) {
    return (
      slice.call(str, 0, str.length - checkIndex + 1) +
      "1" +
      repeat.call("0", checkIndex - 1)
    );
  }

  if (checkCharCode === 57) {
    return bumpMe(str, checkIndex + 1);
  }
};

module.exports = bumpMe;