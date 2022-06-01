const iStandOut = (numbers) => {
  let evenCount = 0, unevenCount = 0, lastEven, lastUneven;

  for(let i = 0; i < 3; i++){
    if(numbers[i] % 2 === 0){
      evenCount++;
      lastEven = numbers[i];
    } else {
      unevenCount++;
      lastUneven = numbers[i];
    }
  }
  if(evenCount === 1){
    return lastEven;
  }
  if(unevenCount === 1){
    return lastUneven;
  }

  const lookingForEven = evenCount === 0;
  for(let i = 3; i < numbers.length; i++){
    const modResult = numbers[i] % 2;
    if((modResult === 0 && lookingForEven) || (modResult === 1 && !lookingForEven)){
      return numbers[i];
    }
  }
};

module.exports = iStandOut;