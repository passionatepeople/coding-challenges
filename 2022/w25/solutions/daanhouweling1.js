const flatSort = (arr, data = []) => {
  let i = 0;
  while (i < arr.length) {
    if (Array.isArray(arr[i]))  {
      flatSort(arr[i], data);
      i++;
      continue;
    }

    if (data.length === 0) {
      data[0] = arr[i];
      i++
      continue;
    }

    let low = 0,
        high = data.length;

    while (low < high) {
      const mid = (low + high) >>> 1;
      if (data[mid] < arr[i]) low = mid + 1;
      else high = mid;
    }

    data.splice(low , 0, arr[i]);
    i++;
  }
  return data;
};

module.exports = flatSort;