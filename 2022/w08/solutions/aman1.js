const supermarket = (arr, tills) => {
  let result = new Array(tills),
  len = arr.length,
  i, min, index,
  total = 0,
  val

  if (tills > len) {
    return Math.max.apply(null, arr)
  }

  if (tills === 1) {
    for (i = 0; i < len; i++) {
      total += arr[i]
    }

    return total
  }


  for (i = 0; i < len; i++) {
    val = arr[i]
    if (i < tills) {
      result[i] = val
      continue
    }

    min = Math.min.apply(null, result)
    index = result.indexOf(min)
    result[index] += arr[i]
  }

  return Math.max.apply(null, result)
};

module.exports = supermarket
