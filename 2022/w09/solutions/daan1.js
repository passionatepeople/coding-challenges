const substring = String.prototype.substring;

const goAround = (str) => {
  const result = [], lengthM = str.length-1;
  result[lengthM] = str;
  for(let i = str.length -2; i >= 0; i--){
    result[i] = result[i+1][lengthM] + substring.call(result[i+1], 0, lengthM);
  }
  return result;
};

module.exports = goAround;