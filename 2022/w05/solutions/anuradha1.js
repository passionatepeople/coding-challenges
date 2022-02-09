const { indexOf, lastIndexOf } = Array.prototype;

const imSpecial = (str, arr = str.toLowerCase().split('')) => {
  let result = '';
  arr.some((char, idx) => {
    if (indexOf.call(arr, char) === lastIndexOf.call(arr, char)) {
      result = str[idx];
      return true;
    }
  });
  return result;
};

module.exports = imSpecial;