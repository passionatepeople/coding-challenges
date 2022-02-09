module.exports = (str) => {
  const arr = [...str.toLowerCase()];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) return str.charAt(i);
  }
  return "";
};