const slice = Array.prototype.slice;

module.exports = (customers, tillCount) => {  
  const tills = slice.call(customers, 0,tillCount);
  for(let i = tillCount; i < customers.length; i++){
    let smallest = tills[0], smallestIndex = 0;
    for(let j = 1; j < tillCount; j++){
      if (tills[j] < smallest) {
        smallest = tills[j];
        smallestIndex = j;
      }
    }
    tills[smallestIndex] += customers[i];
  }
  let max = tills[0];
  for(let i = 1; i < tillCount; i++){
    if(max < tills[i]){
      max = tills[i];
    }
  }
  return max;
};