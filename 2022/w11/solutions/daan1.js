const truncIt = (arr) => {
  if(arr.length <= 2){return 0;}
  let smallest = arr[0], largest = arr[0], total = arr[0];
  for(let i = 1; i < arr.length; i++){
    const currentValue = arr[i];
    total += currentValue;
    if(currentValue < smallest){
      smallest = currentValue;
    }
    if(currentValue > largest){
      largest = currentValue;
    }
  }
  return total - smallest - largest;
};

module.exports = truncIt;
