const removeDupes = (string) => {
  const noDupArr = [];
  const strArr = string.toLowerCase().split('');
  
  for(let i = 0; i < strArr.length; i++) {
    if(strArr[i] !== strArr[i-1] || !/[a-z]+/g.test(strArr[i])) {
      noDupArr.push(string[i]);
    }
  }

  return noDupArr.join('');
};

module.exports = removeDupes;
