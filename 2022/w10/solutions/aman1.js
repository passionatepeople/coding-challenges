const parse = Date.parse

module.exports = (birthdates, onDate) => {
  let today = parse(onDate),
      len = birthdates.length,
      ages, mid, i = 0, j, tmp, k

  if (len == 1) return ((today - parse(birthdates[0])) / 315576e5) | 0

  if (len == 2)
    return ((((today - parse(birthdates[0])) / 315576e5) | 0) +
    (((today - parse(birthdates[1])) / 315576e5) | 0)) / 2

  ages = new Array(len)
  
  for (;i < len; i++)
    ages[i] = ((today - parse(birthdates[i])) / 315576e5) | 0

  for (i = 1; i < len; i++)
    for (j = i - 1; j >= 0; j--) {
      k = j + 1
      if (ages[k] < ages[j]) {
        tmp = ages[k]
        ages[k] = ages[j]
        ages[j] = tmp
      }
    }

  mid = (len / 2) | 0
  return len % 2 == 0 ? (ages[mid - 1] + ages[mid]) / 2 : ages[mid]
}
