const sumSeq = n => n / 2 * (1 + n)
const div10 = n => (n - n % 10) / 10
module.exports = n => sumSeq(n) - sumSeq(div10(n)) * 10