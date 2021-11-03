const lookup = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

module.exports = n => {
  // (^-^)
  if (n.length < 50) return false;

  let str = n.toLowerCase(), i
  for (i = 0; i < 26; i++)
    if (str.indexOf(lookup[i]) === -1) return false
  
  return true
}
