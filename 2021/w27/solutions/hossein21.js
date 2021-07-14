function balanceMe(array) {
  return dfs(array, 0, 0, array.length - 1, 0);
}
function dfs(array, leftIndex, leftSum, rightIndex, rightSum) {
  if (leftIndex >= rightIndex) {
    return leftSum === rightSum && leftIndex <= rightIndex ? leftIndex : -1;
  }
  const rightProgress = dfs(array, leftIndex, leftSum, rightIndex - 1, rightSum + array[rightIndex]);
  if (rightProgress >= 0) {
    return rightProgress;
  }
  const leftProgress = dfs(array, leftIndex + 1, leftSum + array[leftIndex], rightIndex, rightSum);
  if (leftProgress >= 0) {
    return leftProgress;
  }
  const bothProgress = dfs(array, leftIndex + 1, leftSum + array[leftIndex], rightIndex - 1, rightSum + array[rightIndex]);
  return bothProgress;
}

module.exports = balanceMe;