module.exports = (arr) => {
  const first = arr[0].charCodeAt();
  for (let i = 0; i < arr.length; i++) {
    if (i + first !== arr[i].charCodeAt())
      return String.fromCharCode(i + first);
  }
};
