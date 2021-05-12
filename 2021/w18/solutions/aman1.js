const NUM_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const HUNDREDS = new Array(10).fill(true).map((_, i) => (i !== 0 ? `${ NUM_WORDS[i] } hundred` : null))
const THOUSANDS = new Array(10).fill(true).map((_, i) => ( i !== 0 ? `${ NUM_WORDS[i] } thousand`: null))

const generateTens = (prefix='') => [
  ...NUM_WORDS.map(value => `${prefix}${value}`),
  ...['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    .map((value, i) => new Array(10)
      .fill(true)
      .map((_, i) => i === 0 ? `${prefix}${value}` : `${prefix}${ value } ${ NUM_WORDS[i] }`))
].flat()

const TENS = generateTens()
const TENS_WITH_AND = generateTens('and ')

const getSaiyanLevel = input => {
  if (input > 9000) {
    return 'it\'s over nine thousand!'
  }

  if (input < 100) {
    return TENS[input]
  }

  // hundreds
  if (input < 1000) {
    const first = input / 100 | 0, second = input % 100
    if (second === 0) {
      return HUNDREDS[first]
    }

    return HUNDREDS[first] + ' ' + TENS_WITH_AND[second]
  }

  // thousands
  const first = input / 1000 | 0, second = (input % 1000) / 100 | 0, third = (input % 1000) % 100

  if (second === 0 && third === 0) {
    return THOUSANDS[first]
  }

  if (second === 0 && third < 100) {
    return THOUSANDS[first] + ' ' + TENS_WITH_AND[third]
  }

  if (third === 0) {
    return THOUSANDS[first] + ' ' + HUNDREDS[second]
  }

  return THOUSANDS[first] + ' ' + HUNDREDS[second] + ' ' + TENS_WITH_AND[third]
}

module.exports = getSaiyanLevel
