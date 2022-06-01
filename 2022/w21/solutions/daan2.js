const iStandOut = (numbers) => {
  let evenCount = 0, oddCount = 0, lastEven, lastOdd;

  for(let i = 0; i < 3; i++){
    if(numbers[i] & 1){
      oddCount++;
      lastOdd = numbers[i];      
    } else {
      evenCount++;
      lastEven = numbers[i];
    }
  }
  if(evenCount === 1){
    return lastEven;
  }
  if(oddCount === 1){
    return lastOdd;
  }

  const lookingForEven = evenCount === 0;
  for(let i = 3; i < numbers.length; i++){
    const modResult = numbers[i] & 1;
    if((modResult === 0 && lookingForEven) || (modResult === 1 && !lookingForEven)){
      return numbers[i];
    }
  }
};
module.exports = iStandOut;