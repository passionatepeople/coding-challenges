const simplify = (arr) => {
  let output = '';
  let currentStreak = 0;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if(current+1 === arr[i+1]){
      currentStreak++;
    } else {
      if(currentStreak > 1){
        output += current - currentStreak + '-' + current + ',';
      } else if (currentStreak === 1) {
        output += arr[i-1] + ',' + current + ',';
      } else {
        output += current + ',';
      }
      currentStreak = 0;
    }
  }
  return output.substring(0, output.length-1);
};

module.exports = simplify;