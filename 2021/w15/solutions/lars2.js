const reSplitWords = /[_-]+/

const upperFirst = (word) => {
  const char = word.charAt(0)
  const trailing = word.slice(1);

  return char.toUpperCase() + trailing
}

const lowerFirst = (word) => {
  const char = word.charAt(0)
  const trailing = word.slice(1);

  return char.toLowerCase() + trailing
}

const fixCase = (input) => {
  let result = '';

  const words = input.split(reSplitWords)

  let index = -1;
  let length = words.length

  while (++index < length) {
    let word = words[index]

    if (word === word.toUpperCase()) {
      word = word.toLowerCase()
    }

    result = result + (index ? upperFirst(word) : lowerFirst(word))
  }

  return result
};

module.exports = fixCase;