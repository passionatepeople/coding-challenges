const simplify = (arr) => {
  let final = '',
    start,
    end,
    i = 0,
    len = arr.length;
  while (i < len) {
    start = arr[i];
    end = start;

    while (arr[i + 1] - arr[i] === 1) {
      end = arr[i + 1];
      i++;
    }

    if (final) final = final + ',';
    if (end - start === 1) {
      final = final + (start + ',' + end);
    } else {
      final = final + (start === end ? start : start + '-' + end);
    }
    i++;
  }
  return final;
};

module.exports = simplify;