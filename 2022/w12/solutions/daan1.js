const {split, padEnd} = String.prototype;
const {join, unshift} = Array.prototype;
const expandIt = (num) => {
  const values = split.call((num+''),'');
  const numbers = [];
  for(let i = values.length-1; i >= 0; i--){
    if(values[i] != "0"){
      unshift.call(numbers, padEnd.call(values[i], values.length - i, '0'));
    }
  }  

  return join.call(numbers, ' + ');
};

module.exports = expandIt;
