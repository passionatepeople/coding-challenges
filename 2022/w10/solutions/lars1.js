const toUnix = Date.parse
const round = Math.round
const floor = Math.floor
const slice = Array.prototype.slice
const sort = Array.prototype.sort
const divisor = 31557600000

const ageMedian = (birthdates, onDate) => {
  const base = toUnix(onDate)

  const length = birthdates.length
  const loop = sort.call(slice.call(birthdates, 0))
  const mid = floor(length / 2);

  const a = toUnix(loop[mid])
  const diffA = base - a
  const ageA = diffA / divisor | 0

  if (length % 2) {
    return round(ageA / 0.5) * 0.5;
  }

  const b = toUnix(loop[mid - 1])
  const diffB = base - b
  const ageB = diffB / divisor | 0

  const mean = (ageA + ageB) / 2

  return round(mean / 0.5) * 0.5;
};
module.exports = ageMedian;