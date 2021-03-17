// Map a string to an unsorted array of [charCode, count] tuples
const countByChar = (string) => {
  const map = new Map()
  for (let char, i = string.length; i--;) {
    char = string.charCodeAt(i)
    if (char > 64 && char < 91) char = char + 32
    map.set(char, map.has(char) ? map.get(char) + 1 : 1)
  }
  return Array.from(map.entries())
}

// Sort by count (descending) then charCode (ascending)
const sortByCountAndAscii = (a, b) => b[1] - a[1] || a[0] - b[0]

// Convert a [charCode, count] tuple to a char string
const toString = tuple => String.fromCharCode(tuple[0])

const asciiCount = string =>
  countByChar(string).sort(sortByCountAndAscii).map(toString)

module.exports = asciiCount