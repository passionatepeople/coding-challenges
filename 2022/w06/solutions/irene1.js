const fromCharCode = String.fromCharCode;
const charCodeAt = String.prototype.charCodeAt;

const whatsMissing = (arr) => {
  const first = charCodeAt.call(arr[0], 0);
  
  for (let i = 1; i < arr.length; i++) {
    if (charCodeAt.call(arr[i], 0) !== first + i) {
      return fromCharCode(first + i);
    }
  }
  return '';
};

module.exports = whatsMissing;
