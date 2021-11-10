const offWithIt = (arr, minIndex=0, arrCopy=[...arr])=> {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }
  arrCopy.splice(minIndex, 1);
  return arrCopy;
}
module.exports = offWithIt;