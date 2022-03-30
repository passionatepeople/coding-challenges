const zeros = [
  '',
  '0',
  '00',
  '000',
  '0000',
  '00000',
  '000000',
]

module.exports = (num) => {
  let val = num

  let res = ''
  for (let j=0; val > 0; j++) {
    let i = val % 10
    val = ~~(val / 10);

    if (!i) continue;

    let v = i + zeros[j]

    if (res) {
      res = v + ' + ' + res;
      continue;
    } else {
      res = v
    }
  }
  return res;
}
