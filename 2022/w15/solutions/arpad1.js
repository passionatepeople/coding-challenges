module.exports = (arr) => {
  let start = arr[0];
  let end = arr[1];
  let result = '';
  let i = 2;
  const len = arr.length;

  while (i < len) {
    let current = arr[i];

    if (current === start + 2) {
      end = current;

      while (end + 1 === arr[++i]) {
        end = arr[i];
      }

      result += start +'-' + end + ',';
      start = arr[i++];
      end = arr[i++];
    } else {
      result += start + ',';
      start = end;
      end = current;
      i++;
    }
  }

  if (start) {
    result += start + ',';
  }

  if (end) {
    result += end + ',';
  }

  return result.substring(0, result.length - 1);
};