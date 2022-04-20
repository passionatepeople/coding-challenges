module.exports = arr => {
  let len = arr.length,
      i = 0,
      result = '',
      num = null

  for (; i < len; i++) {
    if (num != null && arr[i]+1 == arr[i+1]) continue

    if (num == null && arr[i] + 2 == arr[i+2]) {
      num = arr[i], i++
      continue
    }

    if (result) result += ','
    
    if (num != null) {
      result += num + '-' + arr[i]
      num = null
    } else {
      result += arr[i]
    }
  }

  return result
}