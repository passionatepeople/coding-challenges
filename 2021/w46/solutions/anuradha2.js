const wheatFromTheChaff = (data) => {
  let max = 0, num = '';
  for (let i = 0; i <= data.length; i++) {
    if (data[i] >= '0' && data[i] <= '9') {
      num += data[i];
    } else if (num) {
      if (num > max) { max = +num; }
      num = '';
    }
  }
  return max;
}

module.exports = wheatFromTheChaff;