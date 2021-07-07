const substring = String.prototype.substring

let findPermutations = (string, keys = [], values = []) => {
  let index = keys.indexOf(string), len = string.length, permutationsArray = [], char, remain, result, i, j, resultLen
  if (index !== -1) return values[index]

  if (len === 1) return [string]

  for (i = 0; i < len; i++) {
    char = string[i]

    if (string.indexOf(char) !== i)
      continue

    remain = substring.call(string, 0, i) + substring.call(string, i + 1, len)

    result = findPermutations(remain, keys, values)

    for (j = 0, resultLen = result.length; j < resultLen; j++)
      permutationsArray.push(char + result[j])
  }

  keys.push(string)
  values.push(permutationsArray)

  return permutationsArray
}

module.exports = findPermutations
