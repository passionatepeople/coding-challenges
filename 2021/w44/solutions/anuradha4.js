const offWithIt = (arr, minIndex=0)=> {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }  
  return arr.filter((e,n)=>n!=minIndex);
}
module.exports = offWithIt;