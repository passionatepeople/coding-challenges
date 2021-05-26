function quickSort (arr, left, right) {
  let pivot, partitionIndex

  if (left < right) {
    pivot = right
    partitionIndex = partition(arr, pivot, left, right)

    //sort left and right
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
  return arr
}

function partition (arr, pivot, left, right) {
  let pivotValue = arr[pivot],
    partitionIndex = left

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex)
      partitionIndex++
    }
  }
  swap(arr, right, partitionIndex)
  return partitionIndex
}

function swap (arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

module.exports = (arr1, arr2, direction) => {
  const arr3 = [...arr1, ...arr2]
  const sortedArray = quickSort(arr3, 0 , arr3.length - 1)
  return direction === 'asc' ? sortedArray : sortedArray.reverse()
}
