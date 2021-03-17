const asciiCount = (string) => {
  // Count char occurrences into sparse array indexed by charCode (asc)
  const counts = new Array(256)
  for (let char, i = string.length; i--; ) {
    char = string.charCodeAt(i)
    if (char > 64 && char < 91) char = char + 32
    counts[char] = (counts[char]|0) + 1
  }

  // Group chars (desc) into sparse array indexed by count (desc)
  const grouped = []
  for (let count, char, i = 256; i--; ) {
    count = counts[i]
    if (!count) continue
    char = String.fromCharCode(i)
    if (!grouped[count]) grouped[count] = [char]
    else grouped[count].push(char)
  }

  // Flatten into array of chars sorted by count (desc) and charCode (desc)
  const result = []
  for (let chars, i = 0; i < grouped.length; i++) {
    chars = grouped[i]
    if (!chars) continue
    for (const char of chars) result.unshift(char)
  }

  return result
}

module.exports = asciiCount