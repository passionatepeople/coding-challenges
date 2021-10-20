module.exports = n => {
  // nearest
  const rest = n % 10
  const deci = 0| n/10
  const deci_ = deci - 1
  const restsum = ((rest*(rest+1)) >> 1) + rest * deci * 10 + deci * 45
  const decisum = (deci_*(deci_+1)) * 45
  return decisum + restsum
}