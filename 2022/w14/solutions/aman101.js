const slice = Array.prototype.slice
const charCodeAt = String.prototype.charCodeAt
const stack = new Array(50)
const map = new Array(255)
map[78] = 1
map[83] = 2
map[69] = 3
map[87] = 4

module.exports =  directions => {
  let len = directions.length, i = 1, count = 0, d, value
  
  stack[0] = directions[0]

  for (; i < len; i++) {
    d = directions[i]

    if (count > -1) {
      value = map[charCodeAt.call(d, 0)] + map[charCodeAt.call(stack[count], 0)]

      if (value == 3 || value == 7) {
        count--
        continue
      }
    }

    count++
    stack[count] = d
  }
  
  return slice.call(stack, 0, count + 1)
}