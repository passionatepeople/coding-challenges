const fixCase = (s) => {
  const arr = s.match(/([A-Z'])([a-z'])+|([a-z'])+|([A-Z'])+/g);
  for (let i = 0, len = arr.length; i < len; i++) {
    arr[i] = arr[i].toLowerCase();
    if ( i > 0) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }
  }
  return arr.join('');
};
module.exports = fixCase;
