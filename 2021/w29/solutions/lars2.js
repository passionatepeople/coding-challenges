const chopMeUp = (string, chunkSize = 2, filler = '_') => {
  let index = 0;
  let tempArray = []

  for (index = 0; index < string.length; index += chunkSize) {
    let chunk = string.slice(index, index + chunkSize)
    let count = chunkSize - chunk.length
    if (count) {
      chunk = chunk + filler.repeat(count)
    }

    tempArray.push(chunk)
  }

  return tempArray
};

module.exports = chopMeUp;
