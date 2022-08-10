const bumpMe = (str, checkIndex = 1) => {
  let checkCharCode = str.charCodeAt(str.length - checkIndex);
  if (checkCharCode < 57) {
    return (
      str.slice(0, str.length - checkIndex) +
      String.fromCharCode(checkCharCode + 1) +
      "0".repeat(checkIndex - 1)
    );
  }
  if (checkCharCode > 57) {
    return (
      str.slice(0, str.length - checkIndex + 1) +
      "1" +
      "0".repeat(checkIndex - 1)
    );
  }

  if (checkCharCode === 57) {
    return bumpMe(str, checkIndex + 1);
  }
};

module.exports = bumpMe;