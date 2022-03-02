const max = Math.max;
const push = Array.prototype.push;

const supermarket = (customers, tillCount) => {
  const tills = [];
  for(let i = 0; i < tillCount; i++){
    push.call(tills, customers[i] || 0);
  }
  let tillsDuration = 0;
  for(let i = tillCount; i < customers.length; i++){
    let smallest = tills[0], smallestIndex = 0;
    for(let j = 1; j < tillCount; j++){
      if (tills[j] < smallest) {
        smallest = tills[j];
        smallestIndex = j;
      }
    }
    tillsDuration += smallest;
    for(let j = 0; j < tillCount; j++){      
      tills[j] -= smallest;
    }
    tills[smallestIndex] = customers[i];
  }
  return tillsDuration + max(...tills);
};

module.exports = supermarket;