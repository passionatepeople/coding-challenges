module.exports = (arr) => {
  var first = arr[0],
    second = arr[1];
  if (first == second)
    for (var i = 2; ; ++i)
      if (((second = arr[i]), second != first)) return second;
  return first == arr[2] ? second : first;
}