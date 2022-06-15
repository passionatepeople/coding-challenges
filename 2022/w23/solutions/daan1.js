const factors = [,1,10,100,1000,10000,100000,1000000];
const swappedDiff = (first, second) => {  
  const firstFactor = factors[Math.log(first) * Math.LOG10E + 1 | 0], secondFactor = factors[Math.log(second) * Math.LOG10E + 1 | 0];
  const firstMod = first%firstFactor, secondMod = second%secondFactor;
  const firstFd = (first-firstMod)/firstFactor, secondFd = (second-secondMod)/secondFactor;
  const newFirst = secondFd * firstFactor + firstMod;
  const newSecond = firstFd * secondFactor + secondMod;
  return newFirst > newSecond ? newFirst - newSecond : newSecond - newFirst;
};
module.exports = swappedDiff;