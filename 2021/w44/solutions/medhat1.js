const offWithIt = (arr) => {
  let a = [...arr], i = 0, smallest = a[0], firstIndex = 0;

  while (i < a.length) {
    if (smallest > a[i]) {
      smallest = a[i];
      firstIndex = i;
    }
    i++;
  }

  a.splice(firstIndex, 1);
  return a;
};

module.exports = offWithIt;
