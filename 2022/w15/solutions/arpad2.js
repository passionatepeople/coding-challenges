module.exports = (arr) => {
  let start = arr[0];
  let end = arr[1];
  let result = '' + start;
  let i = 2;
  const len = arr.length;

  while (i < len) {
    let current = arr[i];

    if (current === start + 2) {
      end = current;

      while (end + 1 === arr[++i]) {
        end = arr[i];
      }

      result += '-' + end;
      start = arr[i++];
      end = arr[i++];

      if (start !== undefined) {
        result += ',' + start;
      }
    } else {
      result += ',' + end;
      start = end;
      end = current;
      i++;
    }
  }

  if (end !== undefined) {
    result += ',' + end;
  }

  return result;
};