const hasItAll = (n, alphabetCount = [...Array(26)].map(_=>0)) => {
  for(let i = 0; i < n.length; i++) {
    const charCode = n.charCodeAt(i);
    if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      alphabetCount[charCode % 32 - 1]++;
    }
  }
  return alphabetCount.indexOf(0) === -1;
};

module.exports = hasItAll;