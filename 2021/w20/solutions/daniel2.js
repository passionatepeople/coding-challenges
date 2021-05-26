function swap(items, leftIndex, rightIndex) {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
}

function sort(items, left, right) {
  const index = partition(items, left, right); //index returned from partition
  if (left < index - 1) {
    //more elements on the left side of the pivot
    sort(items, left, index - 1);
  }
  if (index < right) {
    //more elements on the right side of the pivot
    sort(items, index, right);
  }
  return items;
}

module.exports = (arr1, arr2, direction) => {
  const arr3 = [...arr1, ...arr2];
  const sortedArray = sort(arr3, 0, arr3.length - 1);
  return direction === "asc" ? sortedArray : sortedArray.reverse();
};
