const evaporate = (number) => {
  if (number < 10) {
    return 0;
  }
  let count = 0; 
  let numStr = number.toString();
  while(numStr.length > 1) {
      number = numStr.split("");
      numStr = number.reduce((acc,curr) => acc*curr, 1) + '';
      count++;
  }
  return count;
};

module.exports = evaporate;
