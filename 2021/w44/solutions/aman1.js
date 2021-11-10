const splice = Array.prototype.splice

module.exports = (arr) => {
  let arr2 = [], index = 0, value = arr[0], v, i, len = arr.length

  for (i = 0; i < len ; i++) {
      v = arr[i]
      if (v < value) {
          value = v
          index = i
      }
      arr2.push(v)
  }

  splice.call(arr2, index, 1)

  return arr2
}
