const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, low, high) => {
  const pivot = arr[high];
  let i = low -1;
  for(let j = low; j <= high; j++){
    if(arr[j] < pivot){
      i++;
      swap(arr,i,j);
    }
  }
  swap(arr, i+1, high);
  return(i+1);
};

const quickSort = (arr, low, high) => {
  if(low < high){
    const pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi +1, high);
  }
};

const flatten = (arr) => {
  const flatArr = [];
  !(function flat(arr){
    arr.forEach(el => {
      if(Array.isArray(el)){
        flat(el);
      } else {
        flatArr.push(el);
      }
    });
  })(arr);
  return flatArr;
};

const flatSort = (arr) => {
  const flat = flatten(arr);
  quickSort(flat, 0, flat.length-1);
  return flat;
};

module.exports = flatSort;