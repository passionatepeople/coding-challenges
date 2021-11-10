function offWithIt (arr, minIndex=0) {
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i]
    if (curr < arr[minIndex]) {
      minIndex = i;
    } 
  }
  let arrCopy = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== minIndex) {
      arrCopy.push(arr[i]);
    }
  }
  return arrCopy;
}
module.exports = offWithIt;