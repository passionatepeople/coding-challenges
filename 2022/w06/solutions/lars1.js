const charCodeAt = String.prototype.charCodeAt
const fromCharCode = String.fromCharCode

const whatsMissing = (arr) => {
  let i = 1, l = arr.length
  for (; i < l; i++) {
    const curr = charCodeAt.call(arr[i])
    if ((curr - charCodeAt.call(arr[i - 1])) > 1) {
      return fromCharCode(curr - 1);
  }
  }
};

module.exports = whatsMissing;
