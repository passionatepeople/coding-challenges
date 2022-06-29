const flatten = (array, result = []) => {
  for (let i = 0; i < array.length; i++) {
    const val = array[i];

    if (Array.isArray(val)) {
      flatten(val, result)
    } else {
      result.push(val)
    }
  }

  return result;
}

const flatSort = (array) => {
  return flatten(array).sort((a,b) => a - b);
};

module.exports = flatSort;