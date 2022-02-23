module.exports = arr => {
  let min = arr[0], max = arr[0];
  for(let i = 1; i < arr.length; i++){
    const value = arr[i];
    if(value < min){
      min = value;
    } else if (value > max){
      max = value;
    }
  }
  return [min, max];
};