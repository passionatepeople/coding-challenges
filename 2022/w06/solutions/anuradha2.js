const charCodeAt = String.prototype.charCodeAt;

function whatsMissing(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const currCode = charCodeAt.call(arr[i], 0);
    if (currCode + 1 !== charCodeAt.call(arr[i + 1], 0)) {
      return String.fromCharCode(currCode + 1);
    }
  }
  return undefined;
}

module.exports = whatsMissing;