const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const HUNDREDS = new Array(10).fill(true).map((_, i) => (i !== 0 ? `${ NUM_WORDS[i] } hundred` : null))
const THOUSANDS = new Array(10).fill(true).map((_, i) => (i !== 0 ? `${ NUM_WORDS[i] } thousand` : null))
const generateTens = (prefix = '') => [
  ...NUM_WORDS.map(value => `${ prefix }${ value }`),
  ...['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    .map((value, i) => new Array(10)
      .fill(true)
      .map((_, i) => i === 0 ? `${ prefix }${ value }` : `${ prefix }${ value } ${ NUM_WORDS[i] }`))
].flat()
const TENS_WITH_AND = generateTens('and ')

const HUNDREDS_WORDS = generateTens()
let count = HUNDREDS_WORDS.length
for (let i = 1; i < 10; i++) {
  for (let j = 0; j < 100; j++) {
    HUNDREDS_WORDS[count] = j === 0 ? HUNDREDS[i] : HUNDREDS[i] + ' ' + TENS_WITH_AND[j]
    count++
  }
}

const getSaiyanLevel = input => {
  if (input > 9000)
    return 'it\'s over nine thousand!'

  if (input < 1000)
    return HUNDREDS_WORDS[input]

  const first = input / 1000 | 0, second = (input % 1000)

  if (second === 0) {
    return THOUSANDS[first]
  }

  if (second < 100) {
    return THOUSANDS[first] + ' ' + TENS_WITH_AND[second]
  }

  return THOUSANDS[first] + ' ' + HUNDREDS_WORDS[second]
}

module.exports = getSaiyanLevel
