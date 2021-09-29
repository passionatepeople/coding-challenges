const evaporate = (number, count=0) => {
  let numStr = number.toString(); 
  
  if (numStr.length === 1) {
    return count;
  } 
  let reducedNum = numStr.split('').reduce((acc, curr) => acc * curr, 1);
  return evaporate(reducedNum, count + 1);
};

module.exports = evaporate;