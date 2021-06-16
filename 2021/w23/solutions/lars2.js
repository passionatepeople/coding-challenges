const YEAR = 31536000
const DAY = 86400
const HOUR = 3600
const MINUTE = 60

const YEARS = Array.from({ length: 4 }, (_, i) => `${i} year${i > 1 ? 's' : ''}`)
const DAYS = Array.from({ length: 365 }, (_, i) => `${i} day${i > 1 ? 's' : ''}`)
const HOURS = Array.from({ length: 60 }, (_, i) => `${i} hour${i > 1 ? 's' : ''}`)
const MINUTES = Array.from({ length: 60 }, (_, i) => `${i} minute${i > 1 ? 's' : ''}`)
const SECONDS = Array.from({ length: 60 }, (_, i) => `${i} second${i > 1 ? 's' : ''}`)

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

const howLong = (number) => {
  const result = []
  let remaining = number

  if (remaining >= YEAR) {
    const yearDigit = ~~(remaining / YEAR)
    result.push(YEARS[yearDigit])
    remaining = remaining % YEAR
  }

  if (remaining >= DAY) {
    const dayDigit = ~~(remaining / DAY)
    result.push(DAYS[dayDigit])
    remaining = remaining % DAY
  }

  if (remaining >= HOUR) {
    const hourDigit = ~~(remaining / HOUR)
    result.push(HOURS[hourDigit])
    remaining = remaining % HOUR
  }

  if (remaining >= MINUTE) {
    const minuteDigit = ~~(remaining / MINUTE)
    result.push(MINUTES[minuteDigit])
    remaining = remaining % MINUTE
  }

  if (remaining) {
    result.push(SECONDS[remaining])
  }

  return formatResult(result);
};

module.exports = howLong;
