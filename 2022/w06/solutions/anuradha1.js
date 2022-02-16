const { charCodeAt } = String.prototype;

module.exports = (arr, missingLetter, i = 0,) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const currCode = charCodeAt.call(arr[i], 0);
    const nextCode = charCodeAt.call(arr[i + 1], 0);
    if (currCode + 1 !== nextCode) {
      missingLetter = String.fromCharCode(currCode + 1);
      break;
    }
  }
  return missingLetter;
}