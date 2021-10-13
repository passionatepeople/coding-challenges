const charCodeAt = String.prototype.charCodeAt;

module.exports = (initialCards, finalCards) => {
  let result = [], lookup = [], keys = '', key, i, len, charCode

  for (i = 0, len = initialCards.length; i < len; i++) {
    charCode = charCodeAt.call(initialCards, i)
    lookup[charCode] ? lookup[charCode][0]++ : ( (lookup[charCode] = [1, 0]), (keys += initialCards[i]) )

    charCode = charCodeAt.call(finalCards, i)
    lookup[charCode] ? lookup[charCode][1]++ : ( (lookup[charCode] = [0, 1]), (keys += finalCards[i]) )
  }

  for (i = 0, len = keys.length; i < len; i++) {
    key = charCodeAt.call(keys, i)

    if (lookup[key][0] === lookup[key][1]) continue
    lookup[key][0] < lookup[key][1] ? result.push(keys[i]) : result.unshift(keys[i])
  }

  return result
}
