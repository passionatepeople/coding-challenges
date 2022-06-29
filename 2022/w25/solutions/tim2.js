const flatten = (arr, result = []) => {
  for (let index = arr.length - 1; index != -1; index--) {
    const item = arr[index];
    if (item?.length) {
      flatten(item, result);
    } else {
      result.push(item);
    }
  }
  return result;
};

const flatSort = arr => Array.from(Int8Array.from(flatten(arr)).sort());

module.exports = flatSort;