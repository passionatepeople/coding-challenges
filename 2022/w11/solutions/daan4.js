const truncIt = (arr) => {
    const l = arr.length;
    if(l <= 2){return 0;}
    const e1 = arr[0];
    let smallest = e1, largest = e1, total = e1;
    for(let i = 1; i < l; i++){
      const currentValue = arr[i];
      total += currentValue;
      if(currentValue < smallest){
        smallest = currentValue;
      } else if(currentValue > largest){
        largest = currentValue;
      }
    }
    return total - smallest - largest;
  };
  
  module.exports = truncIt;
  