const
  NUM_WORDS = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
  TENS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
    'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
  HUNDREDS = []

for (let i = 0; i < 10; i++) HUNDREDS[i] = i === 0 ? '' : (TENS[i] + ' hundred')

for (let i = 0; i < 8; i++) for (let ii = 0; ii < 10; ii++)
    TENS.push(ii === 0 ? NUM_WORDS[i] : (NUM_WORDS[i] + '-' + TENS[ii]))

module.exports = number => {
  let sign = '', input = number

  if (number < 0 && (sign = 'minus ', input *= -1), input < 100) {
    return sign + TENS[input]
  }

  if (input < 1000) {
    const first = input / 100 | 0, second = input % 100
    return sign + HUNDREDS[first] + (second ? ' ' + TENS[second] : '')
  }

  const first = input / 1000 | 0,
        second = (input % 1000) / 100 | 0,
        third = (input % 1000) % 100,

        first1 = (first % 1000) / 100 | 0,
        first2 = (first % 1000) % 100

  return sign
    + (first1 ? HUNDREDS[first1] : '')
    + (first2 ? (first1 ? ' ' : '') + TENS[first2] : '')
    + ' thousand'
    + (second ? ' ' + HUNDREDS[second] : '')
    + (third ? ' ' + TENS[third] : '')
}
