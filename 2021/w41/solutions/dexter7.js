module.exports = n => {
  // nearest
  const rest = n % 10
  const deci = 0| n/10
  const deci_ = deci - 1
  const restsum = ((rest**2 + rest) >> 1) + rest * deci * 10 + deci * 45
  const decisum = (deci_**2+deci_) * 45
  return decisum + restsum
}