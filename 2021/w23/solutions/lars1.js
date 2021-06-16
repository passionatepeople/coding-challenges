const YEAR = 31536000
const DAY = 86400
const HOURS = 3600
const MINUTE = 60

const getText = (digit, base) => `${digit} ${base}${digit > 1 ? 's' : ''}`

const formatResult = (stringArray) => {
  const length = stringArray.length

  let result = ''
  for (let i = 0; i < length; i++) {
    const element = stringArray[i]
    if (i == 0) {
      result += element
    } else if (i == length - 1) {
      result += ` and ${element}`
    } else {
      result += `, ${element}`
    }
  }

  return result
}

const howLong = (seconds) => {
  const result = []
  let remaining = seconds

  if (remaining >= YEAR) {
    const yearDigit = ~~(remaining / YEAR)
    result.push(getText(yearDigit, 'year'))
    remaining = remaining % YEAR
  }

  if (remaining >= DAY) {
    const dayDigit = ~~(remaining / DAY)
    result.push(getText(dayDigit, 'day'))
    remaining = remaining % DAY
  }

  if (remaining >= HOURS) {
    const hourDigit = ~~(remaining / HOURS)
    result.push(getText(hourDigit, 'hour'))
    remaining = remaining % HOURS
  }

  if (remaining >= MINUTE) {
    const minuteDigit = ~~(remaining / MINUTE)
    result.push(getText(minuteDigit, 'minute'))
    remaining = remaining % MINUTE
  }

  if (remaining) {
    result.push(getText(remaining, 'second'))
  }

  return formatResult(result);
};

module.exports = howLong;