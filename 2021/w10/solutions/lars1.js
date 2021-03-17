const sorter = (a, b) => b.count - a.count || a.charCode - b.charCode;

const getLetterCount = (input) => {
  const result = new Map()

  for (let letter of input) {
    const value = result.get(letter)

    if (value) {
      result.set(letter, { letter: letter, charCode: value.charCode, count: value.count + 1 })
    } else {
      result.set(letter, { letter: letter, charCode: letter.charCodeAt(), count: 1 })
    }
  }

  return [...result.values()]
}

module.exports = (input) => {
  const letters = getLetterCount(input.toLowerCase());
  return letters.sort(sorter).map((entry) => entry.letter)
};