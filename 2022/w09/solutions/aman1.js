const substring = String.prototype.substring
module.exports = str => {
  let s = str + str,
  len = str.length,
  arr = new Array(len),
  i = 0, j = 1, 
  len2 = len - 1
  
  arr[len2] = str
  
  for (; i < len2; j++, i++)
    arr[i] = substring.call(s, j, len + j)

  return arr
}
