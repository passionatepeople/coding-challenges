let charCodeAt = String.prototype.charCodeAt;
let fromCharCode = String.fromCharCode;

const whatsMissing = (arr) => {
  let code = charCodeAt.call(arr[0], 0)
  let nextCode;
  for (let i = 1; i < arr.length; i++) {
    nextCode = charCodeAt.call(arr[i], 0)

    if ((nextCode - code) === 1) {
      code = nextCode;
      continue;
    }

    return fromCharCode(code + 1)
  }
};

module.exports = whatsMissing;
