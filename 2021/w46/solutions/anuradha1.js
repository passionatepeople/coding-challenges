const wheatFromTheChaff = (data) => {
  const arr = data.replace(/[^0-9]/g, '-').split('-');
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if(+arr[i] > max) {
      max = +arr[i]
    }
  }
  return max;
}

module.exports = wheatFromTheChaff;