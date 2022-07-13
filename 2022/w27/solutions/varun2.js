module.exports = ([...arr]) => {
  const len = arr.length;

  arr.sort((a, b) => a[0] - b[0])

  let start = 0;
  let end = 0;
  let result = 0

  for (let i = 0; i < len; i++) {
    if ((start == 0 && end == 0) || arr[i][0] > end) {
      start = arr[i][0];
      end = arr[i][1];
      result += arr[i][1] - start
    } else if (arr[i][1] > end) {
      result = result - (end - start) + (arr[i][1] - start)
      end = arr[i][1];
    }
  }

  return result
};